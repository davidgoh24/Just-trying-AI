// Add event listener for the "Send" button
document.getElementById("send-btn").addEventListener("click", sendMessage);

// Add event listener for pressing "Enter" in the input field
document.getElementById("user-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});

// Add event listener for the theme toggle button
document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

// Function to handle sending a message
function sendMessage() {
  const userInput = document.getElementById("user-input").value.trim();
  const chatBox = document.getElementById("chat-box");

  if (userInput === "") return; // Prevent empty messages

  // Append user input to chat
  appendMessage("User", userInput, "user-message");

  // Simulate AI response with a delay
  setTimeout(() => {
    const aiResponse = generateAIResponse(userInput);
    appendMessage("AI", aiResponse, "ai-message");
  }, 1000);

  // Clear input
  document.getElementById("user-input").value = "";
}

// Function to append messages to the chat box
function appendMessage(sender, message, className) {
  const chatBox = document.getElementById("chat-box");
  const messageDiv = document.createElement("div");
  messageDiv.className = `chat-message ${className}`;
  messageDiv.textContent = `${sender}: ${message}`;
  chatBox.appendChild(messageDiv);

  // Auto-scroll to the bottom of the chat box
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to toggle between light and dark themes
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}

// Function to generate a simulated AI response
function generateAIResponse(userInput) {
  const responses = [
    "That's interesting! Tell me more.",
    "I'm here to help. Can you clarify?",
    "What do you mean by that?",
    "Hmm, let me think...",
    "That sounds intriguing!",
    `You said: "${userInput}". Let me process that.`,
  ];

  // Return a random response
  return responses[Math.floor(Math.random() * responses.length)];
}
