import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';
const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2006 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Educational Qualification</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BTech in Computer Science and Engineering"
            subTitle="GMR Institute of Technology, Razam (2019-2023)"
            result="77.1%"
            des="completed my 4-year B.Tech CSE with a strong foundation, core subjects, specialization, internships, and a significant project"
          />
          <ResumeCard
            title="Higher Secondary Education"
            subTitle="Gayatri Junior College, Vizianagaram (2017 - 20219)"
            result="96.1%"
            des="Studied in this school from 11th to 12th std. HSC Subjects: PCM, English, Electrical Maintenance, Environment Education. "
          />
          <ResumeCard
            title="Primary & Secondary School Education"
            subTitle="ZPHS, Maradam (2016-2017)"
            result="80% "
            des="Studied in this school from Nursery to 10th std. SSC Subjects: English, Hindi, Maths, Science, Social Sciences."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education