"use client";
import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: string;
  initialY?: number;
  visibleY?: number;
  initialX?: number;
  visibleX?: number;
}

export const Anim = ({
  initialY,
  visibleY,
  initialX,
  visibleX,
  children,
  width,
}: Props) => {
  const ref = useRef(null); //A reference to the DOM element that the animation will be applied to.
  const controls = useAnimation(); //useAnimation() hook from Framer Motion to control animations.
  const isInView = useInView(ref, {
    once: true,
  }); //the component is currently in the viewport
  //{once: true,}  ensures that animation occurs only once when the component comes into view

  useEffect(() => {
    if (isInView) {
      //gets triggered if the val of inv changes
      controls.start("visible"); //starts the animation by calling
    }
  }, [controls, isInView]);

  const childrenArray = Array.isArray(children) ? children : [children];
  return (
    <div ref={ref} style={{ width }}>
      {childrenArray.map((child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: initialY, x: initialX },
            visible: {
              opacity: 1,
              y: visibleY,
              x: visibleX,
            },
          }}
          animate={controls}
          initial="hidden"
          transition={{ duration: 0.7, delay: 0.5 * index }}>
          {child}
        </motion.div>
      ))}
    </div>
  );
};
