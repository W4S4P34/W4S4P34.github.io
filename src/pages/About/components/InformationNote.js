// React
import { useEffect } from "react";

// Libraries
import $ from "jquery";
import classnames from "classnames";

const InformationNote = (props) => {
  useEffect(() => {
    if (props.visibility) {
      $("#root").addClass("lock-scroll");
    } else {
      $("#root").removeClass("lock-scroll");
    }
  });

  return (
    <div
      className={classnames(
        "absolute top-[50%] left-[50%]",
        "translate-x-[-50%] translate-y-[-50%]",
        "w-full h-full",
        props.visibility ? "" : "hidden"
      )}
    >
      <div
        className="
          absolute top-[50%] left-[50%]
          translate-x-[-50%] translate-y-[-50%]
          w-full h-full
          bg-metallic-blue opacity-50
        "
        onClick={props.onClick}
      />
      <div
        className="
          absolute top-[50%] left-[50%]
          translate-x-[-50%] translate-y-[-50%]
          flex flex-col 
          w-4/5 h-4/5 p-8
          justify-center items-center 
          bg-rainbow-indigo border-beau-blue border-4
        "
      >
        <div
          className="
            flex flex-col
            w-full h-full overflow-y-auto
            items-center 
            text-left whitespace-pre-wrap
          "
        >
          {props.text}
          {props.children}
        </div>
        <div className="mt-4 text-cyan-azure text-center">
          Click anywhere outside this note to close
        </div>
      </div>
    </div>
  );
};

export default InformationNote;
