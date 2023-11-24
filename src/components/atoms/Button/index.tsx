import React, { FC, ReactNode } from "react";

import PlaneIcon from "@assets/plane.svg?react";
import PaperClipIcon from "@assets/clip.svg?react";
import BxIcon from "@assets/box-star.svg?react";

import BtnStyle from "./Btn.module.css";
import RBtnStyle from "./RBtn.module.css";

interface BtnProps {
  text: string;
  onClick: () => void;
  actions: () => void;
}

interface RoundBtnProps {
  icon: "plane" | "paperclip" | "squares";
  color: "primary" | "secondary" | "red-gradient";
  action: () => void;
}

const fills: Record<string, React.SVGProps<SVGSVGElement>> = {
  fill1: { fill: "hsl(30, 38%, 90%)" },
  fill2: { fill: "hsl(30, 38%, 60%)" },
};

// Normal button
export const Button: FC<BtnProps> = ({ text, onClick, actions }) => {
  return (
    <button className={BtnStyle["btn-search"]} onClick={onClick} {...actions}>
      {text}
    </button>
  );
};

// Round button
export const RoundBtn: FC<RoundBtnProps> = ({ icon, color, action }) => {
  let btnClassName = RBtnStyle.btn;

  // Set the color of the button
  if (color === "secondary") {
    btnClassName += " " + RBtnStyle["btn-secondary"];
  } else if (color === "red-gradient") {
    btnClassName += " " + RBtnStyle["btn-g-red"];
  }

  const renderIcon = (): ReactNode => {
    switch (icon) {
      case "plane":
        return <PlaneIcon {...fills.fill1} />;
      case "paperclip":
        return <PaperClipIcon {...fills.fill2} />;
      case "squares":
        return <BxIcon />;
      default:
        return "?";
    }
  };

  return (
    <button className={btnClassName} onClick={action}>
      {renderIcon()}
    </button>
  );
};
