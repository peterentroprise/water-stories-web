import React, { useState, useEffect } from "react";

const useScrollPosition = () => {
  if (typeof window !== "undefined") {
    const [scrollPos, setScrollPos] = useState(window.pageYOffset);

    const onScroll = () => {
      setScrollPos(window.pageYOffset);
    };

    useEffect(() => {
      window.addEventListener("scroll", onScroll);
      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    });

    return scrollPos;
  }
  return 0;
};

export default useScrollPosition;
