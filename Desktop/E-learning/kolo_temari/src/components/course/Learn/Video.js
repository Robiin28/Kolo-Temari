import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoPlayer = ({ options, onReady }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    // Initialize the video.js player
    if (playerRef.current) {
      return;
    }

    const videoElement = videoRef.current;
    if (!videoElement) return;

    const player = (playerRef.current = videojs(videoElement, options, () => {
      onReady && onReady(player);
    }));

    return () => {
      // Dispose the player when component is unmounted
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [options, onReady]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-big-play-centered" />
    </div>
  );
};

export default VideoPlayer;
