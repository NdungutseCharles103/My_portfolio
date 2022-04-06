/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import Nav from "./componets/Nav";
import Skills from "./componets/Skills";
import Tools from "./componets/Tools";
import Hireme from "./componets/Hireme";
import Works from "./componets/Works";
import Home from "./componets/Home";
import Certs from "./componets/Certs";
import "./index.css";
import moon from "./Images/moon.png";
import sun from "./Images/sun.png";

const App = () => {
  const [dark, setdark] = useState(false);
  const [mobile, setMobile] = useState(false)
  const [line, setLine] = useState();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  const darkMode = () => {
    setdark(!dark);
  };
  const mobileMenu = () => {
      setMobile(!mobile)
  }

  const mobileClass = mobile? 'links-active': ''
  const className = dark ? "dark-theme" : "ligth-theme";

  const imgsrc = dark ? sun : moon;
  window.onscroll = (e) => console.log(window.scrollY);
  const lineHandler = () => {
    let a= ref1.current, b= ref2.current,c = ref3.current,
            d =ref4.current, e = ref5.current;
    let h = window.scrollY;
    let w = window.innerWidth;
    if (w > 960 && h < 730) {
        a.classList.add('underline')
        b.classList.remove('underline')
    }
    else if(w> 960 && h<1840){
        b.classList.add("underline");
        a.classList.remove("underline");
        c.classList.remove("underline");
    }
    else if(w> 960 && h<2670){
        c.classList.add("underline");
        b.classList.remove("underline");
        d.classList.remove("underline");
    }
    else if(w>960 && h<2800){
        d.classList.add("underline");
        c.classList.remove("underline");
        e.classList.remove("underline");
    }
    else if(w>960 && h<=3398){
        e.classList.add("underline");
        d.classList.remove("underline");
    }
    else if(w<960){
        a.classList.remove("underline");b.classList.remove("underline");c.classList.remove("underline");
        d.classList.remove("underline");e.classList.remove("underline");
    }
  };
  window.addEventListener("scroll", lineHandler);
  return (
    <div className={`body ${className}`}>
      <Nav
        dark={dark}
        ref1={ref1}
        ref2={ref2}
        ref3={ref3} menu = {mobileMenu}
        ref4={ref4}
        ref5={ref5} mobile={mobileClass}
        setdark={setdark}
        darkMode={darkMode}
        imgsrc={imgsrc}
      />
      <Home dark={dark} />
      <Skills dark={dark} />
      <Works dark={dark} />
      <Tools dark={dark} />
      <Certs dark={dark} />
      <Hireme dark={dark} />
    </div>
  );
};

export default App;
