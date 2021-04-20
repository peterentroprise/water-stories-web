import React, { useState, useEffect } from "react";

export const useScrollPosition = () => {
  if (typeof window !== "undefined") {
    const [scrollPos, setScrollPos] = useState(document.body.scrollTop);
    const onScroll = () => {
      setScrollPos(document.body.scrollTop);
    };

    useEffect(() => {
      document.body.addEventListener("scroll", onScroll);
      return () => {
        document.body.removeEventListener("scroll", onScroll);
      };
    });

    return scrollPos;
  }
  return 0;
};
