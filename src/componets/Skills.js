import React from 'react'
import { Abilities } from "../utils";

const Skills = () => {
  return (
    <div className="myskills" id="abilities">
      <h1>My Skills</h1>
      <div className="skill-view">
        {Abilities.map((Able) => (
          <div key={Abilities.indexOf(Able)} className="skills-container">
            <div className="skill-area">
              <div className="image">
                {" "}
                <img id="frontend" src={Able.image} alt="" />
              </div>
              <div className="skill-descript">
                <h2 className="w-head">{Able.title}</h2>
                <p>{Able.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills