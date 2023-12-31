import React from 'react';
import { AiOutlineDeliveredProcedure } from 'react-icons/ai';
import {FiGithub} from  'react-icons/fi';
import {Link} from "@chakra-ui/react"
const ProjectsCard = ({ title, src, githubLink, websiteLink }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg border border-blue-400 flex flex-col group hover:border-blue-500 transition-colors duration-300">
      <div className="w-full h-[80%] overflow-hidden rounded-lg border border-blue-400 group-hover:border-blue-500">
        <Link href={websiteLink} target="_blank" rel="noopener noreferrer">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        /></Link>
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-sm uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              <span className="text-lg w-10 h-10 rounded-full border-[1px] inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  <FiGithub className='w-6 h-6 text-white-500'/>
                </a>
              </span>
              <span className="text-lg w-10 h-10 rounded-full border-[1px] inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <a href={websiteLink} target="_blank" rel="noopener noreferrer">
                  <AiOutlineDeliveredProcedure className='w-6 h-6'/>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
