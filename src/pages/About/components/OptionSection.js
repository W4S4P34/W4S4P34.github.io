// React
import { forwardRef } from "react";

// Self-defined Components
import OptionInstruction from "./OptionInstruction";
import Options from "./Options";

const OptionSection = forwardRef((props, ref) => {
  return (
    <div id={props.id} className={props.className} ref={ref}>
      <OptionInstruction />
      <Options />
    </div>
  );
});

export default OptionSection;
