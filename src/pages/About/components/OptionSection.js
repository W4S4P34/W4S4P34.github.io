// React
import { forwardRef } from "react";

// Libraries
import classnames from "classnames";

// Self-defined Components
import OptionInstruction from "./OptionInstruction";
import Options from "./Options";

const OptionSection = forwardRef((props, ref) => {
  return (
    <div
      id="option-section"
      className={classnames(
        "flex flex-col w-full h-screen gap-4 justify-center items-center",
        props.className
      )}
      ref={ref}
    >
      <OptionInstruction />
      <Options />
    </div>
  );
});

export default OptionSection;
