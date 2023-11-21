import Style from "./ChatInput.module.css";

function ChatInput({ className }) {
  return (
    <input
      placeholder="Write a message"
      className={`${Style["input-primary"]} ${className}`}
    />
  );
}

export default ChatInput;
