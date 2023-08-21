import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const CompanyExp = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022-present</p>
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="ContentQL technologies, Hyderabad"
            subTitle="React JS developer"
            result="06/2023-present"
            des="currently working as react js developer"
          />
          <ResumeCard
            title="Topnotch softsol PvtLtd, Hyderabad"
            subTitle="Intern"
            result="07/2022-10/2023"
            des="During internship worked on web development and developed web application on Parking Management system"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default CompanyExp;
