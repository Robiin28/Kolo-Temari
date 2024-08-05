import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faClock, faBullhorn, faUsers, faPlay, faStairs, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Tabs, Tab, Button, Card, CardHeader, CardContent } from '@mui/material';
import './SpecficCourse.css'; // Ensure this path is correct

export const SpecficCourse = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case 0:
        return (
          <div className="description-content">
            <p>
              Ce cours explorera le baseball à travers le prisme de la race, du sexe et de la culture...
            </p>
            <h6><b>Course appendices</b></h6>
            <hr />
            <ul>
              <li>Comprenez comment le baseball éclaire l’histoire des relations raciales.</li>
              <li>Analysez les défis auxquels sont confrontées les femmes dans le sport et en Amérique.</li>
              <li>Minez la façon dont le baseball reflète la culture américaine.</li>
              <li>Minez la façon dont le baseball reflète la culture américaine.</li>
              <li>Iuminez la façon dont le baseball reflète la culture américaine.</li>
            </ul>
          </div>
        );
      case 1:
        return (
          <div className="curriculum-content">
            {/* Chapter 1 */}
            <div className="chapter">
              <h6>Chapter 1: Water Sanitation</h6>
              <div className="list">
                <div className="list-left">
                  <p>1</p>
                  <FontAwesomeIcon className="file" icon={faFile} />
                  <p>Introduction</p>
                </div>
                <div className="list-right">
                  <FontAwesomeIcon icon={faClock} />
                  <p>30:00 min</p>
                </div>
              </div>
              {/* Add more lists here */}
            </div>
            {/* Chapter 2 */}
            <div className="chapter">
              <h6>Chapter 2: Water Tunnel</h6>
              <div className="list">
                <div className="list-left">
                  <p>1</p>
                  <FontAwesomeIcon className="file" icon={faFile} />
                  <p>Introduction</p>
                </div>
                <div className="list-right">
                  <FontAwesomeIcon icon={faClock} />
                  <p>30:00 min</p>
                </div>
              </div>
              {/* Add more lists here */}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="reviews-content">
            <div>
              <h6>Be the first to add a review.</h6>
              <p>Please, <a href="#">login</a> to leave a review.</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <>
    <div className='topSpecfic'>
    <div className="status">
        <h3>free</h3>
        <h1>Environmental course</h1>
    <p>Start developing with Large Language Models using Google AI Studio and the Gemini API. You’ll learn to develop applications that work with text, images, and code.</p>
    </div>
    <div>
   
    <img src="/image/real.png" alt="Background" className="CourseImage" />        
    </div>
    <button className='enroll' >Enroll Now!</button>
</div>
 <div className='secondTop'>
       <div className='content'>
        <span>Beginner</span>
        <span>55hr</span>
        <span>certefite</span>
        <span>Updated on july</span>
       </div>
       <div className="skills">
         <h3>Skills you u will be learned</h3>
         <p>Large Language Models • Gemini API • Google AI Studio</p>
         <h3>Prerequisites:</h3>
         <h4> Intermediate Python</h4>

       </div>
</div>

    <div className="course">
      <div className="leftSpecfic">
        <div className="right-header">
          <h1 style={{ fontWeight: 500 }}>Environmental Science</h1>
          <div className="course-description">
            <div className="teacher">
              <p className="small-opacity">Teacher</p>
              <p>Yared Ekubay</p>
            </div>
            <div className="category">
              <FontAwesomeIcon icon={faFile} /> {/* Ensure this icon is appropriate */}
              <div>
                <p className="small-opacity">Category</p>
                <p>SCIENCE ENVIRONMENTAL</p>
              </div>
            </div>
          </div>
          <Tabs value={selectedTab} onChange={handleTabChange}>
            <Tab label="Description" />
            <Tab label="Curriculum" />
            <Tab label="Reviews" />
          </Tabs>
          {renderTabContent()}
        </div>
      </div>
      <div className="specficRight">
        <div className="wishlist">
          <span className="wishlisticon"><FontAwesomeIcon icon={faHeart} /></span>
          <p>Add to wishlist</p>
        </div>
        <Button variant="contained" color="primary" className="get-course-btn" href="/lesson">
          GET COURSE
        </Button>
        <div className="course-info">
          <div>
            <p>Enrolled: <b>2 students</b></p>
            <FontAwesomeIcon icon={faUsers} />
          </div>
          <hr />
          <div>
            <p>Duration: <b>1 month</b></p>
            <FontAwesomeIcon icon={faClock} />
          </div>
          <hr />
          <div>
            <p>Lectures: <b>11</b></p>
            <FontAwesomeIcon icon={faBullhorn} />
          </div>
          <hr />
          <div>
            <p>Video: <b>5:00 min</b></p>
            <FontAwesomeIcon icon={faPlay} />
          </div>
          <hr />
          <div>
            <p>Level: <b>Beginner</b></p>
            <FontAwesomeIcon icon={faStairs} />
          </div>
        </div>
        <Card className="suggestion">
          <CardHeader
            avatar={<div className="image"></div>}
            title="HTML"
            subheader="BY Yared Ekubay"
          />
          <CardContent>
            <Button variant="contained" color="primary" href="/lesson">Free</Button>
          </CardContent>
          <CardHeader
            avatar={<div className="image"></div>}
            title="HTML"
            subheader="BY Kirubel Tesfaw"
          />
          <CardContent>
            <Button variant="contained" color="primary" href="/lesson">Free</Button>
          </CardContent>
          <CardHeader
            avatar={<div className="image"></div>}
            title="HTML"
            subheader="BY BEAKAL ZELEALEM"
          />
          <CardContent>
            <Button variant="contained" color="primary" href="/lesson">Free</Button>
          </CardContent>
        </Card>
        <hr />
        <div className="working-hours">
          <b>Working hours</b>
          <div>
            <p>Monday</p>
            <p>9:30 am - 6:00 pm</p>
          </div>
          <hr />
          <div>
            <p>Tuesday</p>
            <p>9:30 am - 6:00 pm</p>
          </div>
          <hr />
          <div>
            <p>Wednesday</p>
            <p>9:30 am - 6:00 pm</p>
          </div>
          <hr />
          <div>
            <p>Thursday</p>
            <p>9:30 am - 6:00 pm</p>
          </div>
          <hr />
          <div>
            <p>Friday</p>
            <p>9:30 am - 6:00 pm</p>
          </div>
          <hr />
          <div>
            <p>Saturday</p>
            <p className="closed">Closed</p>
          </div>
          <hr />
          <div>
            <p>Sunday</p>
            <p className="closed">Closed</p>
          </div>
        </div>
      </div>
    </div>
    </> 
  );
};
export default SpecficCourse;
