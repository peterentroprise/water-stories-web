import React, { useState, useEffect } from "react";

export const useElementScrollPosition = () => {
  if (typeof window !== "undefined") {
    const [scrollPos, setScrollPos] = useState(
      document.getElementById("scrollTarget").scrollTop
    );
    const onScroll = () => {
      setScrollPos(document.getElementById("scrollTarget").scrollTop);
      console.log(scrollPos);
    };

    useEffect(() => {
      document
        .getElementById("scrollTarget")
        .addEventListener("scroll", onScroll);
      return () => {
        document
          .getElementById("scrollTarget")
          .removeEventListener("scroll", onScroll);
      };
    });

    return scrollPos;
  }
  return 0;
};
