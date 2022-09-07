// Self-defined Components
import Door from "./Door";

const Doors = () => {
  const doors = ["About", "CV", "Projects"];

  return (
    <div
      id="doors"
      className="
        flex flex-col sm:flex-row flex-auto
        w-full my-8 px-4 gap-y-20 sm:gap-x-24
        justify-center items-center
        text-center select-none
      "
    >
      {doors.map((door) => {
        return <Door key={door} name={door} />;
      })}
    </div>
  );
};

export default Doors;
