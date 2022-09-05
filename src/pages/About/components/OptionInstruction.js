// Libraries
import classnames from "classnames";

// Self-defined Hooks
import useTypedScript, { TypedPhase } from "../../../hooks/useTypedScript";

const OptionInstruction = () => {
  const texts = [
    "This is all about me, hope you will find something informative",
  ];

  const { typedScript, typedPhase } = useTypedScript(texts, false);

  return (
    <div
      id="option-instruction"
      className={classnames("mx-4 mt-4 text-center select-none", {
        "end-cursor": typedPhase !== TypedPhase.Deleting,
        "blinking-fx": typedPhase === TypedPhase.Pausing,
      })}
    >
      {typedScript}
    </div>
  );
};

export default OptionInstruction;
