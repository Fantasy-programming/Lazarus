import { forwardRef } from "react";
import Style from "./ChatInput.module.css";

interface ChatInputProps {
  className?: string;
}

const ChatInput = forwardRef<HTMLInputElement, ChatInputProps>(({ className }, ref) => {
  return (
    <input
      placeholder="Write a message"
      name="message-field"
      ref={ref}
      className={`${Style["input-primary"]} ${className}`}
    />
  );
});

ChatInput.displayName = "ChatInput";

export default ChatInput;
