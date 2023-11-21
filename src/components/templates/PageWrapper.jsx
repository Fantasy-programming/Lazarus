import Navbar from "@components/organisms/Navbar";
import Chat from "@components/organisms/Chat";
import ViewWrapper from "@components/templates/ViewWrapper";

const pageWrapper = ({ children }) => {
  return (
    <>
      <Navbar />
      <ViewWrapper>{children}</ViewWrapper>
      <Chat />
    </>
  );
};

export default pageWrapper;
