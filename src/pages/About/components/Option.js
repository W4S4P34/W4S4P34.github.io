// React
import { useState } from "react";

const Option = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      id="option"
      className="mt-2 text-cyan-azure hover:text-beau-blue text-left select-none"
      onClick={props.onClick}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      <div id="label">
        <span
          id="indicator"
          className={isHovered ? "text-beau-blue" : "text-rainbow-indigo"}
        >
          &gt;
        </span>
        {" " + props.option}
      </div>
    </div>
  );
};

export default Option;
