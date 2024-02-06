import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { reviews } from "../constants";

const Coursel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
  return (<section className="hidden xl:block w-full bg-bg1 bg-cover min-h-screen  p-5">
    <div className='w-3/4 m-auto'>
      <div className="mt-20">
      <Slider {...settings}>
        {reviews.map((d) => (
          <div key={d.name} className="bg-white shadow-2xl shadow-white hover:shadow-purple-600 h-[450px] text-black rounded-xl">
            <div className='h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl'>
              <img src={d.imgURL} alt="" className="h-44 w-44 rounded-full"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <p className="text-xl font-semibold">{d.name}</p>
              <p className="text-center">{d.experience}</p>
              <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>{d.role}</button>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      
    </div>    
  </section>    
  )
}

export default Coursel;