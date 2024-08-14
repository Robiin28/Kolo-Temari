// src/components/UserTable.js
import React from 'react';

const UserTable = ({ data, type, onUpdate, onDelete }) => {
    return (
        <>
            <h2>{type.charAt(0).toUpperCase() + type.slice(1)}</h2>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        {type === 'students' ? <th>Enrolled Courses</th> : <th>Teached Courses</th>}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            {type === 'students' ? <td>{item.enrolledCourses}</td> : <td>{item.courses}</td>}
                            <td>
                                <button onClick={() => onUpdate(item.id, type)}>Update</button>
                                <button onClick={() => onDelete(item.id, type)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default UserTable;
