import React from 'react'
import { tools } from '../utils'

const Tools = () => {
  return (
    <div id="tools">
        <h2>Tools that I use in the work</h2>
        <div className="t-cardcont">
            {tools.map(tool =>(<div key={tools.indexOf(tool)} className="t-card">
                <img src={tool.image} alt="" />
            </div>))}
        </div>
    </div>
  )
}

export default Tools