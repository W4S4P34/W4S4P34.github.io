// React
import { useRef } from "react";

// Libraries
import classnames from "classnames";

// Assets
import InspectPlateImage from "../../../assets/Portfolio-InspectPlate.png";

const getToolName = (tool) => {
  let result = tool.replace("-", " ");
  result = result.split(" ");
  for (var i = 0; i < result.length; i++) {
    result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
  }
  result = result.join(" ");

  return result;
};

const Tool = (props) => {
  const inspectPlate = useRef(null);

  return (
    <div
      id={props.id}
      className={props.className}
      onPointerEnter={() => {
        if (inspectPlate.current === null) return;
        inspectPlate.current.classList.remove("hidden");
      }}
      onPointerLeave={() => {
        if (inspectPlate.current === null) return;
        inspectPlate.current.classList.add("hidden");
      }}
      onClick={props.onClick}
    >
      <img
        id="tool-image"
        src={props.toolImage}
        alt="Tool"
        className={classnames(
          props.toolWidth ? props.toolWidth : "",
          props.toolHeight ? props.toolHeight : "",
          props.toolProps ? props.toolProps : "",
          "object-scale-down"
        )}
      />
      {props.children}
      <div id="tool-label" className="pt-2 text-center">
        {getToolName(props.id)}
      </div>
      <img
        id="inspect-image"
        ref={inspectPlate}
        src={InspectPlateImage}
        alt="Inspect Plate"
        className="
          absolute top-[50%] left-[50%]
          translate-x-[-50%] translate-y-[-50%]
          w-32
          object-scale-down hidden
        "
      />
    </div>
  );
};

export default Tool;
