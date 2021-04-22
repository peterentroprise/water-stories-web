import React, { useState, useEffect } from "react";

export const useElementScrollPosition = () => {
  if (
    typeof window !== "undefined" &&
    document.getElementById("scrollTarget") != null
  ) {
    const [scrollPos, setScrollPos] = useState(
      document.getElementById("scrollTarget").scrollTop
    );
    const onScroll = () => {
      setScrollPos(document.getElementById("scrollTarget").scrollTop);
    };

    useEffect(() => {
      document
        .getElementById("scrollTarget")
        .addEventListener("scroll", onScroll);
      return () => {
        if (document.getElementById("scrollTarget") != null) {
          document
            .getElementById("scrollTarget")
            .removeEventListener("scroll", onScroll);
        }
      };
    });

    return scrollPos;
  }
  return 0;
};
