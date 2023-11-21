import Style from "./ChatBtn.module.css";
import { ReactComponent as PlaneIcon } from "@assets/plane.svg";
import { ReactComponent as PaperClipIcon } from "@assets/clip.svg";
import { ReactComponent as BxIcon } from "@assets/box-star.svg";

function ChatBtn({ icon, color, action }) {
  let btnClassName = Style.btn;

  const attributes = {
    fill: "hsl(26, 54%, 97%)",
  };

  const attributes2 = {
    fill: "hsl(30, 38%, 60%)",
  };

  // Set the color of the button

  if (color === "secondary") {
    btnClassName += " " + Style["btn-secondary"];
  } else if (color === "red-gradient") {
    btnClassName += " " + Style["btn-g-red"];
  }

  switch (icon) {
    case "plane":
      return (
        <button className={btnClassName} onClick={action}>
          <PlaneIcon {...attributes} />
        </button>
      );
    case "paperclip":
      return (
        <button className={btnClassName} onClick={action}>
          <PaperClipIcon {...attributes2} />
        </button>
      );
    case "squares":
      return (
        <button className={btnClassName} onClick={action}>
          <BxIcon />
        </button>
      );
    default:
      return (
        <button className={btnClassName} onClick={action}>
          ?
        </button>
      );
  }
}

export default ChatBtn;
