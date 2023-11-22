import Style from "./index.module.css";

type MainType = {
  children: React.ReactNode;
};

export default function MainTemplate({ children }: MainType) {
  return <main className={Style.wrapper}>{children}</main>;
}
