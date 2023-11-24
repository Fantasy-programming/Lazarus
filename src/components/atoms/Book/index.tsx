import tinycolor from "tinycolor2";
import Style from "./index.module.css";

interface BookProps {
  color: string;
  cover?: string;
  author?: string;
  title?: string;
}

interface SmallBookProps {
  title: string;
  color?: string;
  Icon?: string;
}

function Book({ color, cover, title, author }: BookProps) {
  const tColor = tinycolor(color);
  const darkColor1 = tColor.darken(10).toString(); // Compute the first darker shade
  const darkColor2 = tColor.darken(15).toString(); // Compute the second darker shade

  const bookstyle = {
    background: color,
    backgroundImage: `linear-gradient(to right, ${darkColor1} 13px, ${darkColor2} 15px, transparent 15px)`,
  };

  const imageCover = {
    backgroundImage: `url(${cover})`,
  };

  return (
    <div>
      <div className={Style["big-wrapper"]}>
        <div style={bookstyle} className={Style["big-book"]}>
          <div style={imageCover} className={Style["book-image"]}></div>
        </div>
      </div>
      <div>
        <span className={Style.title}>{title}</span>
        <span className={Style.author}>{author}</span>
      </div>
    </div>
  );
}

export function SmallBook({ title, color, Icon }: SmallBookProps) {
  const tColor = tinycolor(color);
  const darkColor1 = tColor.darken(10).toString(); // Compute the first darker shade
  const darkColor2 = tColor.darken(15).toString(); // Compute the second darker shade

  const bookstyle = {
    background: color,
    backgroundImage: `linear-gradient(to right, ${darkColor1} 8px, ${darkColor2} 10px, transparent 10px)`,
  };

  return (
    <div>
      <div className={Style["small-wrapper"]}>
        <div style={bookstyle} className={Style["small-book"]}></div>
      </div>
      {title ?? ""}
    </div>
  );
}

export default Book;
