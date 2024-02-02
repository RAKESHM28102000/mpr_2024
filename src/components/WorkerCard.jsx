
// eslint-disable-next-line react/prop-types
const WorkerCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className='bg-white shadow-lg rounded-md max-md:w-[240px] max-md:h-[400px] md:w-[300px] md:h-[400px] px-2 py-4 shadow-black flex justify-center items-center flex-col'>
      <img
        src={imgURL}
        alt='customer'
        className='rounded-md ring-4 ring-[#38419D] object-cover w-[120px] h-[120px]'
      />
      <p className='mt-6  text-[#200E3A] uppercase max-w-sm text-center info-text'>{feedback}</p>
      <p className='mt-3 text-[#200E3A] text-sm font-montserrat capitalize '>{rating}</p>
      <h3 className='mt-1 text-[#200E3A] uppercase font-palanquin text-2xl text-center font-bold'>
        {customerName}
      </h3>
    </div>
  );
};

export default WorkerCard;