import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2006 - Present</p>
          <h2 className="text-4xl font-bold">Accomplishments</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="EAMCET RANKER"
            subTitle="Entrance Exam for Engineering colleges in Andhra Pradesh (2019)"
            result="13000"
            des="Bagged a whooping 13000 Rank out of 3 Lakh students that registered for the exam. Got a 62 marks."
          />
          <ResumeCard
            title="Intermediate Merit Holder"
            subTitle="Intermediate Exam conducted by Government of Andhra Pradesh (2019)"
            result="96.1%"
            des="Bagged a whooping 96.1% in Intermediate exam."
          />
          <ResumeCard
            title="Scholarship Holder"
            subTitle="National Scholarship Portal (NSP) (2019)"
            des="Passed with good marks in the exam and  received scholarship money."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
