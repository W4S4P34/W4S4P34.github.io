// React
import { createContext, useEffect, useRef, useCallback } from "react";

// Libraries
import $ from "jquery";

// Self-defined Components
import OptionSection from "./components/OptionSection";
import ObjectSection from "./components/ObjectSection";

const getViewportBounds = () => {
  let viewportBounds = {};

  viewportBounds.width =
    window.innerWidth || document.documentElement.clientWidth;
  viewportBounds.height =
    window.innerHeight || document.documentElement.clientHeight;
  viewportBounds.x1 = window.scrollX;
  viewportBounds.x2 = viewportBounds.x1 + viewportBounds.width;
  viewportBounds.y1 = window.scrollY;
  viewportBounds.y2 = viewportBounds.y1 + viewportBounds.height;
  return viewportBounds;
};

const getElementBounds = (element) => {
  let elementBounds = {};

  const rect = element.getBoundingClientRect();
  elementBounds.width = Math.trunc(rect.width);
  elementBounds.height = Math.trunc(rect.height);
  elementBounds.x1 = Math.trunc(rect.left);
  elementBounds.x2 = Math.trunc(rect.right);
  elementBounds.y1 = Math.trunc(rect.top);
  elementBounds.y2 = Math.trunc(rect.bottom);

  return elementBounds;
};

const isInsideViewport = (element) => {
  const viewport = getViewportBounds();
  const rect = getElementBounds(element);

  return (
    rect.x1 < viewport.width &&
    rect.x2 > 0 &&
    rect.y1 < viewport.height &&
    rect.y2 > 0
  );
};

const getInsideViewportPercentage = ({ element, increaseSpeed = 1 }) => {
  const viewport = getViewportBounds();
  const rect = getElementBounds(element);

  if (!isInsideViewport(element)) {
    return 0;
  } else {
    return (
      (rect.height -
        clampValue(
          Math.abs(viewport.y2 - rect.y2) * increaseSpeed,
          0,
          rect.height
        )) /
      rect.height
    ).toFixed(2);
  }
};

const clampValue = (value, min, max) => {
  return Math.max(min, Math.min(value, max));
};

export const SectionContext = createContext(null);

const About = () => {
  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);

  const handleVisibilityChange = useCallback(() => {
    if (firstSectionRef.current === null || secondSectionRef.current === null)
      return;

    const firstSectionVisibilityPercentage = getInsideViewportPercentage({
      element: firstSectionRef.current,
      increaseSpeed: 3,
    });
    const secondSectionVisibilityPercentage = getInsideViewportPercentage({
      element: secondSectionRef.current,
      increaseSpeed: 3,
    });

    firstSectionRef.current.style.opacity = firstSectionVisibilityPercentage;
    secondSectionRef.current.style.opacity = secondSectionVisibilityPercentage;
  }, []);

  useEffect(() => {
    $(window).on("DOMContentLoaded load resize scroll", handleVisibilityChange);
    $("#root").on("scroll", handleVisibilityChange);

    $("#root").addClass("about-page-snap");
    firstSectionRef.current.scrollIntoView();
    $("#root").addClass("about-page-smooth");

    return () => {
      $(window).off("DOMContentLoaded load resize", handleVisibilityChange);
      $("#root").off("scroll", handleVisibilityChange);

      $("#root").removeClass("about-page-snap");
      $("#root").removeClass("about-page-smooth");
    };
  }, [handleVisibilityChange]);

  return (
    <SectionContext.Provider value={{ firstSectionRef, secondSectionRef }}>
      <div
        id="about"
        className="flex flex-col flex-auto justify-between items-center"
      >
        <OptionSection
          ref={firstSectionRef}
          id="option-section"
          className="
            flex flex-col
            w-full h-screen p-4
            justify-center items-center snap-center
          "
        />
        <ObjectSection
          ref={secondSectionRef}
          id="object-section"
          className="
            grid grid-rows-3 grid-cols-3
            relative w-full h-screen p-4 gap-8
            justify-center items-center snap-center select-none
          "
        />
      </div>
    </SectionContext.Provider>
  );
};

export default About;
