import React, { useEffect, useRef, useState } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoPlayer = ({ options }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [selectedSource, setSelectedSource] = useState(options.sources[0]);

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
  }, []);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.src(selectedSource); // Update the video source
    }
  }, [selectedSource]);

  const handleQualityChange = (event) => {
    const newSource = options.sources.find(source => source.label === event.target.value);
    setSelectedSource(newSource);
  };

  return (
    <div data-vjs-player>
      <div className="video-quality-selector">
        <label htmlFor="quality">Quality: </label>
        <select id="quality" onChange={handleQualityChange} value={selectedSource.label}>
          {options.sources.map((source) => (
            <option key={source.label} value={source.label}>{source.label}</option>
          ))}
        </select>
      </div>
      <video ref={videoRef} className="video-js vjs-default-skin" controls preload="auto"></video>
    </div>
  );
};

export default VideoPlayer;
