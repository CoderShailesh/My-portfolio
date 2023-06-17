import React, { useRef } from "react";
import {motion, useScroll } from "framer-motion"
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
      
      <LiIcon reference={ref}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

<motion.div
style={{scaleY: scrollYProgress}}
  className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top 
  md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-primaryDark dark:shadow-3xl
  "  />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
        <Details
              position="volunteer"
              company="Python Nepal "
              companyLink="https://pythonnepal.org/"
              time="Summer 2023"
              address="Tribhuvan University, Kathmandu"
              work="Volunteer in the Python user group Nepal and help manage programs with the Python specialized team. Discuss, share, and learn about Python use cases in the AI, deep learning, and machine learning fields."
            />

            <Details
              position="Data Expedition"
              company="OKNP"
              companyLink="https://oknp.org/"
              time="Summer 2021"
              address="Hotel Avenue, Butwal"
              work="Explore, suggest and view datasets with existing features like organizations, groups, tags, formats, licenses and categories. Use data APIs for efficiency, integration and automation of your web applications and services."
            />

            <Details
              position="Intern"
              company="WorldLink"
              companyLink="https://worldlink.com.np/"
              time="Winter 2020"
              address="Worldlink Office, Butwal"
              work="Worked on a team responsible for providing Tech Support to clients regarding Internet connection issue and IPTV. Perform troubleshooting and solve the client issue via phone call or field visit."
            />

            <Details
              position="CCNA Bootcamp"
              company="Networking NP"
              companyLink="https://www.facebook.com/networkingnepal/"
              time="Winter 2019"
              address="Kalika Manavgyan, BTL."
              work="Gain good insights about CISCO routers and switches and have sufficient knowledge to use CISCO devices to install, configure and manage networks within an organization."
            />

            <Details
              position="IT Assistant"
              company="GTC Nepal"
              companyLink="https://gtcnepal.com/"
              time="Summer 2019"
              address="Geo Testing & Construction, Butwal"
              work="Assisted in managing laboratory tests for Construction material and Soil testing report and provided support in technical areas. Perform some Material Testing and Quality Control services."
            />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
