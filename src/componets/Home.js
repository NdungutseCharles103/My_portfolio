import React from 'react'

const Home = () => {
  return (
    <div className="home" id="homes">
      <div className="descript-view">
        <div className="descript-content">
          <h2 id="text">Hi. I'm Ndungutse Charles</h2>
          <p id="desc">
            Software developer, Web developer and Mobile app developer
          </p>
          <p id="desc1">
            at RCA. A person who is interested in learning new things
          </p>
        </div>
        <div className="decript-btn">
          <a href="Images/gettech.png" className="desc-btn" download="gettech">
            Download my CV<i className="fas fa-download"></i>
          </a>
        </div>
        <div className="social-links">
          <a href="https://github.com/NdungutseCharles103">
            <i id="social-icons" className="fab fa-github" target="_blank"></i>
          </a>
          <a href="https://www.facebook.com/ishimwe.ndungutsecharles/">
            <i
              id="social-icons"
              className="fab fa-facebook"
              target="_blank"
            ></i>
          </a>
          <a href="https://twitter.com/Ndungutse103">
            {" "}
            <i id="social-icons" className="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/ishimwe-ndungutse-charles-079418227/">
            <i
              id="social-icons"
              className="fab fa-linkedin"
              target="_blank"
            ></i>
          </a>
        </div>
      </div>
      <div className="home-photo">
        <div id="back">
          <div className="opa"></div>
        </div>
        <img id="me" src={require("../Images/charles.png")} alt="" />
      </div>
      <div className="curve"></div>
      <div className="curve2"></div>
      <div className="curve3"></div>
      <div className="curve2"></div>
    </div>
  );
}

export default Home