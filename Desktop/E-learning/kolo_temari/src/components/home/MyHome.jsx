import React from "react";
import "./myHome.css";

export const MyHome = () => {
  return (
    <div className="home-container">
      <div className="headHome">
        <h1>BE BETTER <br />LEARN BETTER</h1>
      </div>
      <div className="headImage">
        <img src="/image/real.png" alt="Background" className="background-image" />
        <div className="triangle"></div>
      </div>

      <section className="home">
        <div className="container">
          <div className="row">
            <p></p>
            <div className="button-group">
              <button className="primary-btn">
                Enroll Now <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button className="secondary-btn">
                VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </div>
  );
};
