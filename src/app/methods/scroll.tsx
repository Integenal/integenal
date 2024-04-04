import React, { useCallback, useEffect, useState, ReactNode } from "react";

interface Scrollval {
  scrollY: number;
}

interface ScrollObsProps {
  children: ReactNode;
}

export const ScrollCont = React.createContext<Scrollval>({
  scrollY: 0,
});

const ScrollObs: React.FC<ScrollObsProps> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <ScrollCont.Provider value={{ scrollY }}>{children}</ScrollCont.Provider>
  );
};

export default ScrollObs;
