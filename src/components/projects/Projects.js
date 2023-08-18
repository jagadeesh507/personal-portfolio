import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Simple ToDo using React and Starpi"
          src={projectOne}
          githubLink="https://github.com/jagadeesh507/strapitodo"
          websiteLink="https://strapi-todo.vercel.app/"

        />
        <ProjectsCard
          title="Weather App"
      
          src={projectTwo}
          githubLink="https://github.com/jagadeesh507/weather-app"
          websiteLink="https://weather-app-orpin-rho.vercel.app/"
        />
        <ProjectsCard
          title="ToDo using Chakra Ui"
          src={projectThree}
          githubLink="https://github.com/jagadeesh507/Todo_Chakra"
          websiteLink="https://todo-chakra-neon.vercel.app/"
        />
      </div>
    </section>
  );
}

export default Projects