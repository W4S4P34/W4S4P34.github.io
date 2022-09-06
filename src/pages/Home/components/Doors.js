// Self-defined Components
import Door from "./Door";

const Doors = () => {
  const doors = ["About", "Projects", "CV"];

  return (
    <div
      id="doors"
      className="flex flex-col sm:flex-row w-full my-4 px-4 gap-x-20 gap-y-20 justify-center items-center text-center select-none"
    >
      {doors.map((door) => {
        return <Door key={door} name={door} />;
      })}
    </div>
  );
};

export default Doors;
