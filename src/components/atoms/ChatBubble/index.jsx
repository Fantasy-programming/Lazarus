import Style from "./index.module.css";

//TODO: Refactor this to make it better (Add book recon component)

function ChatBubble({ person }) {
  const orientation = person === "left";
  return (
    <div className={Style.bubble}>
      {orientation ? (
        <div className={Style["bubble-right"]}>
          <span>This is a test Chat message</span>
        </div>
      ) : (
        <div className={Style["bubble-left"]}>
          <span>This is a test Chat message</span>
        </div>
      )}
    </div>
  );
}

export default ChatBubble;
