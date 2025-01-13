// Add event listener for the "Send" button
document.getElementById("send-btn").addEventListener("click", sendMessage);

// Add event listener for pressing "Enter" in the input field
document.getElementById("user-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});

// Function to handle sending a message
function sendMessage() {
  const userInput = document.getElementById("user-input").value.trim();
  const chatBox = document.getElementById("chat-box");

  if (userInput === "") return; // Prevent empty messages

  // Append user input to chat
  const userMessage = document.createElement("div");
  userMessage.textContent = User: ${userInput};
  userMessage.style.color = "blue";
  chatBox.appendChild(userMessage);

  // Simulate AI response
  const aiMessage = document.createElement("div");
  aiMessage.textContent = AI: I'm responding to "${userInput}";
  aiMessage.style.color = "green";
  chatBox.appendChild(aiMessage);

  // Clear input
  document.getElementById("user-input").value = "";

  // Auto-scroll to the bottom of the chat box
  chatBox.scrollTop = chatBox.scrollHeight;
}