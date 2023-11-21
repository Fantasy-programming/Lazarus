import Style from "./ChatInput.module.css";

function ChatInput({ className, value, action }) {
  return (
    <input
      placeholder="Write a message"
      name="message-field"
      value={value}
      onChange={() => action(event.target.value)}
      className={`${Style["input-primary"]} ${className}`}
    />
  );
}

export default ChatInput;
