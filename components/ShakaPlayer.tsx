"use client";

import React, { useEffect, useRef } from "react";
import shaka from "shaka-player";

type Props = {
  manifestUri: string;
  licenseServerUrl: string;
};

export default function ShakaPlayer({ manifestUri, licenseServerUrl }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const player = new shaka.Player(videoRef.current!);

    player.configure({
      drm: {
        servers: {
          "com.widevine.alpha": licenseServerUrl,
        },
      },
    });

    player
      .load(manifestUri)
      .then(() => console.log("Video loaded!"))
      .catch((e) => console.error("Error loading video", e));

    return () => {
      player.destroy();
    };
  }, [manifestUri, licenseServerUrl]);

  return <video ref={videoRef} controls autoPlay width="100%" />;
}