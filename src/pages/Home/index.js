// Common Components
import { useRef } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

// Self-defined Components
import useTypedScript, { TypedPhase } from "../../hooks/useTypedScript";

// Self-defined Resources
import DoorOpenedImage from "../../assets/Portfolio-DoorOpened.png";
import DoorClosedImage from "../../assets/Portfolio-DoorClosed.png";

const Script = () => {
  const texts = ["Welcome to my portfolio", "You can choose ONE room to visit"];
  const { typedScript, typedPhase } = useTypedScript(texts);

  return (
    <div
      id="script"
      className={classnames("text-center", "select-none", {
        "end-cursor": typedPhase !== TypedPhase.Deleting,
        "blinking-fx": typedPhase === TypedPhase.Pausing,
      })}
    >
      {typedScript}
    </div>
  );
};

const Doors = () => {
  const doors = ["About", "Projects", "CV"];

  const Door = (props) => {
    const doorRef = useRef(null);

    const getLinkFromName = (name) => {
      return "/".concat(name.toLowerCase());
    };

    return (
      <div id="door" className="flex flex-col gap-y-4 items-center">
        <Link
          id="label"
          to={getLinkFromName(props.name)}
          onMouseEnter={() => {
            doorRef.current.setAttribute("src", DoorOpenedImage);
          }}
          onMouseLeave={() => {
            doorRef.current.setAttribute("src", DoorClosedImage);
          }}
          className="text-center select-none"
        >
          {props.name}
        </Link>
        <Link id="image" to={getLinkFromName(props.name)}>
          <img
            ref={doorRef}
            src={DoorClosedImage}
            onMouseEnter={(event) =>
              (event.currentTarget.src = DoorOpenedImage)
            }
            onMouseLeave={(event) =>
              (event.currentTarget.src = DoorClosedImage)
            }
            alt={props.name.concat(" Door")}
            className="w-32 h-28 object-scale-down select-none"
          />
        </Link>
      </div>
    );
  };

  return (
    <div
      id="doors"
      className="flex flex-col sm:flex-row sm:w-4/5 gap-x-20 gap-y-20 justify-center items-center"
    >
      {doors.map((door) => {
        return <Door key={door} name={door} />;
      })}
    </div>
  );
};

const PassCode = () => {
  return (
    <div className="text-rainbow-indigo text-center">05I&#37;AM&#37;HERE19</div>
  );
};

const Home = () => {
  return (
    <div
      id="home"
      className="flex flex-col flex-auto p-4 gap-y-8 justify-between items-center"
    >
      <Script />
      <Doors />
      <PassCode />
    </div>
  );
};

export default Home;
