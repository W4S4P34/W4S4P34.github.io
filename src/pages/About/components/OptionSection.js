// React
import { forwardRef } from "react";

// Self-defined Components
import Instruction from "./Instruction";
import Options from "./Options";

const OptionSection = (props, ref) => {
  return (
    <div ref={ref} id={props.id} className={props.className}>
      <Instruction />
      <Options />
    </div>
  );
};

export default forwardRef(OptionSection);
