import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectSix, projectFive, projectFour} from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import {Accordion,AccordionIcon,AccordionButton,AccordionPanel,AccordionItem,Box,Center} from "@chakra-ui/react"
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
          title="ToDo "
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
      <Accordion allowToggle>
  <AccordionItem>
    <Center>
      <AccordionButton alignItems={"center"} alignContent={"center"}justifyContent={"center"} w={"50vw"} mt={"50px"} mb={"30px"} rounded={"50px"} bg="#2B6B73" p={"15px"}>
        <Box as='button'>
          View All projects
          <AccordionIcon fontSize={"10px"} />
        </Box>
      </AccordionButton ></Center>
    <AccordionPanel pb={4}>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
    <ProjectsCard
          title="Movie search engine"
          src={projectSix}
          githubLink="https://github.com/jagadeesh507/movieSearchEngin"
          websiteLink="https://movie-search-engin.vercel.app/"

        />
        <ProjectsCard
          title="qotation-generation"
          src={projectFour}
          githubLink="https://github.com/jagadeesh507/qotation-generation"
          websiteLink="https://qotation-generation.vercel.app/"
        />
        <ProjectsCard
          title="painting-app"
          src={projectFive}
          githubLink="https://github.com/jagadeesh507/painting-app"
          websiteLink="https://painting-app-nine.vercel.app/"
        />
      </div>
    </AccordionPanel>
  </AccordionItem>
</Accordion>

    </section>
  );
}

export default Projects