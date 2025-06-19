"use client";

import React, { useEffect } from "react";

declare global {
  interface Window {
    jwplayer: any;
  }
}

interface JWPlayerProps {
  videoId: string;
  fileUrl: string;
}

const JWPlayer = ({ videoId, fileUrl }: JWPlayerProps) => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.jwplayer) {
      window.jwplayer(videoId).setup({
        file: fileUrl,
        width: "100%",
        aspectratio: "16:9",
      });
    }
  }, [videoId, fileUrl]);

  return <div id={videoId}></div>;
};

export default JWPlayer;