import React from "react";
import { team } from "../../dummydata";

export const TeamCardHome = () => {
  // Limit the number of items to 6
  const limitedTeam = team.slice(0, 3);

  return (
    <div className="team-container">
      {limitedTeam.map((val, index) => (
        <div className={`items shadow ${index === 2 ? 'large-item' : ''}`} key={index}>
          <div className='img'>
            <img src={val.cover} alt='' />
            <div className='overlays'>
              <i className='fab fa-facebook-f icon'></i>
              <i className='fab fa-twitter icon'></i>
              <i className='fab fa-instagram icon'></i>
              <i className='fab fa-tiktok icon'></i>
            </div>
          </div>
          <div className='details'>
            <h2>{val.name}</h2>
            <p>{val.work}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TeamCardHome;
