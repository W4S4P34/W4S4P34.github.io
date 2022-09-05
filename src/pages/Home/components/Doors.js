// Self-defined Components
import Door from "./Door";

const Doors = () => {
  const doors = ["About", "Projects", "CV"];

  return (
    <div
      id="doors"
      className="flex flex-col sm:flex-row sm:w-4/5 mx-4 my-8 gap-x-20 gap-y-20 justify-center items-center"
    >
      {doors.map((door) => {
        return <Door key={door} name={door} />;
      })}
    </div>
  );
};

export default Doors;
