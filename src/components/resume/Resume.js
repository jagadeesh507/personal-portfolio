import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Achievement from "./Achievement";
import Experience from "./Experience";
import Resumedoc from "./Resumedoc";
import CompanyExp from "./CompanyExp";
const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);
  const [exp, setExp] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li
            onClick={() =>
              setEducationData(true) &
              setExperienceData(false) &
              setAchievementData(false) &
              setExp(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setExperienceData(true) &
              setAchievementData(false) &
              setExp(false)
            }
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Certifications
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setExperienceData(false) &
              setAchievementData(true) &
              setExp(false)
            }
            className={`${
              achievementData
                ? "border-designColor rounded-lg background-red"
                : "border-transparent"
            } resumeLi`}
          >
            Achievements
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setExperienceData(false) &
              setAchievementData(false) &
              setExp(true)
            }
            className={`${
              exp ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Experience
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {achievementData && <Achievement />}
      {experienceData && <Experience />}
      {exp && <CompanyExp />}
      <Resumedoc />
    </section>
  );
};

export default Resume;
