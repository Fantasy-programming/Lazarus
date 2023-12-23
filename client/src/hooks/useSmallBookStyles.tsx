import { useMemo } from "react";
import tinycolor from "tinycolor2";

import AlienIcon from "@assets/soucoupe.svg?react";
import StarIcon from "@assets/star2.svg?react";
import KnifeIcon from "@assets/knife.svg?react";
import HearthIcon from "@assets/hearth.svg?react";
import DiamondIcon from "@assets/diamond.svg?react";
import PlayIcon from "@assets/play.svg?react";

const iconMap = {
  fantasy: AlienIcon,
  audio: PlayIcon,
  thriller: KnifeIcon,
  romance: HearthIcon,
  best: StarIcon,
  psychology: DiamondIcon,
};

export const useSmallBookStyles = (color: string, icon?: string) => {
  const Color = useMemo(() => tinycolor(color), [color]);
  const darkColor1 = Color.darken(10).toString();
  const darkColor2 = Color.darken(15).toString();

  const IconComponent = icon ? iconMap[icon] : StarIcon;

  const bookstyle = useMemo(
    () => ({
      background: color,
      backgroundImage: `linear-gradient(to right, ${darkColor1} 8px, ${darkColor2} 10px, transparent 10px)`,
    }),
    [color, darkColor1, darkColor2]
  );

  return { IconComponent, bookstyle };
};
