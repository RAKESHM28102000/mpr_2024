import { img2} from "../assets/images"
import {  motion } from "framer-motion"
import About from "./About";
import Work from "./Work";
import Gallery from "./Gallery";
import Workers from "./Worker";
import Contact from "./Contact";
import Coursel from "./Coursel";
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
  return (<>
    <section id="home" className="w-full min-h-screen px-2 flex flex-col lg:flex-row lg:justify-between bg-bg1 bg-cover overflow-hidden font-mono mx-auto ">
        <motion.div variants={textVariants} whileInView="animate" initial="initial" className="text-xl lg:text-3xl  text-center w-full lg:w-3/5 min-h-screen px-4 text-white  flex flex-col justify-center gap-5">
          <motion.h1 variants={textVariants} className=" text-[#F0ECE5] bg-[#161A30] lg:text-4xl p-4 font-bold  rounded-md shadow-lg shadow-black hover:shadow-white ">MPR POWER TECH </motion.h1>
          <motion.h1 variants={textVariants} className="bg-[#31304D]  font-semibold rounded-md p-4 shadow-lg shadow-black  hover:shadow-white">No resistance can drop our potential.</motion.h1>
          <motion.div variants={textVariants} className="text-[#161A30] bg-[#B6BBC4] font-semibold p-4 shadow-2xl shadow-black  hover:shadow-white rounded-md"><p>People always fear change. People feared electricity when it was invented, didn’t they?<br/>-Nikola Tesla</p></motion.div>
        </motion.div>
        <motion.div  className="text-xl lg:text-3xl px-4 w-full lg:w-2/5 min-h-screen flex flex-col justify-center items-center gap-5 relative">
              {/* <img className="-z-100 absolute top-[100px] right-[100px] rounded-xl  size-3/5 shadow-lg shadow-black" src={img1} alt="home-img" /> */}
              <img className="rounded-full shadow-2xl shadow-black hover:shadow-white animate-bounce " src={img2} alt="home-img" width={"300px"} height={"350px"} />
              <h1 className="relative p-4 uppercase font-semibold bg-[#DAFFFB] text-[#04364A] shadow-2xl shadow-black  hover:shadow-white rounded-md">MEP CONSULTANT AND CONTRACTOR</h1>
       </motion.div>
       </section>
       <About/>
       <Work/>
       <Gallery/>
       <Workers/>
       <Contact/>
       <Coursel/>
       </>
  
  )
}

export default Home