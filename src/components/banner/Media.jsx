import React from "react";
import {  FaReact, FaNodeJs, FaJava,FaDocker } from "react-icons/fa";
import {
  SiChakraui,
  SiCss3,
  SiStrapi
} from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandJavascript,TbBrandNextjs } from "react-icons/tb";
import { BiLogoCPlusPlus,BiLogoFirebase } from "react-icons/bi";
const Media = () => {
  return (
    <div>
        <h1 className="pb-4 text-bold font-bold text-3xl text-white-500 flex justify-center mt-500px">SKILLS</h1>
      <div className="flex flex-row xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">Stack</h2>
          <div className="flex gap-4 grid sm:grid-cols-3 sml:grid-cols-4 md:grid-cols-6 lgl:grid-cols-10 gap-8">
            <span className="bannerIcon">
              <AiOutlineHtml5 className="w-12 h-12 text-orange-500"/>
            </span>
            <span className="bannerIcon">
              <SiCss3 className="w-12 h-12 text-blue-500" />
            </span>
            <span className="bannerIcon">
              <TbBrandJavascript className="w-12 h-12 text-yellow-400"/>
            </span>
            <span className="bannerIcon">
              <SiChakraui className="w-12 h-12 text-green-900"/>
            </span>
            <span className="bannerIcon">
              <FaReact className="w-12 h-12 text-blue-400"/>
            </span>
            <span className="bannerIcon">
              <FaNodeJs className="w-12 h-12 text-green-300"/>
            </span>
            <span className="bannerIcon">
              <TbBrandNextjs className="w-12 h-12 text-white-600"/>
            </span>
            <span className="bannerIcon">
              <SiStrapi className="w-12 h-12 text-blue-900"/>
            </span>
            <span className="bannerIcon">
              <FaDocker className="w-12 h-12 text-blue-600"/>
            </span>
            <span className="bannerIcon">
              <BiLogoFirebase className="w-12 h-12 text-orange-500"/>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between pt-4">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 pt-5 pb-5 ">Languages</h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <BiLogoCPlusPlus className="w-12 h-12 text-#FFFFFF-800"/>
            </span>
            <span className="bannerIcon">
              <FaJava className="w-12 h-12" />
            </span>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Media;
