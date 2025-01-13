document.getElementById("send-btn").addEventListener("click", sendMessage);

document.getElementById("user-input").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});

function sendMessage() {
  const userInput = document.getElementById("user-input").value;
  const chatBox = document.getElementById("chat-box");

  if (userInput.trim() === "") return;

  // Append user input to chat
  const userMessage = document.createElement("div");
  userMessage.textContent = `User: ${userInput}`;
  userMessage.style.color = "blue";
  chatBox.appendChild(userMessage);

  // Simulate AI response
  const aiMessage = document.createElement("div");
  aiMessage.textContent = `AI: I'm responding to "${userInput}"`;
  aiMessage.style.color = "green";
  chatBox.appendChild(aiMessage);

  // Clear input
  document.getElementById("user-input").value = "";

  // Auto-scroll
  chatBox.scrollTop = chatBox.scrollHeight;
}
