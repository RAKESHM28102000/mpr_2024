import { WorkerCard } from "../components";
import { reviews } from "../constants";

const Workers = () => {
  return (
    <section className='min-h-screen w-full flex flex-col justify-start items-center gap-3'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        Our Workers
        <span className='text-violet-600'> can do </span>
        All !
      </h3>
      <div className='mt-12 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review, index) => (
          <WorkerCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default Workers;
