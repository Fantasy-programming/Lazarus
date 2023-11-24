import Style from "./index.module.css";
import { Link } from "react-router-dom";
import StarIcon from "@assets/star.svg?react";
import PlayIcon from "@assets/play.svg?react";
import HeartIcon from "@assets/heart.svg?react";
import TicketIcon from "@assets/ticket.svg?react";
import HomeIcon from "@assets/box.svg?react";

interface NavLinkProps {
  icon: keyof typeof iconMap;
  route: string;
}

const iconMap = {
  star: StarIcon,
  home: HomeIcon,
  heart: HeartIcon,
  play: PlayIcon,
  ticket: TicketIcon,
};

const attributes = {
  fill: "hsl(30, 38%, 90%)",
  stroke: "hsl(30, 38%, 60%)",
  strokeWidth: "1",
};

function NavLink({ icon, route }: NavLinkProps) {
  const IconComponent = iconMap[icon] || StarIcon;

  return (
    <li className={Style.navlink}>
      <Link to={"/" + route}>
        <IconComponent {...attributes} />
      </Link>
    </li>
  );
}

export default NavLink;
