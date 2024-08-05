import React from "react";
import "./courseDetail.css";

// Sample user data
const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  profilePicture: "https://via.placeholder.com/150", // Placeholder image URL
  enrolledCourses: [
    { id: 1, title: "Introduction to React" },
    { id: 2, title: "JavaScript Fundamentals" },
  ],
  completedCourses: [
    { id: 3, title: "HTML & CSS Basics" },
    { id: 4, title: "Advanced JavaScript" },
  ],
  certificates: [
    {
      id: 1,
      title: "React Developer Certificate",
      link: "/certificates/react-dev",
    },
    {
      id: 2,
      title: "JavaScript Expert Certificate",
      link: "/certificates/js-expert",
    },
  ],
};

function CourseDetail() {
  return (
    <div className="user-profile">
      <div>
        <div className="profile-header">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="profile-picture"
          />
          <div className="profile-info">
            <h1>{user.name}</h1>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </div>
        </div>
        <div className="enrolled-courses">
          <h2>Enrolled Courses</h2>
          <ul>
            {user.enrolledCourses.map((course) => (
              <li key={course.id}>{course.title}</li>
            ))}
          </ul>
        </div>
        <div className="completed-courses">
          <h2>Completed Courses</h2>
          <ul>
            {user.completedCourses.map((course) => (
              <li key={course.id}>{course.title}</li>
            ))}
          </ul>
        </div>
        <div className="certificates">
          <h2>Certificates</h2>
          <ul>
            {user.certificates.map((certificate) => (
              <li key={certificate.id}>
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {certificate.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
