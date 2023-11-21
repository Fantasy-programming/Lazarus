import ChatBtn from "@components/atoms/ChatBtn";
import Style from "./index.module.css";
import ChatContainer from "@components/molecules/ChatContainer";

// TODO: Add state to the chat button + elements

function Chat() {
  return (
    <div className={Style.wrapper}>
      <div className={Style.header}>
        <span className={Style.title}>Chat</span>
        <ChatBtn icon="squares" color="secondary" />
      </div>
      <ChatContainer />
    </div>
  );
}

export default Chat;
