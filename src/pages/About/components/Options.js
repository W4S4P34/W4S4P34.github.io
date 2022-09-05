// React
import { useContext } from "react";

// Libraries
import { useNavigate } from "react-router-dom";

// Self-defined Components
import Option from "./Option";

// Resources
import { SectionContext } from "..";

const Options = () => {
  const sections = useContext(SectionContext);
  const navigate = useNavigate();

  return (
    <div id="options" className="mx-4 mb-4">
      <Option
        option="Good, lemme figure out who you are"
        onClick={() => sections.SecondSectionRef.current.scrollIntoView()}
      />
      <Option
        option="Nope, I will be back later"
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default Options;
