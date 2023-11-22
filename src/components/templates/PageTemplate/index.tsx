import MainTemplate from "@components/templates/MainTemplate";
import Navbar from "@components/organisms/Navbar";
import Chat from "@components/organisms/Chat";

type PageType = {
  children: React.ReactNode;
};

const PageTemplate = ({ children }: PageType) => {
  return (
    <>
      <Navbar />
      <MainTemplate>{children}</MainTemplate>
      <Chat />
    </>
  );
};

export default PageTemplate;
