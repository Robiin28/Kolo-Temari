// src/components/LessonManagement.js
import React, { useState } from 'react';

const LessonManagement = ({ lessons, onAddLesson }) => {
    const [newLesson, setNewLesson] = useState({
        courseId: '',
        title: '',
        content: '',
        videoUrls: '',
        resources: '',
        pic: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewLesson({
            ...newLesson,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNewLesson({
                ...newLesson,
                pic: URL.createObjectURL(file)
            });
        }
    };

    const handleAddLesson = () => {
        if (!newLesson.courseId || !newLesson.title || !newLesson.content) {
            alert('Please fill in all required fields.');
            return;
        }
        onAddLesson(newLesson);
        setNewLesson({
            courseId: '',
            title: '',
            content: '',
            videoUrls: '',
            resources: '',
            pic: '',
            description: ''
        });
    };

    return (
        <>
            <h2>Lessons</h2>
            <ul>
                {lessons.map(lesson => (
                    <li key={lesson.id}>
                        {lesson.title} - Course: {lesson.course}
                    </li>
                ))}
            </ul>
            <h3>Add New Lesson</h3>
            <div className="lesson-form">
                <input
                    type="text"
                    name="courseId"
                    placeholder="Course ID"
                    value={newLesson.courseId}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="title"
                    placeholder="Lesson Title"
                    value={newLesson.title}
                    onChange={handleChange}
                />
                <textarea
                    name="content"
                    placeholder="Lesson Content"
                    value={newLesson.content}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="videoUrls"
                    placeholder="Video URLs (comma-separated)"
                    value={newLesson.videoUrls}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="resources"
                    placeholder="Resources (comma-separated)"
                    value={newLesson.resources}
                    onChange={handleChange}
                />
                <input
                    type="file"
                    name="pic"
                    onChange={handleFileChange}
                />
                <textarea
                    name="description"
                    placeholder="Lesson Description"
                    value={newLesson.description}
                    onChange={handleChange}
                />
                <button onClick={handleAddLesson}>Add Lesson</button>
            </div>
        </>
    );
};

export default LessonManagement;
