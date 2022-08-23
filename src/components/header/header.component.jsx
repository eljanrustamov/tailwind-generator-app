import React from "react";
import "./header.style.scss";

import { ReactComponent as LogoSVG } from "../../images/logo.svg";
import { ReactComponent as MoonSVG } from "../../images/moon.svg";

const Header = () => {
  const clickHandler = (e) => {
    const elementClass = e.target.classList[1];
    if (elementClass === "btn-min") {
      // 1
      document.querySelector(".btn-min").classList.add("hidden");
      document.querySelector(".btn-plus").classList.remove("hidden");

      // 2
      document.querySelector(".logo-container").classList.add("logo-anim");

      //3
      document.querySelector(".header-text").classList.add("header-text-anim");

      // 4
      document.querySelector(".header").style.height = "10vw";
    } else {
      // 1
      document.querySelector(".btn-plus").classList.add("hidden");
      document.querySelector(".btn-min").classList.remove("hidden");

      // 2
      document.querySelector(".logo-container").classList.remove("logo-anim");

      //3
      document
        .querySelector(".header-text")
        .classList.remove("header-text-anim");

      //4
      document.querySelector(".header").style.height = "20vw";
    }
  };

  return (
    <div className="header flex flex-col items-center">
      <span className="btn-i btn-min" onClick={clickHandler}>
        ⊖
      </span>
      <span className="btn-i btn-plus hidden" onClick={clickHandler}>
        ⊕
      </span>
      <div className="logo-container flex items-center">
        <LogoSVG className="logo-svg" />
        <h1 className="logo-text  text-gray-700">Tailwindgenerator</h1>
      </div>

      <p className="header-text text-gray-600">
        You always forget property names? You want to convert a unit to the
        corresponding tailwind class? Or you are simply learning tailwind and
        would like a bit of help visualizing classes? Then this tool might come
        in handyǃ
      </p>
    </div>
  );
};

export default Header;
