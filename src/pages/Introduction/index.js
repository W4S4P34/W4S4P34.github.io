// React
import { useState, useEffect } from "react";

// Libraries
import $ from "jquery";

// Components
import SplittedText from "./assets/components/SplittedText";

// Assets
import introductionScripts from "./assets/resources/IntroductionScripts";
import noiseVFX from "./assets/vfx/NoiseVFX.gif";

const Home = () => {
  // States
  const [scriptIndex, setScriptIndex] = useState(0);

  // Visual Effect Handlers
  const handleHomeClick = (event) => {
    setScriptIndex((previousScriptIndex) => {
      return previousScriptIndex >= introductionScripts.length - 1
        ? 0
        : previousScriptIndex + 1;
    });
  };

  const handleSkipMouseEnter = (event) => {
    console.log("Enter");
  };
  const handleSkipMouseLeave = (event) => {
    console.log("Leave");
  };
  const handleSkipClick = (event) => {
    console.log("Click");
    event.stopPropagation();
  };

  useEffect(() => {
    $("#home").on("click", handleHomeClick);

    $("#home-skip").on("mouseenter", handleSkipMouseEnter);
    $("#home-skip").on("mouseleave", handleSkipMouseLeave);
    $("#home-skip").on("click", handleSkipClick);

    return () => {
      $("#home").off("click", handleHomeClick);

      $("#home-skip").off("mouseenter", handleSkipMouseEnter);
      $("#home-skip").off("mouseleave", handleSkipMouseLeave);
      $("#home-skip").off("click", handleSkipClick);
    };
  }, []);

  return (
    <div id="home" className="flex flex-col min-h-screen text-lg">
      <div id="home-skip-container" className="flex justify-end select-none">
        <div id="home-skip" className="flex p-[10px] text-right">
          <SplittedText id="skip" text="Skip &gt;&gt;" />
        </div>
      </div>
      <div
        id="home-content-container"
        className="flex flex-col grow justify-center items-center select-none"
      >
        <div id="home-content" className="flex max-w-[75%] text-justify">
          <SplittedText id="content" text={introductionScripts[scriptIndex]} />
        </div>
      </div>
      <div
        id="home-notification-container"
        className="flex justify-end select-none"
      >
        <div id="home-notification" className="flex p-[10px] text-right">
          <SplittedText id="notification" text="Click anywhere to continue" />
        </div>
      </div>
      <img
        id="home-noise-vfx"
        className="absolute top-0 left-0 w-full h-full bg-repeat opacity-30 pointer-events-none"
        src={noiseVFX}
        alt="Noise VFX"
      />
    </div>
  );
};

export default Home;
