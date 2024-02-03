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
const About = () => {
  return(<section id="about" className=" bg-bg3 bg-cover flex flex-col lg:flex-row lg:justify-between overflow-hidden w-full min-h-screen mx-auto font-mono px-2">
       <motion.div  className=" px-4 w-full min-h-screen flex flex-col justify-center gap-7 items-center lg:w-1/2 relative"> 
      <h2 className="md:w-[80%] max-md:w-[300px] ring-2 ring-[#0F1035] text-[#0F1035] max-xl:text-[20px] xl:text-4xl text-center font-bold m-2 p-4 hover:text-[#365486] hover:bg-[#7FC7D9] rounded-md shadow-2xl shadow-black hover:shadow-white bg-[#DCF2F1]">WHAT WE DO</h2>
     <img className="md:w-[80%] max-md:w-[300px] hover:ring-yellow-400 relative rounded-md shadow-2xl shadow-black hover:shadow-white" src={one} alt="home-img" 
      width={"100%"} height={"350px"} />
     <h1 className="md:w-[80%] max-md:w-[300px] mb-3 relative text-center z-30 p-4 max-md:text-[24px] md:text-[40px] uppercase font-semibold bg-[#FFF2D8] text-[#113946] shadow-2xl shadow-black hover:shadow-white rounded-md  "><span className="font-bold text-[50px]">25+</span> Years Experience</h1>
   </motion.div>
         <motion.div variants={textVariants} whileInView="animate" initial="initial" className="max-lg:text-[22px]  lg:pl-6 px-2 w-full min-h-screen text-white lg:w-1/2 flex flex-col justify-center lg:min-h-screen gap-2  ">
           <motion.h1 variants={textVariants} className="text-[#DCF2F1] bg-[#0F1035] p-4 lg:text-[30px] text-center shadow-2xl shadow-black lg:text-left font-bold  mt-2 rounded-md ">We believe in Simple & Creative</motion.h1>
           <motion.p variants={textVariants} className="text-[#0F1035] bg-[#DCF2F1] p-4 lg:text-[25px]  max-lg:text-sm   shadow-2xl shadow-black font-semibold rounded-md mb-2">At MPR POWER TECH, we offer services in the field of power sector testing and commissioning equipped with requisite expertise and technology capabilities. With service ranging from high-end power and industrial equipments and solutions,we undertake contracts with single window responsibility and execute them using state-of-the-art testing equipments and dedicated talent pool with core engineering skills. Our team combined with deep technical skill,rationalize for the mutual success of our clients and employees.</motion.p>
        <motion.div variants={textVariants} className="text-[#d6fffd] bg-[#365486] p-4 lg:text-[30px] font-semibold  shadow-2xl shadow-black  rounded-md ring-transparent ring-2  ring-inset  hover:ring-black  uppercase mb-3"><h2><q>Work hard,have fun,make history.</q></h2></motion.div>
         </motion.div> 
     </section>
  )
  }

export default About