// React
import { Fragment } from "react";
import { motion } from "framer-motion";

const SplittedText = (props) => {
  const characters = props.text.split("");
  const charactersElement = characters.map((character, index) => {
    // Variants
    const jitteringText = {
      initial: {
        skewX: "-1.2deg",
        skewY: "1.2deg",
        scale: 1,
      },
      jittering: {
        x: "0.15%",
        y: "-0.15%",
        skewX: "1.2deg",
        skewY: "-1.2deg",
        scale: 1.025,
        transition: {
          delay: Math.random() * 1.5,
          duration: 0.1,
          repeat: Infinity,
          repeatType: "reverse",
        },
      },
    };

    return (
      <motion.span
        key={props.id + "-" + index}
        id="home-jittering-text"
        className={character === " " ? "whitespace-pre" : ""}
        variants={jitteringText}
        initial="initial"
        animate="jittering"
      >
        {character}
      </motion.span>
    );
  });

  return <Fragment>{charactersElement}</Fragment>;
};

export default SplittedText;
