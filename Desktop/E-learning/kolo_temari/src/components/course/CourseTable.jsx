import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus, faStar, faStarHalfAlt,faClock, faList, faHeart, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faPinterest, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';

import './course.css';

export const CourseTable = () => {
    const [isDisplayCatagory, setIsDisplayCatagory] = useState(true);
    const [isDisplayStatus, setIsDisplayStatus] = useState(true);
    const [isDisplayLevel, setIsDisplayLevel] = useState(true);
    const [isDisplayRating, setIsDisplayRating] = useState(true);
    const [isDisplayInstructors, setIsDisplayInstructors] = useState(true);
    const [isDisplayPrice, setIsDisplayPrice] = useState(true);
    const [selectedValue, setSelectedValue] = useState('Release date (Newest First)');
    const sortOptions = [
      { value: 'newest', viewValue: 'Release date (Newest First)' },
      { value: 'oldest', viewValue: 'Release date (Oldest First)' },
    ];

    return (
        <>
          <div className="top">
                <h1 style={{ fontWeight: 800 }}>Course</h1>
                <div className="search-bar">
                    <input type="text" placeholder="Search Courses" className="search-input" />
                    <button className="search-button">
                        <FontAwesomeIcon icon={faSearch} style={{ color: 'blue' }} />
                    </button>
                </div>
                <div className="sort-section">
                    <span className="sort-label">Sort By:</span>
                    <select
                        value={selectedValue}
                        onChange={(e) => setSelectedValue(e.target.value)}
                        className="sort-select"
                    >
                        {sortOptions.map((sort, index) => (
                            <option key={index} value={sort.value}>
                                {sort.viewValue}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        <div className="courses">
            <div className="bottom">
                <div className="left">
                    {/* Categories Section */}
                    <div className="checkbox-group">
                        <button onClick={() => setIsDisplayCatagory(!isDisplayCatagory)} className="btn">
                            <span>Category</span>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                        {!isDisplayCatagory && (
                            <div className="checkbox-list">
                                <label><input type="checkbox" /> Theology</label>
                                <label><input type="checkbox" /> Environmental Science</label>
                                <label><input type="checkbox" /> Computer Science</label>
                                <label><input type="checkbox" /> Art</label>
                                <label><input type="checkbox" /> Mathematics</label>
                                <label><input type="checkbox" /> Biology</label>
                                <label><input type="checkbox" /> Communication</label>
                                <label><input type="checkbox" /> Medicine</label>
                                <label><input type="checkbox" /> Physics</label>
                                <label><input type="checkbox" /> Photography</label>
                                <label><input type="checkbox" /> Pharmacy</label>
                                <label><input type="checkbox" /> Graphics Designing</label>
                                <label><input type="checkbox" /> Psychology</label>
                            </div>
                        )}
                    </div>

                    {/* Status Section */}
                    <div className="status">
                        <button onClick={() => setIsDisplayStatus(!isDisplayStatus)} className="btn">
                            <span>Status</span>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                        {!isDisplayStatus && (
                            <div className="checkbox-list">
                                <label><input type="checkbox" /> Featured</label>
                                <label><input type="checkbox" /> Hot</label>
                                <label><input type="checkbox" /> New</label>
                                <label><input type="checkbox" /> Special</label>
                            </div>
                        )}
                    </div>

                    {/* Level Section */}
                    <div className="level">
                        <button onClick={() => setIsDisplayLevel(!isDisplayLevel)} className="btn">
                            <span>Level</span>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                        {!isDisplayLevel && (
                            <div className="checkbox-list">
                                <label><input type="checkbox" /> Beginner</label>
                                <label><input type="checkbox" /> Intermediate</label>
                                <label><input type="checkbox" /> Advanced</label>
                            </div>
                        )}
                    </div>

                    {/* Rating Section */}
                    <div className="rating">
                        <button onClick={() => setIsDisplayRating(!isDisplayRating)} className="btn">
                            <span>Rating</span>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                        {!isDisplayRating && (
                            <div className="checkbox-list">
                                <label>
                                    <input type="checkbox" />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalfAlt} />
                                    4.5 & up
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalfAlt} />
                                    4.0 & up
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalfAlt} />
                                    <FontAwesomeIcon icon={faStarHalfAlt} />
                                    3.5 & up
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalfAlt} />
                                    3 & up
                                </label>
                            </div>
                        )}
                    </div>

                    {/* Instructors Section */}
                    <div className="instructors">
                        <button onClick={() => setIsDisplayInstructors(!isDisplayInstructors)} className="btn">
                            <span>Instructor</span>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                        {!isDisplayInstructors && (
                            <div className="checkbox-list">
                                <label><input type="checkbox" /> Kirubel Tesfaw</label>
                                <label><input type="checkbox" /> Yared Ekubay</label>
                                <label><input type="checkbox" /> Beakal Zelealem</label>
                            </div>
                        )}
                    </div>

                    {/* Price Section */}
                    <div className="price">
                        <button onClick={() => setIsDisplayPrice(!isDisplayPrice)} className="btn">
                            <span>Price</span>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                        {!isDisplayPrice && (
                            <div className="checkbox-list">
                                <label><input type="checkbox" /> Free</label>
                                <label><input type="checkbox" /> Paid</label>
                                <label><input type="checkbox" /> Subscription Only</label>
                            </div>
                        )}
                    </div>

                    <div className="show-results">
                        <button className="show-results-button">Show Results</button>
                        <a href="#" className="reset-link">Reset all</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="app-container right">
    <div className="featured-courses">
      <div className="featured-courses-header">
        <p>FEATURE COURSES</p>
        <a href="#" style={{ color: 'black' }}>Show all</a>
      </div>
      <div className="course-grid">

        <div className="course-container">
          <div className="course">
          <img  className="courseImage" src="/image/kolo.png" />
            <p className="course-category">Environmental Science</p>
            <p className="course-title">Race and Culture</p>
            <hr className="course-divider" />
            <div>
              <div className="course-duration">
                <FontAwesomeIcon icon={faClock} />&nbsp; 1 month
              </div>
              <p className="course-price">Free</p>
            </div>
          </div>
          <div className="overlay">
            <div className="overlay-content">
              <p className="overlay-instructor">Yared Ekubay</p>
              <a href="#" className="course-name">Environmental Science</a>
              <p className="overlay-description">
                Ce cours explorera le baseball à travers le prisme de la race, du environment et de la culture. Pour le meilleur et pour le pire, le baseball a été à l’avan
              </p>
              <div className="overlay-details">
                <div className="icon-spacer">
                  <FontAwesomeIcon icon={faList} />&nbsp;
                  <span className='maps'>11 Lectures</span>
                
              
                  <FontAwesomeIcon icon={faClock} />&nbsp;
                  <span>1 month</span>
                </div>
              </div>
              <div className="overlay-button">
                <button
                  className="review-button"
                  onClick={() => window.location.href = '/specific-course'}
                >
                  REVIEW THIS COURSE
                </button>
              </div>
              <div className="overlay-actions">
                <div className="icon-spacer">
                  <a href="#">
                    <FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} />
                  </a>
                  &nbsp;
                  <span className='wishlist'>Add to Wishlist</span>
                
                  <FontAwesomeIcon icon={faUnlock} />&nbsp;
                  <div className='payment'>Free</div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
        {/* Duplicate the course-container for additional courses */}


        {/*  */}
        <div className="course-container">
          <div className="course">
          <img  className="courseImage" src="/image/kolo.png" />
            <p className="course-category">Environmental Science</p>
            <p className="course-title">Race and Culture</p>
            <hr className="course-divider" />
            <div>
              <div className="course-duration">
                <FontAwesomeIcon icon={faClock} />&nbsp; 1 month
              </div>
              <p className="course-price">Free</p>
            </div>
          </div>
          <div className="overlay">
            <div className="overlay-content">
              <p className="overlay-instructor">Yared Ekubay</p>
              <a href="#" className="course-name">Environmental Science</a>
              <p className="overlay-description">
                Ce cours explorera le baseball à travers le prisme de la race, du environment et de la culture. Pour le meilleur et pour le pire, le baseball a été à l’avan
              </p>
              <div className="overlay-details">
                <div className="icon-spacer">
                  <FontAwesomeIcon icon={faList} />&nbsp;
                  <span className='maps'>11 Lectures</span>
                
              
                  <FontAwesomeIcon icon={faClock} />&nbsp;
                  <span>1 month</span>
                </div>
              </div>
              <div className="overlay-button">
                <button
                  className="review-button"
                  onClick={() => window.location.href = '/specific-course'}
                >
                  REVIEW THIS COURSE
                </button>
              </div>
              <div className="overlay-actions">
                <div className="icon-spacer">
                  <a href="#">
                    <FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} />
                  </a>
                  &nbsp;
                  <span className='wishlist'>Add to Wishlist</span>
                
                  <FontAwesomeIcon icon={faUnlock} />&nbsp;
                  <div className='payment'>Free</div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
        
        {/*  */}
        {/*  */}
        <div className="course-container">
          <div className="course">
          <img  className="courseImage" src="/image/kolo.png" />
            <p className="course-category">Environmental Science</p>
            <p className="course-title">Race and Culture</p>
            <hr className="course-divider" />
            <div>
              <div className="course-duration">
                <FontAwesomeIcon icon={faClock} />&nbsp; 1 month
              </div>
              <p className="course-price">Free</p>
            </div>
          </div>
          <div className="overlay">
            <div className="overlay-content">
              <p className="overlay-instructor">Yared Ekubay</p>
              <a href="#" className="course-name">Environmental Science</a>
              <p className="overlay-description">
                Ce cours explorera le baseball à travers le prisme de la race, du environment et de la culture. Pour le meilleur et pour le pire, le baseball a été à l’avan
              </p>
              <div className="overlay-details">
                <div className="icon-spacer">
                  <FontAwesomeIcon icon={faList} />&nbsp;
                  <span className='maps'>11 Lectures</span>
                
              
                  <FontAwesomeIcon icon={faClock} />&nbsp;
                  <span>1 month</span>
                </div>
              </div>
              <div className="overlay-button">
                <button
                  className="review-button"
                  onClick={() => window.location.href = '/specific-course'}
                >
                  REVIEW THIS COURSE
                </button>
              </div>
              <div className="overlay-actions">
                <div className="icon-spacer">
                  <a href="#">
                    <FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} />
                  </a>
                  &nbsp;
                  <span className='wishlist'>Add to Wishlist</span>
                
                  <FontAwesomeIcon icon={faUnlock} />&nbsp;
                  <div className='payment'>Free</div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
       {/*  */}
       <div className="course-container">
          <div className="course">
          <img  className="courseImage" src="/image/kolo.png" />
            <p className="course-category">Environmental Science</p>
            <p className="course-title">Race and Culture</p>
            <hr className="course-divider" />
            <div>
              <div className="course-duration">
                <FontAwesomeIcon icon={faClock} />&nbsp; 1 month
              </div>
              <p className="course-price">Free</p>
            </div>
          </div>
          <div className="overlay">
            <div className="overlay-content">
              <p className="overlay-instructor">Yared Ekubay</p>
              <a href="#" className="course-name">Environmental Science</a>
              <p className="overlay-description">
                Ce cours explorera le baseball à travers le prisme de la race, du environment et de la culture. Pour le meilleur et pour le pire, le baseball a été à l’avan
              </p>
              <div className="overlay-details">
                <div className="icon-spacer">
                  <FontAwesomeIcon icon={faList} />&nbsp;
                  <span className='maps'>11 Lectures</span>
                
              
                  <FontAwesomeIcon icon={faClock} />&nbsp;
                  <span>1 month</span>
                </div>
              </div>
              <div className="overlay-button">
                <button
                  className="review-button"
                  onClick={() => window.location.href = '/specific-course'}
                >
                  REVIEW THIS COURSE
                </button>
              </div>
              <div className="overlay-actions">
                <div className="icon-spacer">
                  <a href="#">
                    <FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} />
                  </a>
                  &nbsp;
                  <span className='wishlist'>Add to Wishlist</span>
                
                  <FontAwesomeIcon icon={faUnlock} />&nbsp;
                  <div className='payment'>Free</div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
       {/*  */}
       <div className="course-container">
          <div className="course">
          <img  className="courseImage" src="/image/kolo.png" />
            <p className="course-category">Environmental Science</p>
            <p className="course-title">Race and Culture</p>
            <hr className="course-divider" />
            <div>
              <div className="course-duration">
                <FontAwesomeIcon icon={faClock} />&nbsp; 1 month
              </div>
              <p className="course-price">Free</p>
            </div>
          </div>
          <div className="overlay">
            <div className="overlay-content">
              <p className="overlay-instructor">Yared Ekubay</p>
              <a href="#" className="course-name">Environmental Science</a>
              <p className="overlay-description">
                Ce cours explorera le baseball à travers le prisme de la race, du environment et de la culture. Pour le meilleur et pour le pire, le baseball a été à l’avan
              </p>
              <div className="overlay-details">
                <div className="icon-spacer">
                  <FontAwesomeIcon icon={faList} />&nbsp;
                  <span className='maps'>11 Lectures</span>
                
              
                  <FontAwesomeIcon icon={faClock} />&nbsp;
                  <span>1 month</span>
                </div>
              </div>
              <div className="overlay-button">
                <button
                  className="review-button"
                  onClick={() => window.location.href = '/specific-course'}
                >
                  REVIEW THIS COURSE
                </button>
              </div>
              <div className="overlay-actions">
                <div className="icon-spacer">
                  <a href="#">
                    <FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} />
                  </a>
                  &nbsp;
                  <span className='wishlist'>Add to Wishlist</span>
                
                  <FontAwesomeIcon icon={faUnlock} />&nbsp;
                  <div className='payment'>Free</div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
       {/*  */}
      </div>
      
      <div className="load-more-container">
        <button className="load-more-button">
          <span>LOAD MORE</span>
        </button>
      </div>
    </div>
   
    <div className="social-share">
      <button className="share-button facebook">
        <FontAwesomeIcon icon={faFacebook} />Share
      </button>
      <button className="share-button twitter">
        <FontAwesomeIcon icon={faTwitter} />Tweet
      </button>
      <button className="share-button pinterest">
        <FontAwesomeIcon icon={faPinterest} />Share
      </button>
      <button className="share-button linkedin">
        <FontAwesomeIcon icon={faLinkedin} />Share
      </button>
      <button className="share-button telegram">
        <FontAwesomeIcon icon={faTelegram} />Share
      </button>
    </div>  
  </div>
 
        </>
    );
}
