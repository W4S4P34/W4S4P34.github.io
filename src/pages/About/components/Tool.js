// React
import { useRef } from "react";

// Resources
import InspectPlate from "../../../assets/Portfolio-Inspect13.png";

const Tool = (props) => {
  const inspect = useRef(null);

  return (
    <div
      id="tool"
      className={`
        flex flex-col relative
        ${props.row ? props.row : ""}
        ${props.column ? props.column : ""}
        ${props.span ? props.span : ""}
        justify-center items-center
    `}
      onPointerEnter={() => {
        inspect.current.classList.remove("hidden");
      }}
      onPointerLeave={() => {
        inspect.current.classList.add("hidden");
      }}
      onClick={props.onClick}
    >
      <img
        src={props.tool}
        alt="Tool"
        className={`
            ${props.toolWidth ? props.toolWidth : ""}
            ${props.toolHeight ? props.toolHeight : ""}
            ${props.toolProps ? props.toolProps : ""}
            object-scale-down
        `}
      />
      {props.children}
      <img
        src={InspectPlate}
        alt="Inspect Plate"
        className="absolute top-auto left-auto w-36 object-scale-down hidden"
        ref={inspect}
      />
    </div>
  );
};

export default Tool;
