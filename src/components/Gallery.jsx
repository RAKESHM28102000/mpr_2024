// import { motion } from "framer-motion";
// const sliderVariants = {
    // initial: {
      // y:10,
      // opacity:0
    // },
    // animate: {
      // y:0,
      // transition: {
        // duration:1,
        // opacity:1
      // },
    // },
  // };

const Gallery = () => {
  return (
    <section id='testimonial'
    className="min-h-[70vh] flex flex-col justify-start gap-5 items-center overflow-hidden">
        <h2 className="text-[#163020] bg-[#EEF0E5] max-xl:text-[20px] xl:text-4xl text-center font-bold m-4 p-4 hover:text-[#365486] hover:bg-[#E0CCBE] rounded-md shadow-lg shadow-[#C7B7A3] uppercase ">Gallery</h2>
  <div className="flex flex-row justify-start items-center flex-nowrap gap-2 animate-righttoleftinfinite">
    <div className="w-[200px] h-[200px] overflow-hidden bg-work1 bg-cover"></div>
    <div className="w-[200px] h-[200px] overflow-hidden bg-work2 bg-cover"></div>
    <div className="w-[200px] h-[200px] overflow-hidden bg-work3 bg-cover"></div>
    <div className="w-[200px] h-[200px] overflow-hidden bg-work4 bg-cover"></div>
    <div className="w-[200px] h-[200px] overflow-hidden bg-work5 bg-cover"></div>
    <div className="w-[200px] h-[200px] overflow-hidden bg-work6 bg-cover"></div>
    <div className="w-[200px] h-[200px] overflow-hidden bg-work7 bg-cover"></div>
    <div className="w-[200px] h-[200px] overflow-hidden bg-work8 bg-cover"></div>
    <div className="w-[200px] h-[200px] overflow-hidden bg-work9 bg-cover"></div>
    <div className="w-[200px] h-[200px] overflow-hidden bg-work10 bg-cover"></div>
    <div className="w-[200px] h-[200px] overflow-hidden bg-work11 bg-cover"></div>
    <div className="w-[200px] h-[200px] overflow-hidden bg-work12 bg-cover"></div>
    <div className="w-[200px] h-[200px] overflow-hidden bg-work13 bg-cover"></div>
    <div className="w-[200px] h-[200px] overflow-hidden bg-work14 bg-cover"></div>
    <div className="w-[200px] h-[200px] overflow-hidden bg-work15 bg-cover"></div>
    <div className="w-[200px] h-[200px] overflow-hidden bg-work16 bg-cover"></div>
  </div>
  </section>
  )
}

export default Gallery