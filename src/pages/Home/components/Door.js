// React
import { useRef } from "react";

// Libraries
import { Link } from "react-router-dom";

// Assets
import OpenedDoorImage from "../../../assets/Portfolio-OpenedDoor.png";
import ClosedDoorImage from "../../../assets/Portfolio-ClosedDoor.png";

const Door = (props) => {
  const doorRef = useRef(null);

  const getLinkFromName = (name) => {
    return "/".concat(name.toLowerCase());
  };

  return (
    <Link
      id="door"
      className="
        flex flex-col
        gap-y-4
        justify-center items-center
      "
      to={
        getLinkFromName(props.name) !== "/cv"
          ? getLinkFromName(props.name)
          : process.env.PUBLIC_URL + "/Resume.pdf"
      }
      target={getLinkFromName(props.name) !== "/cv" ? null : "_blank"}
      rel={getLinkFromName(props.name) !== "/cv" ? null : "noopener noreferrer"}
      onPointerEnter={() => {
        if (doorRef.current === null) return;
        doorRef.current.setAttribute("src", OpenedDoorImage);
      }}
      onPointerLeave={() => {
        if (doorRef.current === null) return;
        doorRef.current.setAttribute("src", ClosedDoorImage);
      }}
    >
      <div id="label">{props.name}</div>
      <div id="image">
        <img
          ref={doorRef}
          src={ClosedDoorImage}
          alt={props.name.concat(" Door")}
          className="w-24 object-scale-down"
        />
      </div>
    </Link>
  );
};

export default Door;
