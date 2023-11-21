import Style from "./index.module.css";
import NavLink from "@components/atoms/NavLink";
import { ReactComponent as BellIcon } from "@assets/bell.svg";

// TODO: Refactor the subscribe & navlinks button to a component
// TODO: Add state to see at which link we are
// TODO: Add a bluish ring around the navlinks + color the icons to show which one is active

function Navbar() {
  return (
    <nav className={Style.nav}>
      <NavLink icon="user" route="user" />
      <div>
        <ul className={Style.navlinks}>
          <NavLink icon="home" route="/" />
          <NavLink icon="star" route="moststared" />
          <NavLink icon="heart" route="mostliked" />
          <NavLink icon="play" route="audiobooks" />
          <NavLink icon="ticket" route="wishlist" />
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
