import React from "react";
import {motion} from "framer-motion"
import CertificateCard from "./CerificateCard";
import { Wipro1, Iot,Cyber } from '../../assets';
const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4 ">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">online Certifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <CertificateCard
          src={Wipro1}
          title="Wipro talent next course on java Full Stack"
          />
           <CertificateCard 
          src={Iot}
          title="Introduction to Iot"
          />
           <CertificateCard
          src={Cyber}
          title="Introduction to Cybersecurity"
          />
         </div>
      </div>
    </motion.div>
  );
};

export default Experience;
