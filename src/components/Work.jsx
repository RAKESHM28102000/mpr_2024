import { services } from "../constants"
import ServiceCard from "./ServiceCard"
import {  motion } from "framer-motion";
const textVariants = {
  initial: {
    y:150,
    opacity: 0,
  },
  animate: {
    y:0,
    opacity: 1,
    transition: {
      duration:.9,
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

const Work = () => {
  return (
    <section id="work" className='bg-bg3 bg-cover overflow-hidden bg-white  w-full min-h-screen text-white flex flex-col justify-start gap-3 items-center px-2 '>
    <h2 className="w-[90%] lg:w-[50%] ring-2 ring-[#ff2f82] hover:ring-white text-[#651c4c] hover:text-[#ffffff] bg-[#ffd3b3] hover:bg-[#ffbf91] max-xl:text-[20px] xl:text-4xl text-center font-bold m-4 p-4 rounded-md shadow-lg shadow-black hover:shadow-white">WHAT WE THINK</h2>
    <motion.div whileInView='animate' initial='initial' variants={textVariants} className="flex justify-center items-center flex-wrap gap-9">
    {services.map((service) => (
      <ServiceCard key={service.label} {...service} />
    ))}
    </motion.div>
  </section>
  )
}

export default Work