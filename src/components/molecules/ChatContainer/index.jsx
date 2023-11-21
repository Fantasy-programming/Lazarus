import ChatInput from "@components/atoms/ChatInput";
import ChatBtn from "@components/atoms/ChatBtn";
import ChatBubble from "@components/atoms/ChatBubble";

import Style from "./index.module.css";
import Spacing from "@modules/utility.module.css";

function ChatContainer() {
  return (
    <div className={Style.container}>
      <div className={Style.privacy}>
        <div>
          <span>Privacy and Support</span>
          <span>Get Immediate Support</span>
        </div>
        <div> + </div>
      </div>
      <div className={Style.chat}>
        <ChatBubble person="left" />
        <ChatBubble person="right" />
        <ChatBubble person="left" />
      </div>
      <form className={Style.chatbar}>
        <ChatBtn icon="paperclip" color="secondary" />
        <ChatInput className={Spacing["m-x-1"]} />
        <ChatBtn icon="plane" color="red-gradient" />
      </form>
    </div>
  );
}

export default ChatContainer;
