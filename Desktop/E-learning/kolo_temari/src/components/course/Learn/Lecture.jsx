import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-contrib-quality-levels';
import 'videojs-hls-quality-selector';

const VideoPlayer = ({ options, onReady }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (playerRef.current) {
      return;
    }

    const videoElement = videoRef.current;
    if (!videoElement) return;

    const player = (playerRef.current = videojs(videoElement, options, () => {
      onReady && onReady(player);
      player.hlsQualitySelector();
    }));

    return () => {
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

export const Lecture = () => {
  const videoJsOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
        type: 'application/x-mpegURL',
      },
    ],
    tracks: [
      {
        kind: 'captions',
        src: 'https://example.com/captions.vtt',
        srclang: 'en',
        label: 'English',
        default: true,
      },
    ],
    playbackRates: [0.5, 1, 1.5, 2],
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Lecture: Introduction to React</h1>
      <div style={styles.videoContainer}>
        <VideoPlayer options={videoJsOptions} />
      </div>
      <div style={styles.content}>
        <h2 style={styles.subTitle}>Lecture Notes</h2>
        <p style={styles.paragraph}>
          Welcome to the introduction to React. In this lecture, we will cover the basics of React,
          including components, JSX, and state management. React is a popular JavaScript library for
          building user interfaces, especially single-page applications. By the end of this lecture,
          you should have a good understanding of how React works and how to create simple React applications.
        </p>
        <h2 style={styles.subTitle}>Additional Resources</h2>
        <ul style={styles.list}>
          <li><a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">React Official Documentation</a></li>
          <li><a href="https://www.youtube.com/watch?v=Ke90Tje7VS0" target="_blank" rel="noopener noreferrer">React Crash Course - Traversy Media</a></li>
          <li><a href="https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/" target="_blank" rel="noopener noreferrer">The React Handbook - freeCodeCamp</a></li>
          <li><a href="https://scrimba.com/learn/learnreact" target="_blank" rel="noopener noreferrer">Learn React - Scrimba</a></li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '1000px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  videoContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  content: {
    textAlign: 'left',
  },
  subTitle: {
    marginBottom: '10px',
  },
  paragraph: {
    marginBottom: '20px',
    lineHeight: '1.6',
  },
  list: {
    listStyleType: 'none',
    paddingLeft: '0',
  },
  listItem: {
    marginBottom: '10px',
  },
};

export default Lecture;
