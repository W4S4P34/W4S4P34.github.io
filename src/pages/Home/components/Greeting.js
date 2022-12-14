// Libraries
import classnames from "classnames";

// Self-defined Hooks
import useTypedScript, { TypedPhase } from "../../../hooks/useTypedScript";

const Greeting = () => {
  const scripts = [
    "Welcome to my portfolio",
    "You can choose ONE room to visit",
  ];

  const { typedScript, typedPhase } = useTypedScript({
    scripts: scripts,
    loop: false,
  });

  return (
    <div
      id="greeting"
      className={classnames("w-full my-4 px-4 text-center select-none", {
        "end-cursor": typedPhase !== TypedPhase.Deleting,
        "blinking-fx": typedPhase === TypedPhase.Pausing,
      })}
    >
      {typedScript}
    </div>
  );
};

export default Greeting;
