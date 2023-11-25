import { useMemo } from "react";
import { useBookStyles } from "@/hooks/useBookStyles";
import { useSmallBookStyles } from "@/hooks/useSmallBookStyles";

import Style from "./index.module.css";

interface BookProps {
  color: string;
  cover?: string;
  author?: string;
  title?: string;
}

interface SmallBookProps {
  title: string;
  color: string;
  icon: string;
}

function Book({ color, cover, title, author }: BookProps) {
  const { bookstyle } = useBookStyles(color);
  const imageCover = useMemo(() => ({ backgroundImage: `url(${cover})` }), [cover]);

  return (
    <div>
      <div className={Style["big-wrapper"]}>
        <div style={bookstyle} className={Style["big-book"]}>
          <div style={imageCover} className={Style["book-image"]}></div>
        </div>
      </div>
      <div>
        <span className={Style.title}>{title ?? "Anonymous"}</span>
        <span className={Style.author}>{author ?? "Unknown"}</span>
      </div>
    </div>
  );
}

export function SmallBook({ title, color, icon }: SmallBookProps) {
  const { IconComponent, bookstyle } = useSmallBookStyles(color, icon);

  return (
    <div className={Style["small-container"]}>
      <div className={Style["small-wrapper"]}>
        <div style={bookstyle} className={Style["small-book"]}>
          <div className={Style["book-icon"]}>
            <IconComponent fill="hsl(40, 64%, 73%)" />
          </div>
        </div>
      </div>
      <span className={Style["small-title"]}>{title}</span>
    </div>
  );
}

export default Book;
