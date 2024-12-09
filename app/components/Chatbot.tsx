'use client'
import { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Predefined bot responses
  const botResponses = {
    hello: "Hi! How can I assist you today?",
    help: "I can help you with general inquiries. Just ask!",
    default: "Sorry, I didn't understand that. Can you rephrase?"
  };

  // Send a message
  const sendMessage = () => {
    if (userInput.trim()) {
      const userMessage = { sender: "user", text: userInput };
      const botMessage = {
        sender: "bot",
        text: botResponses[userInput.toLowerCase()] || botResponses.default
      };

      setMessages([...messages, userMessage, botMessage]);
      setUserInput("");
    }
  };

  return (
    <div>
      {/* Chatbot button to toggle the chat window */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg z-50"
      >
        Chat
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white shadow-xl rounded-lg p-4 z-100">
          <div className="h-64 overflow-y-auto mb-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 ${message.sender === "user" ? "text-right" : "text-left"}`}
              >
                <p
                  className={`inline-block p-2 rounded-lg ${
                    message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300"
                  }`}
                >
                  {message.text}
                </p>
              </div>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="w-full p-2 border rounded-lg"
              placeholder="Type a message..."
            />
            <button
              onClick={sendMessage}
              className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
