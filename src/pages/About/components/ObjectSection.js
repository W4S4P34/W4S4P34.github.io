// React
import { forwardRef, useEffect, useState } from "react";

// Libraries
import { useNavigate } from "react-router-dom";

// Self-defined Components
import Option from "./Option";
import Tool from "./Tool";
import DigitalClock from "./DigitalClock";
import InformationNote from "./InformationNote";

// Assets
import LockedBoxImage from "../../../assets/Portfolio-LockedBox.png";
import ComputerImage from "../../../assets/Portfolio-Computer.gif";
import ProjectsImage from "../../../assets/Portfolio-Projects.png";
import DigitalClockImage from "../../../assets/Portfolio-DigitalClock.png";
import CVPaperImage from "../../../assets/Portfolio-CVPaper.png";
import BachelorHatImage from "../../../assets/Portfolio-BachelorHat.png";

import scripts from "../assets/scripts";

const ObjectSection = (props, ref) => {
  const [noteText, setNoteText] = useState("");
  const [noteVisibility, setNoteVisibility] = useState(false);

  const [passwordTrigger, setPasswordTrigger] = useState(false);
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (password.toLowerCase() === "05I%AM%HERE19".toLowerCase()) {
      setNoteText(scripts.OpenedBox);
      setPasswordTrigger(false);
      setPassword("");
    }
  }, [password]);

  return (
    <div id={props.id} className={props.className} ref={ref}>
      <div
        id="homepage"
        className="
          row-start-1 col-start-1 row-span-1 col-span-3 
          flex flex-col 
          justify-center items-center
        "
      >
        <Option option="Go home" onClick={() => navigate("/")} />
      </div>
      <Tool
        id="bachelor-hat"
        className="
          row-start-2 col-start-1 row-span-1 col-span-1 
          flex flex-col relative 
          justify-center items-center
        "
        toolImage={BachelorHatImage}
        toolWidth="w-24"
        onClick={() => {
          setNoteText(scripts.BachelorHat);
          setNoteVisibility(true);
        }}
      />
      <Tool
        id="computer"
        className="
          row-start-2 col-start-2 row-span-1 col-span-1 
          flex flex-col relative 
          justify-center items-center
        "
        toolImage={ComputerImage}
        toolWidth="w-28"
        onClick={() => {
          setNoteText(scripts.Computer);
          setNoteVisibility(true);
        }}
      />
      <Tool
        id="digital-clock"
        className="
          row-start-2 col-start-3 row-span-1 col-span-1 
          flex flex-col relative 
          justify-center items-center
        "
        toolImage={DigitalClockImage}
        toolWidth="w-28"
        onClick={() => {
          setNoteText(scripts.DigitalClock);
          setNoteVisibility(true);
        }}
      >
        <DigitalClock
          className="
            absolute top-[50%] left-[50%]
            translate-x-[-50%] translate-y-[-95%] sm:translate-y-[-145%]
            text-beau-blue text-[2vw] sm:text-sm text-center select-none
          "
        />
      </Tool>
      <Tool
        id="locked-box"
        className="
          row-start-3 col-start-1 row-span-1 col-span-1 
          flex flex-col relative 
          justify-center items-center
        "
        toolImage={LockedBoxImage}
        toolWidth="w-20"
        onClick={() => {
          setNoteText(scripts.LockedBox);
          setNoteVisibility(true);
          setPasswordTrigger(true);
          setPassword("");
        }}
      />
      <Tool
        id="cv-paper"
        className="
          row-start-3 col-start-2 row-span-1 col-span-1 
          flex flex-col relative 
          justify-center items-center
        "
        toolImage={CVPaperImage}
        toolWidth="w-20"
        onClick={() => navigate("/cv")}
      />
      <Tool
        id="projects"
        className="
          row-start-3 col-start-3 row-span-1 col-span-1 
          flex flex-col relative 
          justify-center items-center
        "
        toolImage={ProjectsImage}
        toolWidth="w-28"
        onClick={() => navigate("/projects")}
      />
      <InformationNote
        text={noteText}
        visibility={noteVisibility}
        onClick={() => {
          setNoteText("");
          setNoteVisibility(false);
          setPasswordTrigger(false);
          setPassword("");
        }}
      >
        {passwordTrigger && (
          <input
            type="password"
            name="password"
            className="
              flex flex-col
              w-4/5 mt-8 p-2
              text-rainbow-indigo text-center
            "
            placeholder="Enter Password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value.trim());
            }}
            autoFocus
          />
        )}
      </InformationNote>
    </div>
  );
};

export default forwardRef(ObjectSection);
