import React from 'react';
import './courseDetail.css';

const CourseDetail = ({ course = {}, progress = {}, user = {} }) => {
  // Placeholder function for starting/continuing the course
  const handleStartCourse = () => {
    // Logic to start or continue the course goes here
    console.log("Start or continue the course");
  };

  // Random data for demonstration
  const randomCourse = {
    title: 'Introduction to React',
    instructor: {
      photo: 'https://via.placeholder.com/150',
      name: 'Jane Doe',
      bio: 'Expert in React with over 10 years of experience.'
    },
    description: 'This course covers the fundamentals of React, including components, state, and props.',
    duration: '4 hours',
    level: 'Beginner',
    syllabus: [
      {
        title: 'Chapter 1: Getting Started',
        lessons: [
          { id: '1', title: 'Introduction to React' },
          { id: '2', title: 'Components and Props' },
        ]
      },
      {
        title: 'Chapter 2: Advanced Topics',
        lessons: [
          { id: '3', title: 'State Management' },
          { id: '4', title: 'Hooks' },
        ]
      }
    ],
    resources: [
      { id: 'r1', title: 'React Documentation', link: 'https://reactjs.org/docs/getting-started.html' },
      { id: 'r2', title: 'React Hooks Guide', link: 'https://reactjs.org/docs/hooks-intro.html' }
    ],
    certificate: true,
  };

  const randomProgress = {
    completionPercentage: 50,
    lastAccessedLesson: 'Introduction to React',
    lessons: {
      '1': true,
      '2': false,
      '3': false,
      '4': false,
    }
  };

  const randomUser = {
    achievements: ['Completed Intro to React', 'Completed Advanced Topics']
  };

  return (
    <div className="course-details">
      <header className="course-header">
        <h1>{randomCourse.title}</h1>
        <div className="instructor">
          <img src={randomCourse.instructor.photo} alt={randomCourse.instructor.name} className="instructor-photo" />
          <div className="instructor-info">
            <h2>{randomCourse.instructor.name}</h2>
            <p>{randomCourse.instructor.bio}</p>
          </div>
        </div>
        <p>{randomCourse.description}</p>
        <p><strong>Duration:</strong> {randomCourse.duration}</p>
        <p><strong>Level:</strong> {randomCourse.level}</p>
      </header>
      
      <section className="progress-tracking">
        <h2>Your Progress</h2>
        <p>Completion: {randomProgress.completionPercentage}%</p>
        <p>Last Accessed Lesson: {randomProgress.lastAccessedLesson}</p>
      </section>
      
      <section className="course-content">
        <h2>Course Content</h2>
        <ul>
          {randomCourse.syllabus.map((section, index) => (
            <li key={index} className="section">
              <h3>{section.title}</h3>
              <ul>
                {section.lessons.map(lesson => (
                  <li key={lesson.id} className={`lesson ${randomProgress.lessons[lesson.id] ? 'completed' : ''}`}>
                    <span>{lesson.title}</span>
                    {randomProgress.lessons[lesson.id] ? <span className="status">(Completed)</span> : null}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <button onClick={handleStartCourse}>Start/Continue Course</button>
      </section>
      
      <section className="additional-resources">
        <h2>Additional Resources</h2>
        <ul>
          {randomCourse.resources.map(resource => (
            <li key={resource.id}><a href={resource.link} download>{resource.title}</a></li>
          ))}
        </ul>
      </section>
      
      <section className="feedback">
        <h2>Feedback</h2>
        <p><strong>Certificate:</strong> {randomCourse.certificate ? 'Available upon completion' : 'Not available'}</p>
        <p><strong>Achievements:</strong> {randomUser.achievements.join(', ')}</p>
      </section>
    </div>
  );
};

export default CourseDetail;
