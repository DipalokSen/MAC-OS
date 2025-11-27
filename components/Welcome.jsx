import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((char, index) => (
      <span
        key={index}
        className={className}
        style={{ fontVariationSettings:`whgt ${baseWeight}`, display: "inline-block" }}
      >
        {char=== " " ? "\u00A0" : char  }
      </span>
    ));
  };

  useEffect(() => {
    const subtitleChars = subtitleRef.current.children;
    const titleChars = titleRef.current.children;

    // HOVER for subtitle
    subtitleRef.current.addEventListener("mouseenter", () => {
      gsap.to(subtitleChars, {
        y: -20,
        rotate: 10,
        duration: 0.6,
        ease: "back.out(2)",
        stagger: 0.03,
      });
    });

    subtitleRef.current.addEventListener("mouseleave", () => {
      gsap.to(subtitleChars, {
        y: 0,
        rotate: 0,
        duration: 0.3,
        stagger: 0.03,
      });
    });

    // HOVER for title
    titleRef.current.addEventListener("mouseenter", () => {
      gsap.to(titleChars, {
        y: -20,
        rotateY: 50,
        scale: 1.2,
        duration: 0.6,
        ease: "elastic.out(1, 0.4)",
        stagger: 0.05,
      });
    });

    titleRef.current.addEventListener("mouseleave", () => {
      gsap.to(titleChars, {
         y: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.4,
        stagger: 0.05,
      });
    });
  }, []);

  return (
    <section id="welcome" >
      <p ref={subtitleRef}>
        {renderText("Hey, I'm Dipalok Welcome to my", "text-4xl")}
      </p>
      <h1 ref={titleRef} className="mt-7">
        {renderText("Portfolio", "text-9xl italic")}
      </h1>
    </section>
  );
};

export default Welcome;
