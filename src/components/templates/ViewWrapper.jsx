import Style from "./ViewWrapper.module.css";

function ViewWrapper({ children }) {
  return <main className={Style.wrapper}>{children}</main>;
}

export default ViewWrapper;
