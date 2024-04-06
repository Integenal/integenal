"use client";
import React, { useRef, useEffect } from "react";
import { motion, inView, useAnimation, useInView } from "framer-motion";

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
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  const childrenArray = Array.isArray(children) ? children : [children];
  return (
    <div ref={ref} className={``} style={{ width }}>
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
          transition={{ duration: 0.7, delay: 0.3 * index }}>
          {child}
        </motion.div>
      ))}
    </div>
  );
};
