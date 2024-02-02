
// eslint-disable-next-line react/prop-types
const WorkerCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className='max-md:w-[300px] md:w-[310px] bg-white ring-2 ring-transparent hover:ring-white shadow-lg hover:shadow-white rounded-md max-md:h-[400px]  md:h-[402px] px-2 py-4 shadow-black flex justify-center items-center flex-col'>
      <img
        src={imgURL}
        alt='customer'
        className='rounded-md ring-4 ring-[#38419D] object-cover w-[120px] h-[120px]'
      />
      <p className='mt-6  text-[#200E3A] hover:ring-transparent hover:bg-[#200E3A] ring-2 ring-[#200E3A] p-2 rounded-md uppercase max-w-sm text-center info-text'>{feedback}</p>
      <p className='mt-3 text-[#200E3A] hover:ring-transparent hover:bg-[#200E3A] ring-2 ring-[#200E3A] p-2 rounded-md text-sm font-montserrat capitalize '>{rating}</p>
      <h3 className='text-[#200E3A] hover:text-white mt-2 hover:ring-transparent hover:bg-[#200E3A] ring-2 ring-[#200E3A] p-2 rounded-md uppercase font-palanquin text-2xl text-center font-bold'>
        {customerName}
      </h3>
    </div>
  );
};

export default WorkerCard;