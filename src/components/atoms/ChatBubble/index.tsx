import Style from "./index.module.css";

//TODO: Refactor this to make it better (Add book recon component)

type ChatBubbleType = {
  person: string;
  message?: string;
};

function ChatBubble({ person, message }: ChatBubbleType) {
  const orientation = person === "left";

  if (!message) return <></>;

  return (
    <div className={Style.bubble}>
      {orientation ? (
        <div className={Style["bubble-right"]}>
          <span> {message} </span>
        </div>
      ) : (
        <div className={Style["bubble-left"]}>
          <span>{message}</span>
        </div>
      )}
    </div>
  );
}

export default ChatBubble;
