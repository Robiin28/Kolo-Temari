import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoPlayer = ({ options }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    // Initialize player
    if (videoRef.current) {
      playerRef.current = videojs(videoRef.current, options);
    }

    // Clean up player on component unmount or options change
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
      }
    };
  }, []); // Empty dependency array ensures this runs only on mount and unmount

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.src(options.sources); // Update the video source
    }
  }, [options.sources]); // Update player when videoSrc changes

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js"></video>
    </div>
  );
};

export default VideoPlayer;
