import { SmallBook } from "@/components/atoms/Book";
import Style from "./index.module.css";

function BookContainer() {
  return (
    <div className={Style.container}>
      <SmallBook title="All" color="grey" />
      <SmallBook title="eBooks" color="green" />
      <SmallBook title="New" color="red" />
      <SmallBook title="Bestsellers" color="hsl(213, 30%, 50%)" icon="best" />
      <SmallBook title="audiobooks" color="hsl(115, 31%, 57%)" icon="audio" />
      <SmallBook title="Fiction" color="hsl(252, 25%, 61%)" icon="fantasy" />
      <SmallBook title="Romance" color="hsl(357, 82%, 65%)" icon="romance" />
      <SmallBook title="Psychological" color="hsl(213, 30%, 50%)" icon="psychology" />
      <SmallBook title="mango" color="green" />
      <SmallBook title="Crime" color="hsl(252, 25%, 61%)" icon="thriller" />
    </div>
  );
}

export default BookContainer;
