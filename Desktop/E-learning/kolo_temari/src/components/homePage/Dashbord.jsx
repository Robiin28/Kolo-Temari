import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Tabs, Tab } from '@mui/material';
import { FaSort, FaCalendarAlt, FaList } from 'react-icons/fa';
import { FiMoreVertical } from 'react-icons/fi';
import './program.css';

export const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleButtonClick = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.more-options')) {
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const courses = [
    {
      name: 'Undergraduate Studies',
      title: 'HTML and CSS',
      image: '/image/students.png'
    },
    {
      name: 'Graduate Studies',
      title: 'JavaScript Basics',
      image: '/image/students.png'
    },
    {
      name: 'Postgraduate Studies',
      title: 'React and Redux',
      image: '/image/students.png'
    },
    // Add more courses as needed
  ];

  const renderTabContent = () => {
    switch (selectedTab) {
      case 0:
        return (
          <div className='boxen'>
            <div className='all-course'>
              <h1>Course Overview</h1>
              <div className="select-container courseSelect">
               
              </div>
              <div className='leftSelect'>
              <div className="select-container sort">
                <div className="select-wrapper">
                  <FaSort className='select-icon' />
                  <select className="sortCourse">
                    <option>Course Name</option>
                    <option>Date</option>
                  </select>
                </div>

              </div>
              <div className="select-container view ">
                <div className="select-wrapper">
                  <FaCalendarAlt className='select-icon' />
                  <select className="viewCourse">
                    <option>Card</option>
                    <option>List</option>
                    <option>Summary</option>
                  </select>
                </div>
              </div>
              </div>
              <div className="select-wrapper">
                  <FaList className='select-icon' />
                  <select className='optionSort'>
                    <option>All (except removed from view)</option>
                    <option>Recently Enrolled</option>
                    <option>In Progress</option>
                    <option>Future</option>
                    <option>Removed from View</option>
                  </select>
                </div>
            </div>
            <div className="container">
              <div className="coursesView">
                {courses.map((course, index) => (
                  <div className='boxCourse' key={index}>
                    <div className='img'>
                      <img src={course.image} alt={course.name} />
                    </div>
                    <h1 className="courseName">{course.name}</h1>
                    <h2>{course.title}</h2>
                    <div className="more-options">
                      <button className="more-options-btn" onClick={() => handleButtonClick(index)}>
                        <FiMoreVertical />
                      </button>
                      {activeDropdown === index && (
                        <div className="dropdown-menu">
                          <p>Option 1</p>
                          <p>Option 2</p>
                          <p>Option 3</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="currently-learning-content">
            <p>Course</p>
            <h6>Course Name</h6>
            <h5>Currently Learning</h5>
          </div>
        );

      case 2:
        return (
          <div className='course-completed'>
            <h1>List of Certificates</h1>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="dashboard">
      <div className="leftCourse">
        <div className='container'>
          <div className='headland'>
            <h1>My Programs</h1>
          </div>
          <Tabs value={selectedTab} onChange={handleTabChange}>
            <Tab label="Courses" />
            <Tab label="Currently Learning" />
            <Tab label="Course Completed" />
          </Tabs>
          {renderTabContent()}
        </div>
      </div>
      <div className='rightCourse'>
        <div className='container'>
          <div className='boxDashboard'>
            <h3>Calendar</h3>
            <div className='date'>
              <DatePicker 
                selected={startDate} 
                onChange={(date) => setStartDate(date)} 
                inline 
              />
            </div>
          </div>   
          <div className="boxDashboard">
            <h3>Upcoming Events</h3>
            <h5>There are no upcoming events</h5>
          </div>
          <div className="boxDashboard">
            <h3>Payment</h3>
            <h5>No payment is done</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
