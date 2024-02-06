import { WorkerCard } from "../components";
import { reviews } from "../constants";

const Workers = () => {
  return (
    <section className='bg-black min-h-screen w-full flex flex-col justify-start items-center gap-3'>
      <h1 className='bg-gradient-to-r from-yellow-200 to-orange-400 max-md:w-[300px] md:w-1/2 hover:shadow-white shadow-2xl shadow-black rounded-md mt-2 p-2 font-palanquin text-white text-center text-2xl md:text-4xl font-bold'>
        WHO
        <span className='text-[#200E3A]'> WE </span>
        ARE
      </h1>
      <div className='mt-2 mb-3 flex flex-1 justify-evenly items-center flex-wrap max-lg:flex-col gap-5'>
        {reviews.map((review, index) => (
          <WorkerCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.name}
            rating={review.role}
            feedback={review.experience}
            link={review.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Workers;
