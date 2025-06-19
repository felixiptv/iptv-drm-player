"use client";

import React, { useEffect, useRef } from "react";

type Props = {
  manifestUri: string;
  licenseServerUrl: string;
};

declare global {
  interface Window {
    shaka: any;
  }
}

export default function ShakaPlayer({ manifestUri, licenseServerUrl }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!window.shaka || !videoRef.current) return;

    const player = new window.shaka.Player(videoRef.current);

    player.configure({
      drm: {
        servers: {
          "com.widevine.alpha": licenseServerUrl,
        },
      },
    });

    player
      .load(manifestUri)
      .then(() => console.log("Shaka video loaded"))
      .catch((e: any) => console.error("Shaka load error", e));

    return () => {
      player.destroy();
    };
  }, [manifestUri, licenseServerUrl]);

  return <video ref={videoRef} controls autoPlay width="100%" />;
}
