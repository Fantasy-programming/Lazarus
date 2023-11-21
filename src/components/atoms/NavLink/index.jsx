import Style from "./index.module.css";

import { Link } from "react-router-dom";

import { ReactComponent as StarIcon } from "@assets/star.svg";
import { ReactComponent as PlayIcon } from "@assets/play.svg";
import { ReactComponent as HeartIcon } from "@assets/heart.svg";
import { ReactComponent as TicketIcon } from "@assets/ticket.svg";
import { ReactComponent as HomeIcon } from "@assets/box.svg";

function NavLink({ icon, route }) {
  const attributes = {
    fill: "hsl(30, 38%, 90%)",
    stroke: "hsl(30, 38%, 60%)",
    strokeWidth: "1",
  };

  switch (icon) {
    case "star":
      return (
        <li className={Style.navlink}>
          <Link to={"/" + route}>
            <StarIcon {...attributes} />
          </Link>
        </li>
      );
    case "home":
      return (
        <li className={Style.navlink}>
          <Link to={"/" + route}>
            <HomeIcon {...attributes} />
          </Link>
        </li>
      );
    case "heart":
      return (
        <li className={Style.navlink}>
          <Link to={"/" + route}>
            <HeartIcon {...attributes} />
          </Link>
        </li>
      );
    case "play":
      return (
        <li className={Style.navlink}>
          <Link to={"/" + route}>
            <PlayIcon {...attributes} />
          </Link>
        </li>
      );
    case "ticket":
      return (
        <li className={Style.navlink}>
          <Link to={"/" + route}>
            <TicketIcon {...attributes} transform="rotate(90)" />
          </Link>
        </li>
      );
    case "user":
      return (
        <li className={Style.navlink}>
          <Link to={"/" + route}></Link>
        </li>
      );
    default:
      return (
        <li className={Style.navlink}>
          <a href="">
            <StarIcon {...attributes} />
          </a>
        </li>
      );
  }
}

export default NavLink;
