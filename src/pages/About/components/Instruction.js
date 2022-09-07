// Libraries
import classnames from "classnames";

// Self-defined Hooks
import useTypedScript, { TypedPhase } from "../../../hooks/useTypedScript";

const Instruction = () => {
  const scripts = [
    "This is all about me, hope you will find something informative",
  ];

  const { typedScript, typedPhase } = useTypedScript({
    scripts: scripts,
    loop: false,
  });

  return (
    <div
      id="instruction"
      className={classnames("w-full my-4 px-4 text-center select-none", {
        "end-cursor": typedPhase !== TypedPhase.Deleting,
        "blinking-fx": typedPhase === TypedPhase.Pausing,
      })}
    >
      {typedScript}
    </div>
  );
};

export default Instruction;
