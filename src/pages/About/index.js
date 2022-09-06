// React
import { createContext, useRef, useEffect, useCallback } from "react";

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

const getInsideViewportPercentage = (element) => {
  const viewport = getViewportBounds();
  const rect = getElementBounds(element);
  if (!isInsideViewport(element)) {
    return 0;
  } else {
    return (
      (rect.height -
        Math.max(
          0,
          Math.min(Math.abs(viewport.y2 - rect.y2) * 3, rect.height)
        )) /
      rect.height
    ).toFixed(2);
  }
};

export const SectionContext = createContext(null);

const About = () => {
  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);

  const onVisibilityChange = useCallback(() => {
    const firstSectionVisibilityPercentage = getInsideViewportPercentage(
      firstSectionRef.current
    );
    const secondSectionVisibilityPercentage = getInsideViewportPercentage(
      secondSectionRef.current
    );

    $("#option-section").css({ opacity: firstSectionVisibilityPercentage });
    $("#object-section").css({ opacity: secondSectionVisibilityPercentage });
  }, []);

  useEffect(() => {
    $(window).on("DOMContentLoaded load resize", onVisibilityChange);
    $("#root").on("scroll", onVisibilityChange);

    $("#root").addClass("about-page-snap");
    firstSectionRef.current.scrollIntoView();
    $("#root").addClass("about-page-smooth");

    return () => {
      $(window).off("DOMContentLoaded load resize", onVisibilityChange);
      $("#root").off("scroll", onVisibilityChange);
      $("#root").removeClass("about-page-snap");
      $("#root").removeClass("about-page-smooth");
    };
  }, [onVisibilityChange]);

  return (
    <SectionContext.Provider value={{ firstSectionRef, secondSectionRef }}>
      <div
        id="about"
        className="flex flex-col flex-auto justify-between items-center"
      >
        <OptionSection
          id="option-section"
          className="
            flex flex-col
            w-full h-screen p-4
            justify-center items-center text-center select-none snap-center
          "
          ref={firstSectionRef}
        />
        <ObjectSection
          id="object-section"
          className="
            grid grid-rows-3 grid-cols-3 relative
            w-full h-screen p-4 gap-8
            justify-center items-center text-center select-none snap-center
          "
          ref={secondSectionRef}
        />
      </div>
    </SectionContext.Provider>
  );
};

export default About;
