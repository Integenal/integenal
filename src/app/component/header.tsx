"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { Anim } from "../methods/anim";
import Image from "next/image";
const Header: React.FC = () => {
  //  PART 1
  //variables are used to track the state of the background image loading
  // the height of the container element, the vertical scroll position, and the scroll progress,
  const [imageLoaded, setImageLoaded] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null); //it will access the container <div> element in the JSX code
  const [containerHeight, setContainerHeight] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [progress, setProgress] = useState(0);

  //  PART 2
  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true); //sets the imageLoaded state variable to true when called
  }, []); //doesn't depend on any external values, its memoized

  React.useEffect(() => {
    handleImageLoaded();
  }, [handleImageLoaded]);

  //responsible for handling resize and scroll events
  useEffect(() => {
    //function 1
    const handleResize = () => {
      if (refContainer.current) {
        setContainerHeight(refContainer.current.clientHeight);
      }
    };

    //function 2
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    //function 1 and 2 are called immediately after their definitions to measure the initial dimensions and positions

    handleResize(); // Measure container height initially
    handleScroll(); // Measure scroll position initially

    window.addEventListener("resize", handleResize); // Update container height on resize
    window.addEventListener("scroll", handleScroll); // Update scroll position on scroll

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup resize event listener
      window.removeEventListener("scroll", handleScroll); // Cleanup scroll event listener
    };
  }, []);

  //calculates the scroll progress based on the scrollY and containerHeigh
  useEffect(() => {
    if (containerHeight > 0) {
      setProgress(Math.min(1, scrollY / containerHeight)); //re-render the component to reflect the new scroll progress visually.
    }
  }, [scrollY, containerHeight]);

  return (
    <div
      ref={refContainer}
      className="min-h-screen p-12 flex flex-col items-center justify-center sticky top-0 -z-10"
      style={{ transform: `translateY(-${progress * 20}vh)` }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="brightness-50 absolute w-full h-full object-cover">
        <source src="./vid/bgint.mp4" type="video/mp4 " />
      </video>
      <div
        className={`flex-grow-0 pb-12 z-10 transition-opacity duration-500 ${
          imageLoaded ? "opacity-100" : "opacity-0 -translate-y-10"
        } `}>
        <Image
          src="./assets/svg/logo.svg"
          width={250 / 2}
          height={200 / 2}
          alt="logo"
          onLoad={handleImageLoaded}
        />
      </div>
      <div className="p-12 z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.6)] text-center flex flex-1 justify-center items-center flex-col">
        <Anim initialX={0} initialY={0} visibleX={0} visibleY={0}>
          <>
            <h1 className="mb-6 font-Popp2 text-4xl xl:text-5xl">Integenal</h1>
            <h2 className="mb-2 text-xl xl:text-2xl tracking-tight">
              <span>Web Development, </span>
              <span>perfected.</span>
            </h2>
          </>
        </Anim>
      </div>
      <div
        className={`flex-grow-0 pb-20 md:pb-10 z-10 transition-all duration-500  ${
          imageLoaded ? "opacity-100" : "opacity-0 -translate-y-10"
        }  `}>
        <Image
          src="./assets/svg/arrow.png"
          width={128 / 3}
          height={100 / 3}
          alt="scroll-down"
        />
      </div>
    </div>
  );
};
export default Header;
