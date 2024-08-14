import React, { useState } from 'react';
import DashboardStats from './DashboardStats';
import Charts from './Charts';
import UserTable from './UserTable';
import CourseManagement from './CourseManagement';
import LessonManagement from './LessonManagement';
import Broadcast from './Broadcast'; // Import Broadcast component
import Settings from './Settings'; // Import Settings component
import { AdminFooter } from './AdminFooter';
import './Admin.css'; // Import the updated CSS file for styling
import { FaTachometerAlt, FaUsers, FaBook, FaChalkboardTeacher, FaChartBar, FaBroadcastTower, FaCog, FaSignOutAlt } from 'react-icons/fa'; // Import icons

// Mock user data
const userData = {
    students: [
        { id: 1, name: 'John Doe', email: 'john@example.com', enrolledCourses: 5, role: 'Student' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', enrolledCourses: 3, role: 'Student' }
    ],
    instructors: [
        { id: 1, name: 'Prof. Michael', email: 'michael@example.com', courses: 10, role: 'Instructor' },
        { id: 2, name: 'Dr. Sarah', email: 'sarah@example.com', courses: 8, role: 'Instructor' }
    ],
    courses: [
        {
            id: 1,
            title: 'Introduction to Programming',
            description: 'Learn the basics of programming with hands-on examples.',
            studentsEnrolled: 200,
            pic: '/image/real.png',
            instructor: 'Prof. Michael'
        },
        {
            id: 2,
            title: 'Advanced Data Structures',
            description: 'Dive deep into complex data structures and algorithms.',
            studentsEnrolled: 150,
            pic: '/image/kolo.png',
            instructor: 'Dr. Sarah'
        }
    ],
    lessons: [
        { id: 1, title: 'Variables and Data Types', course: 'Introduction to Programming' },
        { id: 2, title: 'Algorithms and Complexity', course: 'Advanced Data Structures' }
    ]
};

export const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [students, setStudents] = useState(userData.students);
    const [instructors, setInstructors] = useState(userData.instructors);
    const [courses, setCourses] = useState(userData.courses);
    const [lessons, setLessons] = useState(userData.lessons);

    // Function to handle adding a new course
    const handleAddCourse = (course) => {
        if (!course.title || !course.description || !course.instructor) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Simulate a new course ID (In a real scenario, this would be returned by the backend)
        const newCourse = {
            ...course,
            id: courses.length + 1, // Simulate a unique ID for the new course
            studentsEnrolled: 0 // Initial value for new courses
        };
        
        setCourses(prevCourses => [...prevCourses, newCourse]);
    };

    // Function to handle deleting users
    const handleDeleteUser = (id, type) => {
        if (type === 'students') {
            setStudents(prevStudents => prevStudents.filter(student => student.id !== id));
        } else if (type === 'instructors') {
            setInstructors(prevInstructors => prevInstructors.filter(instructor => instructor.id !== id));
        }
    };

    // Function to handle updating users
    const handleUpdateUser = (id, type) => {
        alert(`Update user functionality for ID: ${id} not implemented.`);
        // Implement update logic here
    };

    // Render content based on the active tab
    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard':
                return (
                    <>
                        <DashboardStats />
                        <Charts />
                    </>
                );
            case 'users':
                return (
                    <>
                        <UserTable data={students} type="students" onUpdate={handleUpdateUser} onDelete={handleDeleteUser} />
                        <UserTable data={instructors} type="instructors" onUpdate={handleUpdateUser} onDelete={handleDeleteUser} />
                    </>
                );
            case 'courses':
                return <CourseManagement courses={courses} onAddCourse={handleAddCourse} />;
            case 'lessons':
                return <LessonManagement lessons={lessons} />;
            case 'reports':
                return (
                    <>
                        <Charts />
                    </>
                );
            case 'broadcast':
                return <Broadcast />;
            case 'settings':
                return <Settings />;
            default:
                return null;
        }
    };

    return (
        <>
            <div className="admin-dashboard">
                <aside className="admin-sidebar">
                    <h2>Admin Panel</h2>
                    <ul>
                        <li><a href="#" onClick={() => setActiveTab('dashboard')}><FaTachometerAlt /> Dashboard</a></li>
                        <li><a href="#" onClick={() => setActiveTab('users')}><FaUsers /> Users</a></li>
                        <li><a href="#" onClick={() => setActiveTab('courses')}><FaBook /> Courses</a></li>
                        <li><a href="#" onClick={() => setActiveTab('lessons')}><FaChalkboardTeacher /> Lessons</a></li>
                        <li><a href="#" onClick={() => setActiveTab('reports')}><FaChartBar /> Reports</a></li>
                        <li><a href="#" onClick={() => setActiveTab('broadcast')}><FaBroadcastTower /> Broadcast</a></li>
                        <li><a href="#" onClick={() => setActiveTab('settings')}><FaCog /> Settings</a></li>
                    </ul>
                    <div className="logout">
                        <a href="#"><FaSignOutAlt /> Log Out</a>
                    </div>
                </aside>
                <div className="admin-content">
                    <header className="admin-header">
                        <h1>Admin Dashboard</h1>
                    </header>
                    <section className="contentss">
                        {renderContent()}
                    </section>
                </div>
            </div>
            <AdminFooter />
        </>
    );
};

export default AdminDashboard;
