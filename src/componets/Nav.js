import React from 'react'

const Nav = ({darkMode,imgsrc, ref1, ref2, ref3, ref4, ref5, mobile, menu}) => {
  return (
    <nav className="navbar">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
            <i onClick={menu} className="fas fa-bars"></i>
        </label>
        <ul className={`links ${mobile}`}>
            <li><a onClick={menu} className="navlinks underline" href="#homes" ref={ref1}>Welcome</a></li>
            <li><a onClick={menu} className="navlinks" href="#abilities" ref={ref2}>My Skills</a></li>
            <li><a onClick={menu} className="navlinks" href="#myworks" ref={ref3}>My Works</a></li>
            <li><a onClick={menu} className="navlinks" href="#certs" ref={ref4}>Other</a></li>
            <li><a onClick={menu} className="navlinks" href="#hireme" ref={ref5}>Hire me</a></li>
            <img onClick={darkMode} id="icon" src={imgsrc} alt=''/>
        </ul>
        <div className="logo"><a href="#homes"><img src={require("../Images/ch2-removebg-preview.png")} alt='' /></a><a
                href="#homes">&#160;&#160;N. Charles</a></div>
    </nav>
  )
}

export default Nav