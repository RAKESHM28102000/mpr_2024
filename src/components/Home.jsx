import { img2} from "../assets/images"
import {  motion } from "framer-motion"
const textVariants = {
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
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration:3,
      repeat: Infinity,
      repeatType:"mirror",
    },
  },
};
const Home = () => {
  return (
    <section id="home" className=" bg-white overflow-hidden   w-full font-mono mx-auto  flex flex-col lg:flex-row lg:justify-between  min-h-screen px-2">
        <motion.div variants={textVariants} whileInView="animate" initial="initial" className=" lg:pl-6 px-2 w-full min-h-screen text-white lg:w-3/5 flex flex-col justify-center lg:min-h-screen gap-2 max-md:text-[24px] md:text-[30px] lg:text-[60px] ">
          <motion.h1 variants={textVariants} className=" text-[#F0ECE5] p-4 text-center lg:text-left font-bold bg-[#161A30]  rounded-md max-sm:mt-20 sm:mt-14 lg:mt-2 shadow-lg shadow-black hover:shadow-white">MPR POWER TECH </motion.h1>
          <motion.h1 variants={textVariants} className="bg-[#31304D]     lg:text-[30px] p-4  shadow-lg shadow-black  hover:shadow-white font-semibold rounded-md mb-2">No resistance can drop our potential.</motion.h1>
          <motion.div variants={textVariants} className="text-[#161A30] bg-[#B6BBC4] lg:text-[24px] p-4 font-semibold shadow-2xl shadow-black  hover:shadow-white rounded-md ring-transparent ring-2 ring-inset  hover:ring-black"><p>People always fear change. People feared electricity when it was invented, didn’t they?<br/>-Nikola Tesla</p></motion.div>
        </motion.div>
        <motion.div  className=" px-4 w-full min-h-screen flex flex-col justify-center gap-6 items-center lg:w-2/5 relative">
              {/* <img className="-z-100 absolute top-[100px] right-[100px] rounded-xl  size-3/5 shadow-lg shadow-black" src={img1} alt="home-img" /> */}
              <img className="rounded-full  shadow-2xl shadow-black  hover:shadow-white xl:animate-bounce " src={img2} alt="home-img" width={"300px"} height={"350px"} />
              <h1 className="relative p-4 max-md:text-[24px] md:text-[26px] uppercase font-semibold bg-[#EEEDED] text-[#0D1282] shadow-2xl shadow-black  hover:shadow-white rounded-md">MEP CONSULTANT AND CONTRACTOR.</h1>
       </motion.div>

    </section>
  )
}

export default Home