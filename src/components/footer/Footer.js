import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub, SiGmail } from "react-icons/si";
import { logo } from "../../assets/index"

const Footer = () => {
  return (
    <div className="flex justify-center full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-4">
        <img className="w-32" src={logo} alt="logo" />
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Social
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
          <a href="https://github.com/jagadeesh507" target="_blank" rel="noopener noreferrer">
          <span className="bannerIcon">
              <SiGithub />
          </span>
            <span className="w-full pl-4 text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Github
            </span></a>
          </li>
          <li>
          <a href="mailto:jagadeeshm778@gmail.com">
          <span className="bannerIcon">
            <SiGmail />
          </span>
            <span className="w-full pl-4 text-lg relative hover:text-designColor duration-300 group cursor-pointer">
             Gmail
            </span></a>
          </li>
          <li>
          <a href="https://www.linkedin.com/in/jagadeesh-maripi-53364627a/" target="_blank" rel="noopener noreferrer">
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
            <span className="w-full pl-4 text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              linkedin
              </span></a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer