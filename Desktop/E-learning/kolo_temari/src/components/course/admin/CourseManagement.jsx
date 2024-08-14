import React, { useState } from 'react';
import './Admin.css'; // Import CSS file for styling
import { FaUsers } from 'react-icons/fa'; // Import an icon from react-icons

const CourseManagement = ({ courses = [], onAddCourse, onUpdateCourse }) => {
    const [newCourse, setNewCourse] = useState({
        title: '',
        description: '',
        pic: '', // Initially empty for file input
        status: 'free',
        price: '',
        instructor: '',
    });

    const [editingCourse, setEditingCourse] = useState(null); // State to manage course to be updated
    const [showForm, setShowForm] = useState(false); // State to manage form visibility
    const [selectedCourse, setSelectedCourse] = useState(null); // State to manage selected course for viewing students

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewCourse({
            ...newCourse,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNewCourse({
                ...newCourse,
                pic: URL.createObjectURL(file)
            });
        }
    };

    const handleAddCourse = () => {
        if (!newCourse.title || !newCourse.description || !newCourse.instructor) {
            alert('Please fill in all required fields.');
            return;
        }
        onAddCourse({
            ...newCourse,
            id: Date.now(), // Use a unique ID for now
            studentsEnrolled: 0 // Default value for new courses
        });
        resetForm();
    };

    const handleEditCourse = (course) => {
        setEditingCourse(course);
        setNewCourse({
            ...course,
            pic: course.pic // Keep the existing image URL
        });
        setShowForm(true); // Show form when editing a course
    };

    const handleUpdateCourse = () => {
        if (!newCourse.title || !newCourse.description || !newCourse.instructor) {
            alert('Please fill in all required fields.');
            return;
        }
        onUpdateCourse(newCourse);
        resetForm();
    };

    const resetForm = () => {
        setNewCourse({
            title: '',
            description: '',
            pic: '', // Reset image
            status: 'free',
            price: '',
            instructor: '',
        });
        setEditingCourse(null);
        setShowForm(false); // Hide form after adding/updating
    };

    const handleViewStudents = (course) => {
        setSelectedCourse(course);
    };

    const closeStudentList = () => {
        setSelectedCourse(null);
    };

    // Example student data (replace with actual data later)
    const exampleStudents = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown"];

    return (
        <>
            <h2>Courses</h2>
            {showForm ? (
                <>
                    <button onClick={resetForm} className="close-form-button">Close</button>
                    <h3>{editingCourse ? 'Update Course' : 'Add New Course'}</h3>
                    <div className="course-form">
                        <input
                            type="text"
                            name="title"
                            placeholder="Course Title"
                            value={newCourse.title}
                            onChange={handleChange}
                        />
                        <textarea
                            name="description"
                            placeholder="Course Description"
                            value={newCourse.description}
                            onChange={handleChange}
                        />
                        <input
                            type="file"
                            name="pic"
                            onChange={handleFileChange}
                        />
                        <select
                            name="status"
                            value={newCourse.status}
                            onChange={handleChange}
                        >
                            <option value="free">Free</option>
                            <option value="paid">Paid</option>
                        </select>
                        <input
                            type="number"
                            name="price"
                            placeholder="Course Price"
                            value={newCourse.price}
                            onChange={handleChange}
                            disabled={newCourse.status === 'free'}
                        />
                        <input
                            type="text"
                            name="instructor"
                            placeholder="Instructor Name"
                            value={newCourse.instructor}
                            onChange={handleChange}
                        />
                        <button onClick={editingCourse ? handleUpdateCourse : handleAddCourse}>
                            {editingCourse ? 'Update Course' : 'Add Course'}
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <button onClick={() => setShowForm(true)} className="show-form-button">Add Course</button>
                    <table className="course-table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Instructor</th>
                                <th>Students Enrolled</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map(course => (
                                <tr key={course.id} onClick={() => handleEditCourse(course)}>
                                    <td><img src={course.pic} alt={course.title} className="course-image-small" /></td>
                                    <td>{course.title}</td>
                                    <td>{course.instructor}</td>
                                    <td>
                                        {course.studentsEnrolled}
                                        <FaUsers 
                                            className="view-students-icon" 
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleViewStudents(course);
                                            }} 
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}

            {/* Display student list when a course is selected */}
            {selectedCourse && (
                <div className="student-list">
                    <h3>Students Enrolled in {selectedCourse.title}</h3>
                    <ul>
                        {exampleStudents.map((student, index) => (
                            <li key={index}>{student}</li>
                        ))}
                    </ul>
                    <button onClick={closeStudentList}>Close</button>
                </div>
            )}
        </>
    );
};

export default CourseManagement;
