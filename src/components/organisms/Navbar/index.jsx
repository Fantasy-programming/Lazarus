import NavLink from "@components/atoms/NavLink";
import { ReactComponent as BellIcon } from "@assets/bell.svg";

import Style from "./index.module.css";

// TODO: Refactor the subscribe & navlinks button to a component
// TODO: Add state to see at which link we are
// TODO: Add a bluish ring around the navlinks + color the icons to show which one is active

function Navbar() {
  return (
    <nav className={Style.nav}>
      <NavLink icon="user" route="user" />
      <div>
        <ul className={Style.navlinks}>
          <NavLink icon="home" route="" />
          <NavLink icon="star" route="most-stared" />
          <NavLink icon="heart" route="most-liked" />
          <NavLink icon="play" route="audio-books" />
          <NavLink icon="ticket" route="wish-list" />
        </ul>
      </div>
      <div className={Style.subscribe}>
        <div>
          <BellIcon />
        </div>
        <span>subscribe</span>
      </div>
    </nav>
  );
}

export default Navbar;
