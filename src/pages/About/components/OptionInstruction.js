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
      className={classnames("w-full my-4 px-4", {
        "end-cursor": typedPhase !== TypedPhase.Deleting,
        "blinking-fx": typedPhase === TypedPhase.Pausing,
      })}
    >
      {typedScript}
    </div>
  );
};

export default OptionInstruction;
