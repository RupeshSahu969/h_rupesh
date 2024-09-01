import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

type Message = {
  text: string;
  sender: "user" | "bot";
};

type ChatBoxProps = {
  onClose: () => void;
};

const preGeneratedQuestions = [
  "How can I book an appointment?",
  "What are your OPD opening hours?",
  "Where are you located?",
];

const ChatBox: React.FC<ChatBoxProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const newMessage: Message = { text, sender: "user" };
    const reply = getReply(text);

    setMessages((prevMessages) => [
      ...prevMessages,
      newMessage,
      { text: reply, sender: "bot" },
    ]);

    setInput("");
  };

  const handleQuestionClick = (question: string) => {
    handleSendMessage(question);
  };

  const getReply = (input: string): string => {
    if (input.toLowerCase().includes("appointment")) {
      return "You can book an appointment by calling our reception at 123-456-7890.";
    } else if (input.toLowerCase().includes("hours")) {
      return "We are open from 9 AM to 5 PM, Monday to Friday.";
    } else if (input.toLowerCase().includes("location")) {
      return "We are located at 123 Main Street, Raipur.";
    } else {
      return "Please call 9424137362.";
    }
  };

  return (
    <div className="fixed bottom-5 mt-40 right-5 w-96 h-4/5 bg-white shadow-2xl rounded-lg overflow-hidden z-50 flex flex-col">
      <div className="flex justify-between items-center bg-[#032049] p-4">
        <h3 className="font-semibold text-white">Chat with Us</h3>
        <button onClick={onClose} aria-label="Close chat">
          <FontAwesomeIcon icon={faTimes} color="white" />
        </button>
      </div>
      <div className="p-4 flex-1 overflow-y-auto space-y-4">
        {preGeneratedQuestions.map((question, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleQuestionClick(question)}
          >
            <img
              src="/avatar1.jpeg" // Replace with actual user image URL
              alt="User"
              className="w-8 h-8 rounded-full"
            />
            <div className="bg-gray-100 rounded-lg p-3 shadow-sm">
              {question}
            </div>
          </div>
        ))}
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start space-x-3 ${
              message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
            }`}
          >
            <img
              src={message.sender === "user" ? "/avatar2.jpg" : "/avatar1.jpeg"} // Replace with actual user and bot image URLs
              alt={message.sender === "user" ? "User" : "Bot"}
              className="w-8 h-8 rounded-full"
            />
            <div
              className={`max-w-xs p-3 rounded-lg shadow-md ${
                message.sender === "user"
                  ? "bg-blue-100 text-right"
                  : "bg-gray-100"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t">
        <div className="flex items-center space-x-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-3 border rounded-md"
          />
          <button
            onClick={() => handleSendMessage(input)}
            className="bg-[#032049] text-white p-3 rounded-md"
            aria-label="Send message"
          >
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
