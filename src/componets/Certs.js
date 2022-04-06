import React from 'react'

const Certs = () => {
  return (
    <div className="certificate" id='certs'>
      <h3>My Certificates</h3>
      <div className="c-card">
        <div className="cert-container">
          <div className="cert-card">
              <img src={require("../Images/Screenshot.png")} alt='' />
            <a href={require("../Images/Screenshot.png")} target="_blank" rel="noreferrer" className="cert-btn">
              View full-sized
            </a>
          </div>
        </div>
        <div className="cert-container">
          <div className="cert-card">
              <img src={require("../Images/Screenshot1.png")} alt='' />
            <a href={require("../Images/Screenshot1.png")} target="_blank" rel="noreferrer" className="cert-btn">
              View full-sized
            </a>
          </div>
        </div>
        <div className="cert-container">
          <div className="cert-card">
            <img src={require("../Images/Screenshot.png")} alt='' />
            <a href={require("../Images/Screenshot.png")} target="_blank" rel="noreferrer" className="cert-btn">
              View full-sized
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certs