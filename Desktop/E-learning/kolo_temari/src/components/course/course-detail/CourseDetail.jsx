import React from "react";
import "./courseDetail.css";

const CourseDetail = ({ course = {}, progress = {}, user = {} }) => {
  const handleStartCourse = () => {
    console.log("Start or continue the course");
  };

  const randomCourse = {
    title: "Introduction to React",
    instructor: {
      photo: "https://via.placeholder.com/150",
      name: "Jane Doe",
      bio: "Expert in React with over 10 years of experience.",
    },
    description:
      "This course covers the fundamentals of React, including components, state, and props.",
    duration: "4 hours",
    level: "Beginner",
    syllabus: [
      {
        title: "Chapter 1: Getting Started",
        lessons: [
          { id: "1", title: "Introduction to React" },
          { id: "2", title: "Components and Props" },
        ],
      },
      {
        title: "Chapter 2: Advanced Topics",
        lessons: [
          { id: "3", title: "State Management" },
          { id: "4", title: "Hooks" },
        ],
      },
    ],
    resources: [
      {
        id: "r1",
        title: "React Documentation",
        link: "https://reactjs.org/docs/getting-started.html",
      },
      {
        id: "r2",
        title: "React Hooks Guide",
        link: "https://reactjs.org/docs/hooks-intro.html",
      },
    ],
    certificate: true,
  };

  const randomProgress = {
    completionPercentage: 50,
    lastAccessedLesson: "Introduction to React",
    lessons: {
      1: true,
      2: false,
      3: false,
      4: false,
    },
  };

  const randomUser = {
    achievements: ["Completed Intro to React", "Completed Advanced Topics"],
  };

  return (
    <div className="course-details">
      <header className="course-header">
        <h1>{randomCourse.title}</h1>
        <div className="instructor">
          <p>
            <strong>Duration:</strong> {randomCourse.duration}
            <strong>Level:</strong> {randomCourse.level}
          </p>
          <div className="instructor-info">
            <h3>Instructor</h3>
            <h2 className="name">{randomCourse.instructor.name}</h2>
            <p className="bio">{randomCourse.instructor.bio}</p>
          </div>
        </div>
      </header>
      <div>
        <p className="description">{randomCourse.description}</p>
      </div>
      <main className="main-section">
        <section className="course-content">
          <h2>Course Content</h2>
          <table className="syllabus-table">
            <thead>
              <tr>
                <th>Chapter</th>
                <th>Lesson</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {randomCourse.syllabus.map((section, index) => (
                section.lessons.map(lesson => (
                  <tr
                    key={lesson.id}
                    className={`lesson-row ${
                      randomProgress.lessons[lesson.id] ? "completed" : ""
                    }`}
                    onClick={() => console.log(`Clicked on ${lesson.title}`)}
                  >
                    <td>{section.title}</td>
                    <td>{lesson.title}</td>
                    <td>
                      {randomProgress.lessons[lesson.id] ? (
                        <span className="status">(Completed)</span>
                      ) : (
                        <span className="status">(Not Completed)</span>
                      )}
                    </td>
                  </tr>
                ))
              ))}
            </tbody>
          </table>
          <button onClick={handleStartCourse} className="btn-primary">
            Start/Continue Course
          </button>
        </section>
      </main>
      <div className="footer-sections">
        <section className="additional-resources">
          <h2>Additional Resources</h2>
          <ul>
            {randomCourse.resources.map((resource) => (
              <li key={resource.id}>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {resource.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="feedback">
          <h2>Feedback</h2>
          <p>
            <strong>Certificate:</strong>{" "}
            {randomCourse.certificate
              ? "Available upon completion"
              : "Not available"}
          </p>
          <p>
            <strong>Achievements:</strong>{" "}
            {randomUser.achievements.join(", ")}
          </p>
        </section>
      </div>
    </div>
  );
};

export default CourseDetail;
