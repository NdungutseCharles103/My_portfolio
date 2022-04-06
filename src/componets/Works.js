import React from 'react'
import { Does } from '../utils'

const Works = () => {
  return (
    <div className="works" id="myworks">
      <h1>My Works</h1>
      <div className="works-view">
        {Does.map((doe) => (
          <div key={Does.indexOf(doe)} className="work-container">
            <div className="work-preview">
              <img src={doe.image} alt="" />
            </div>
            <div className="work-descript">
              <h3>
                <a href={doe.link} target="_blank" rel="noreferrer">
                  {doe.title}
                </a>
              </h3>
              <p>{doe.description}</p>
              <div className="workbtn">
                <a
                  className="button"
                  href={doe.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {doe.status}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works