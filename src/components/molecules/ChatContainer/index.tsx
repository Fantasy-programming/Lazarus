import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import ChatInput from "@components/atoms/ChatInput";
import { RoundBtn } from "@components/atoms/Button";
import ChatBubble from "@components/atoms/ChatBubble";

import Style from "./index.module.css";
import Spacing from "@modules/utility.module.css";

function ChatContainer() {
  const [chat, setChat] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");
  const [parent] = useAutoAnimate({
    duration: 150,
    easing: "ease-in-out",
  });
  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setChat([...chat, message]);
    setMessage("");
  };

  return (
    <div className={Style.container}>
      <div className={Style.privacy}>
        <div>
          <span>Privacy and Support</span>
          <span>Get Immediate Support</span>
        </div>
        <div> + </div>
      </div>
      <div className={Style.chat} ref={parent}>
        <ChatBubble person="left" />
        <ChatBubble person="right" />
        <ChatBubble person="left" />
        {chat.map((message: string, index) => (
          <ChatBubble key={index} person="left" message={message} />
        ))}
      </div>
      <form className={Style.chatbar} onSubmit={sendMessage}>
        <RoundBtn icon="paperclip" color="secondary" />
        <ChatInput className={Spacing["m-x-1"]} value={message} action={setMessage} />
        <RoundBtn icon="plane" color="red-gradient" />
      </form>
    </div>
  );
}

export default ChatContainer;
