import { RoundBtn } from "@components/atoms/Button";
import ChatContainer from "@components/molecules/ChatContainer";

import Style from "./index.module.css";

// TODO: Add state to the chat button + elements

function Chat() {
  return (
    <div className={Style.wrapper}>
      <div className={Style.header}>
        <span className={Style.title}>Chat</span>
        <RoundBtn icon="squares" color="secondary" />
      </div>
      <ChatContainer />
    </div>
  );
}

export default Chat;
