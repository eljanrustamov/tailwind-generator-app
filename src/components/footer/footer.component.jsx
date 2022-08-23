import React from "react";
import "./footer.style.scss";

import { ReactComponent as HearthSvg } from "../../images/hearth.svg";
import { ReactComponent as GithubSvg } from "../../images/github.svg";

const Footer = () => {
  return (
    <div className="footer-container flex justify-center w-full text-slate-500">
      <div className="flex justify-center w-3/4">
          <p className="flex mr-5">
          © 2022 | Made with 
          <a className="underline underline-offset-4 decoration-1 mx-1 flex" href="https://github.com/eljanrustamov" target="_blank" rel="noreferrer">by Eljan <GithubSvg className="w-5 mx-1" /></a>
          </p>

          <p className="flex">
              Based on 
              <span className="mx-1 underline underline-offset-4 decoration-1">www.tailwindhelper.com</span>
          </p>
      </div>
    </div>
  );
};

export default Footer;


// <HearthSvg className="w-5 mx-1 text-pink-500" /> 