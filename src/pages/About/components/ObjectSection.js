// React
import { forwardRef } from "react";

// Libraries
import classnames from "classnames";

const ObjectSection = forwardRef((props, ref) => {
  return (
    <div
      id="object-section"
      className={classnames(
        "grid grid-rows-5 grid-cols-6 w-full h-screen gap-4 justify-center items-center text-center select-none",
        props.className
      )}
      ref={ref}
    >
      <div
        id="homepage"
        className="col-start-1 row-start-1 col-span-2 row-span-1"
      >
        Homepage
      </div>
      <div
        id="locked-box"
        className="col-start-1 row-start-2 col-span-2 row-span-2"
      >
        Locked Box
      </div>
      <div
        id="computer"
        className="col-start-3 row-start-1 col-span-2 row-span-2"
      >
        Computer
      </div>
      <div
        id="projects"
        className="col-start-5 row-start-2 col-span-2 row-span-2"
      >
        Folder of Projects
      </div>
      <div
        id="electric-clock"
        className="col-start-1 row-start-4 col-span-2 row-span-2"
      >
        Electric Clock
      </div>
      <div
        id="cv-paper"
        className="col-start-3 row-start-4 col-span-2 row-span-2"
      >
        CV Paper
      </div>
      <div
        id="bachelor-hat"
        className="col-start-5 row-start-4 col-span-2 row-span-2"
      >
        Bachelor Hat
      </div>
    </div>
  );
});

export default ObjectSection;
