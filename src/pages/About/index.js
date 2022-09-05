// Common Components
import { createContext, useRef, useEffect } from "react";

// Self-defined Components
import OptionSection from "./components/OptionSection";
import ObjectSection from "./components/ObjectSection";

export const SectionContext = createContext(null);

const About = () => {
  const FirstSectionRef = useRef(null);
  const SecondSectionRef = useRef(null);

  useEffect(() => {
    FirstSectionRef.current.scrollIntoView();
  }, []);

  return (
    <SectionContext.Provider value={{ FirstSectionRef, SecondSectionRef }}>
      <div
        id="about"
        className="flex flex-col flex-auto justify-between items-center"
      >
        <OptionSection className="snap-center" ref={FirstSectionRef} />
        <ObjectSection className="snap-center" ref={SecondSectionRef} />
      </div>
    </SectionContext.Provider>
  );
};

export default About;
