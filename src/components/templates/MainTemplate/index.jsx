import Style from "./index.module.css";

export default function MainTemplate({ children }) {
  return <main className={Style.wrapper}>{children}</main>;
}
