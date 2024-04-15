"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { ScrollCont } from "../methods/scroll";
import { Anim } from "../methods/anim";
import Image from "next/image";
const Header: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true);
  }, []);
  React.useEffect(() => {
    handleImageLoaded();
  }, [handleImageLoaded]);

  useEffect(() => {
    const handleResize = () => {
      if (refContainer.current) {
        setContainerHeight(refContainer.current.clientHeight);
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleResize(); // Measure container height initially
    handleScroll(); // Measure scroll position initially

    window.addEventListener("resize", handleResize); // Update container height on resize
    window.addEventListener("scroll", handleScroll); // Update scroll position on scroll

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup resize event listener
      window.removeEventListener("scroll", handleScroll); // Cleanup scroll event listener
    };
  }, []);

  useEffect(() => {
    if (containerHeight > 0) {
      setProgress(Math.min(1, scrollY / containerHeight));
    }
  }, [scrollY, containerHeight]);
  return (
    <div
      ref={refContainer}
      className="min-h-screen p-12 flex flex-col items-center justify-center sticky top-0 -z-10"
      style={{ transform: `translateY(-${progress * 20}vh)` }}>
      {" "}
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
            {" "}
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

/*<Avatar
  avatarStyle='Transparent'
  topType='ShortHairShortCurly'
  accessoriesType='Blank'
  hairColor='Black'
  facialHairType='MoustacheFancy'
  facialHairColor='Black'
  clotheType='Hoodie'
  clotheColor='Gray02'
  eyeType='Surprised'
  eyebrowType='Default'
  mouthType='Serious'
  skinColor='Light'


  <Avatar
  avatarStyle='Transparent'
  topType='ShortHairShortWaved'
  accessoriesType='Blank'
  hairColor='Black'
  facialHairType='BeardLight'
  facialHairColor='Black'
  clotheType='ShirtVNeck'
  clotheColor='Black'
  eyeType='Squint'
  eyebrowType='DefaultNatural'
  mouthType='Default'
  skinColor='Light'
/>


<Avatar
  avatarStyle='Transparent'
  topType='ShortHairShortFlat'
  accessoriesType='Blank'
  hairColor='Brown'
  facialHairType='Blank'
  clotheType='ShirtCrewNeck'
  clotheColor='PastelBlue'
  eyeType='Happy'
  eyebrowType='DefaultNatural'
  mouthType='Smile'
  skinColor='Light'
/>
/>*/
