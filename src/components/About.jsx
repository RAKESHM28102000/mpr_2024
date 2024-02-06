import {  motion } from "framer-motion";
import { one } from "../assets/images";
const textVariants = {
  initial: {
    x:200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration:3,
      repeat: Infinity,
    },
  },
};
const textVariants1 = {
  initial: {
    x:-200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const About = () => {
  return(<section id="about" className="w-full min-h-screen px-2 mx-auto bg-bg3 bg-cover flex flex-col lg:flex-row lg:justify-between overflow-hidden font-mono">
       <motion.div variants={textVariants1} whileInView="animate" initial="initial" className="w-full lg:w-1/2 px-2 min-h-screen text-xl xl:text-3xl text-center font-bold flex flex-col justify-center gap-7 items-center "> 
         <motion.h1 variants={textVariants1} className="w-[90%] text-[#0F1035] xl:text-4xl p-4 hover:text-[#365486] bg-[#DCF2F1] rounded-md shadow-2xl shadow-black hover:shadow-white ring-2 ring-[#0F1035]">WHAT WE DO</motion.h1>
         <motion.img variants={textVariants1} className="w-[90%] h-[320px] hover:ring-yellow-400 m-2 relative rounded-md shadow-2xl shadow-black hover:shadow-white" src={one} alt="home-img"></motion.img>
         <motion.h2  variants={textVariants1} className="w-[90%] p-4  uppercase font-semibold bg-[#FFF2D8] text-[#113946] shadow-2xl shadow-black hover:shadow-white rounded-md  "><span className="font-bold text-4xl">25+</span> Years Experience</motion.h2>
       </motion.div>
         <motion.div variants={textVariants} whileInView="animate" initial="initial" className="text-xl xl:text-3xl text-center px-2 w-full min-h-screen text-white lg:w-1/2 lg:min-h-screen  flex flex-col justify-center gap-4 ">
             <motion.h1 variants={textVariants} className="text-[#DCF2F1] bg-[#0F1035] p-4  shadow-2xl shadow-black font-bold  mt-2 rounded-md ">We believe in Simple & Creative</motion.h1>
             <motion.p variants={textVariants} className="text-[#0F1035] bg-[#DCF2F1] p-4 text-left text-[22px] leading-8 shadow-2xl shadow-black font-semibold rounded-md mb-2">At MPR POWER TECH, we offer services in the field of power sector testing and commissioning equipped with requisite expertise and technology capabilities. With service ranging from high-end power and industrial equipments and solutions,we undertake contracts with single window responsibility and execute them using state-of-the-art testing equipments and dedicated talent pool with core engineering skills. Our team combined with deep technical skill,rationalize for the mutual success of our clients and employees.</motion.p>
             <motion.div variants={textVariants} className="text-[#d6fffd] bg-[#365486] p-4 font-semibold  shadow-2xl shadow-black  rounded-md ring-transparent ring-2  ring-inset  hover:ring-black  uppercase mb-3"><q className="font-bold ">More than 100+ Projects</q></motion.div>
         </motion.div> 
     </section>
  )
  }

export default About