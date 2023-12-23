import { useMemo } from "react";
import tinycolor from "tinycolor2";

export const useBookStyles = (color: string) => {
  const Color = tinycolor(color);
  const darkColor1 = Color.darken(10).toString();
  const darkColor2 = Color.darken(15).toString();

  const bookstyle = useMemo(
    () => ({
      background: color,
      backgroundImage: `linear-gradient(to right, ${darkColor1} 13px, ${darkColor2} 15px, transparent 15px)`,
    }),
    [color, darkColor1, darkColor2],
  );

  return { bookstyle };
};
