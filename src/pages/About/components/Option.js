// React
import { useState } from "react";

// Libraries
import classnames from "classnames";

const Option = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      id="option"
      className="
        flex flex-row
        justify-start items-start
        text-cyan-azure hover:text-beau-blue
      "
      onClick={props.onClick}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      <div
        id="indicator"
        className={classnames(
          "pr-2",
          isHovered ? "text-beau-blue" : "text-rainbow-indigo"
        )}
      >
        &gt;
      </div>
      <div id="label">{props.option}</div>
    </div>
  );
};

export default Option;
