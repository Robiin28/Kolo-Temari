import React, { useState, useCallback } from 'react';
import VideoPlayer from './VideoPlayer';
import './lecture.css';
import { FaPlay, FaInfoCircle, FaBook, FaLink } from 'react-icons/fa';
import Loader from './Loader';

const sections = [
  {
    title: 'Section 1: Introduction to React',
    parts: [
      {
        id: '1',
        title: 'Introduction',
        videoSrc: [
          { src: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8', type: 'application/x-mpegURL', label: '720p' },
          { src: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8', type: 'application/x-mpegURL', label: '480p' },
          { src: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8', type: 'application/x-mpegURL', label: '360p' },
        ],
      },
      {
        id: '2',
        title: 'Video Lecture',
        videoSrc: [
          { src: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8', type: 'application/x-mpegURL', label: '720p' },
          { src: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8', type: 'application/x-mpegURL', label: '480p' },
          { src: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8', type: 'application/x-mpegURL', label: '360p' },
        ],
      },
      { id: '3', title: 'Notes', videoSrc: '' },
      { id: '4', title: 'Further Reading', videoSrc: '' },
      { id: '5', title: 'Quiz' }
    ],
  },
  // Add more sections as needed
];

const content = {
  '1': 'Welcome to the introduction to React. This section covers the basics of React, including components, JSX, and state management.',
  '2': 'In this video lecture, we will go through React fundamentals. Watch the video to understand the core concepts of React.',
  '3': 'You can find the lecture notes [here](https://example.com/lecture-notes). These notes provide a detailed overview of the lecture topics.',
  '4': 'Further reading materials and resources can be found [here](https://example.com/further-reading). Explore these resources to deepen your understanding of React.',
  '5': 'This is a quiz to test your knowledge on React. [Start Quiz](https://example.com/quiz).'
};

export const Lecture = () => {
  const [selectedPart, setSelectedPart] = useState('1');
  const [videoSrc, setVideoSrc] = useState(sections[0].parts[0].videoSrc);
  const [loading, setLoading] = useState(false);
  const [completedParts, setCompletedParts] = useState({});

  const handlePartClick = useCallback((partId) => {
    setLoading(true); // Show loader while fetching data
    setSelectedPart(partId);
    const selectedPart = sections[0].parts.find(part => part.id === partId);
    setVideoSrc(selectedPart?.videoSrc || []);
    setLoading(false); // Hide loader after data is set
  }, []);

  const handleCheckboxChange = (partId) => {
    setCompletedParts(prevState => ({
      ...prevState,
      [partId]: !prevState[partId],
    }));
  };

  const calculateCompletionPercentage = () => {
    const totalParts = sections[0].parts.length;
    const completedPartsCount = Object.values(completedParts).filter(Boolean).length;
    return (completedPartsCount / totalParts) * 100;
  };

  const videoJsOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: videoSrc,
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
    <div className="lecture-container">
      <aside className="sidebar">
        <h2>Sections</h2>
        {sections.map((section, index) => (
          <div key={index}>
            <h3>{section.title}</h3>
            <ul className="section-parts">
              {section.parts.map((part) => (
                <li
                  key={part.id}
                  className={`section-part ${part.id === selectedPart ? 'active' : ''}`}
                  onClick={() => handlePartClick(part.id)}
                >
                  <span>
                    <span className="part-icon">
                      {part.id === '1' && <FaInfoCircle />}
                      {part.id === '2' && <FaPlay />}
                      {part.id === '3' && <FaBook />}
                      {part.id === '4' && <FaLink />}
                    </span>
                    {part.title}
                  </span>
                  <input
                    type="checkbox"
                    checked={completedParts[part.id] || false}
                    onChange={() => handleCheckboxChange(part.id)}
                    onClick={(e) => e.stopPropagation()}
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
      <main className="main-content">
        {loading ? (
          <Loader /> // Display loading animation
        ) : (
          <>
            <div className="content">
              <h2>Selected Part: {sections[0].parts.find(part => part.id === selectedPart)?.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: content[selectedPart] }} />
            </div>
            {videoSrc.length > 0 && (
              <div className="video-container">
                <VideoPlayer key={videoSrc} options={videoJsOptions} /> {/* Ensure player updates */}
              </div>
            )}
          </>
        )}
        <div className="completion-percentage">
          Completion: {calculateCompletionPercentage()}%
        </div>
      </main>
    </div>
  );
};

export default Lecture;
