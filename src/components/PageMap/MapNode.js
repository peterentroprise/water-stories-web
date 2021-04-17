import React from "react";

import { Tag } from "@chakra-ui/react";

const MapNode = ({ label, level }, props) => {
  return (
    <div xmlns="http://www.w3.org/1999/xhtml">
      <div className="map-node" {...props}>
        {label} - {level}
      </div>
    </div>
  );
};

export default MapNode;
