import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoPlayer = ({ options }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.dispose();
    }

    playerRef.current = videojs(videoRef.current, options);

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
      }
    };
  }, [options]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js"></video>
    </div>
  );
};

export default VideoPlayer;
