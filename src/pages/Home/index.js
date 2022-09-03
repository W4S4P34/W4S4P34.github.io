// Common Components
import { Link } from "react-router-dom";
import classnames from "classnames";

// Self-defined Components
import useTypedScript, { TypedPhase } from "../../hooks/useTypedScript";

// Self-defined Resources
import DoorOpenedImage from "../../assets/Portfolio-DoorOpened.png";
import DoorClosedImage from "../../assets/Portfolio-DoorClosed.png";

const Doors = () => {
  const doors = ["About", "Projects", "CV"];

  const Door = (props) => {
    const getLinkFromName = (name) => {
      return "/".concat(name.toLowerCase());
    };

    return (
      <div
        id="door"
        className="flex flex-col gap-y-4 justify-center items-center"
      >
        <Link id="label" to={getLinkFromName(props.name)}>
          {props.name}
        </Link>
        <Link id="image" to={getLinkFromName(props.name)}>
          <img
            src={DoorClosedImage}
            onMouseEnter={(e) => (e.currentTarget.src = DoorOpenedImage)}
            onMouseLeave={(e) => (e.currentTarget.src = DoorClosedImage)}
            alt={props.name.concat(" Door")}
            className="w-32 h-28 object-scale-down"
          />
        </Link>
      </div>
    );
  };

  return (
    <div
      id="doors"
      className="flex flex-1 flex-col sm:flex-row sm:w-4/5 gap-x-20 gap-y-20 justify-center items-center"
    >
      {doors.map((door) => {
        return <Door key={door} name={door} />;
      })}
    </div>
  );
};

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

const Home = () => {
  return (
    <div id="home" className="flex flex-col h-screen p-4 gap-y-8 items-center">
      <Script />
      <Doors />
    </div>
  );
};

export default Home;
