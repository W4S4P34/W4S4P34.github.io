// React
import { useContext } from "react";

// Libraries
import { useNavigate } from "react-router-dom";

// Self-defined Components
import Option from "./Option";

// Context
import { SectionContext } from "..";

const Options = () => {
  const sections = useContext(SectionContext);

  const navigate = useNavigate();

  return (
    <div id="options" className="my-4 px-4 text-left select-none">
      <Option
        option="Good, lemme figure out who you are"
        onClick={() => sections.secondSectionRef.current.scrollIntoView()}
      />
      <Option
        option="Nope, I will be back later"
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default Options;
