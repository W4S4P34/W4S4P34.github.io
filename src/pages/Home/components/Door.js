// React
import { useRef } from "react";

// Libraries
import { Link } from "react-router-dom";

// Resources
import DoorOpenedImage from "../../../assets/Portfolio-DoorOpened.png";
import DoorClosedImage from "../../../assets/Portfolio-DoorClosed.png";

const Door = (props) => {
  const doorRef = useRef(null);

  const getLinkFromName = (name) => {
    return "/".concat(name.toLowerCase());
  };

  return (
    <div id="door" className="flex flex-col justify-center items-center">
      <Link
        id="label"
        to={getLinkFromName(props.name)}
        onPointerEnter={() => {
          doorRef.current.setAttribute("src", DoorOpenedImage);
        }}
        onPointerLeave={() => {
          doorRef.current.setAttribute("src", DoorClosedImage);
        }}
        className="w-full p-4"
      >
        {props.name}
      </Link>
      <Link id="image" to={getLinkFromName(props.name)}>
        <img
          ref={doorRef}
          src={DoorClosedImage}
          onPointerEnter={(event) =>
            (event.currentTarget.src = DoorOpenedImage)
          }
          onPointerLeave={(event) =>
            (event.currentTarget.src = DoorClosedImage)
          }
          alt={props.name.concat(" Door")}
          className="w-32 h-28 object-scale-down"
        />
      </Link>
    </div>
  );
};

export default Door;
