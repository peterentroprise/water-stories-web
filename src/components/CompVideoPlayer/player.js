import React from "react";
import ReactJWPlayer from "react-jw-player";

const CompVideoPlayer = ({ videoUrl }) => {
  return (
    <ReactJWPlayer
      playerId="jw-player-instance"
      playerScript="https://cdn.jwplayer.com/libraries/zu9ZTlIy.js"
      file={videoUrl}
    />
  );
};

export default CompVideoPlayer;
