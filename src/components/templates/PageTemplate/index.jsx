import MainTemplate from "@components/templates/MainTemplate";
import Navbar from "@components/organisms/Navbar";
import Chat from "@components/organisms/Chat";

function PageTemplate({ children }) {
  return (
    <>
      <Navbar />
      <MainTemplate>{children}</MainTemplate>
      <Chat />
    </>
  );
}

export default PageTemplate;
