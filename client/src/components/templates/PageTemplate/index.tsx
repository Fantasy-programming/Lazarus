import Navbar from "@components/organisms/Navbar";
import Chat from "@components/organisms/Chat";

import Style from "./pageTemplate.module.css";

type PageType = {
  children: React.ReactNode;
};

const PageTemplate = ({ children }: PageType) => {
  return (
    <>
      <Navbar />
      <main className={Style.wrapper}>{children}</main>
      <Chat />
    </>
  );
};

export default PageTemplate;
