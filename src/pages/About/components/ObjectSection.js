// React
import { forwardRef, useEffect, useState } from "react";

// Libraries
import { useNavigate } from "react-router-dom";

// Self-defined Components
import Option from "./Option";
import Tool from "./Tool";
import DigitalClock from "./DigitalClock";
import InformationNote from "./InformationNote";

// Resources
import LockedBox from "../../../assets/Portfolio-LockedBox.png";
import Computer from "../../../assets/Portfolio-Computer.gif";
import Projects from "../../../assets/Portfolio-Projects.png";
import Clock from "../../../assets/Portfolio-DigitalClock.png";
import CVPaper from "../../../assets/Portfolio-CV.png";
import BachelorHat from "../../../assets/Portfolio-BachelorHat.png";

const ObjectSection = forwardRef((props, ref) => {
  const [noteState, setNoteState] = useState(true);
  const [noteText, setNoteText] = useState("");
  const [noteChildren, setNoteChildren] = useState(null);
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handlePasswordChange = (event) => setPassword(event.target.value);

  useEffect(() => {
    if (password.toLowerCase() === "05I%AM%HERE19".toLowerCase()) {
      setNoteText(
        `📌 Interested In:\n\n` +
          `🌲 Data Structures & Algorithms\n` +
          `🖼️ Rendering Programming/Shaders (GLSL & HLSL)\n` +
          `🕹️ Game Programming (Unity & Godot)\n` +
          `➗ Game Mathematics\n` +
          `🖌️ 2D Pixel Art (Aseprite)\n` +
          `🎲 3D Sculpting/Modeling (Blender)\n` +
          `🧠 Extended Reality - XR (VR/AR/MR)\n` +
          `🗃️ Git\n\n` +
          `🎈 Hobbies:\n\n` +
          `📖 Books\n` +
          `🏸 Badminton\n` +
          `🏊🏻‍♂️ Swimming\n` +
          `🍳 Cooking\n` +
          `🎮 Games\n` +
          `🎶 Musics\n\n` +
          `🐾 Pets:\n\n` +
          `🐶 Dogs\n` +
          `😾 Cats`
      );
      setNoteChildren(null);
    }
  }, [password]);

  return (
    <div id={props.id} className={props.className} ref={ref}>
      <div
        id="homepage"
        className="flex flex-col col-start-1 row-start-1 col-span-3 justify-center items-center"
      >
        <Option option="Go home" onClick={() => navigate("/")} />
      </div>
      <Tool
        row="row-start-2"
        column="col-start-1"
        tool={LockedBox}
        toolWidth="w-28"
        onClick={() => {
          setNoteText(
            `🔐 You need password to see this information!\n` +
              `Hint: It's on the Homepage, try to "Select All"`
          );
          setNoteChildren(
            <input
              type="password"
              name="password"
              className="
                flex flex-col
                w-4/5 mt-8 p-2
                text-center text-rainbow-indigo
              "
              placeholder="Enter password"
              onChange={handlePasswordChange}
              autoFocus
            />
          );
          setNoteState(false);
        }}
      />
      <Tool
        row="row-start-2"
        column="col-start-2"
        tool={Computer}
        toolWidth="w-36"
        onClick={() => {
          setNoteText(
            `🌟 Pursuing Career: Game Developer, especially major in Rendering\n` +
              `⚙️ Using Engines: Unity Engine (mostly) and Godot Engine (sometimes)`
          );
          setNoteState(false);
        }}
      />
      <Tool
        row="row-start-2"
        column="col-start-3"
        tool={Projects}
        toolWidth="w-36"
        onClick={() => navigate("/projects")}
      />
      <Tool
        row="row-start-3"
        column="col-start-1"
        tool={Clock}
        toolWidth="w-[20vw] sm:w-[135px]"
        toolProps="translate-y-[1px]"
        children={
          <DigitalClock
            className="
              w-[20vw] sm:w-[135px] px-0 sm:px-[0.5px] py-0 sm:py-[0.25px]
              border-moonstone-blue border-solid border-[4px] sm:border-[5px]
              text-beau-blue text-[2vw] sm:text-sm
            "
          />
        }
        onClick={() => {
          setNoteText(`🕛 Timezone: Ho Chi Minh city, Vietnam (GMT+7)`);
          setNoteState(false);
        }}
      />
      <Tool
        row="row-start-3"
        column="col-start-2"
        tool={CVPaper}
        toolWidth="w-28"
        onClick={() => navigate("/cv")}
      />
      <Tool
        row="row-start-3"
        column="col-start-3"
        tool={BachelorHat}
        toolWidth="w-36"
        onClick={() => {
          setNoteText(
            `🏫 Studying At: VNUHCM - University of Science (🎓 Bachelor's Degree - Software Engineer)\n` +
              `🏢 Working At: None`
          );
          setNoteState(false);
        }}
      />
      <InformationNote
        hidden={noteState}
        text={noteText}
        children={noteChildren}
        onClick={() => {
          setNoteText("");
          setNoteChildren(null);
          setNoteState(true);
        }}
      />
    </div>
  );
});

export default ObjectSection;
