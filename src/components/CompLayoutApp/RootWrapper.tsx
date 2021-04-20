import { useState, useEffect, useCallback } from "react";

import { Mobile } from "./Mobile";
import { Desktop } from "./Desktop";

type RootWrapperProps = {
  pageName: string;
};

export const RootWrapper: React.FC<RootWrapperProps> = ({
  children,
  pageName = "Default Page Name",
}) => {
  const breakpoint = "52em";

  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${breakpoint})`);
    media.addEventListener("change", (e) => updateTarget(e));
    if (media.matches) {
      setTargetReached(true);
    }
    return () => media.removeEventListener("change", (e) => updateTarget(e));
  }, []);

  if (targetReached) {
    return <Mobile pageName={pageName}>{children}</Mobile>;
  }
  return <Desktop pageName={pageName}>{children}</Desktop>;
};
