import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Full Stack Developer."],
      loop: true,
      typeSpeed: 50,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full w-full flex-col">
      <div className="flex flex-col gap-4 ">
        <h3 className=" text-lg font-normal flex justify-center">Hi, 🙋‍♂️  </h3>
        <h4 className="text-4xl font-bold text-white">
         <span className="xs:text-4xl text-designColor capitalize flex justify-center"> I'm Maripi jagadeesh</span>
        </h4>
        <h5 className="text-2xl font-bold text-blue-500 flex justify-center gap-2">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h5>
      </div>
      <div className='pt-8'>
     <Media /></div>
    </div>
  );
}

export default LeftBanner