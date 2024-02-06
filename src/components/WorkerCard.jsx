
// eslint-disable-next-line react/prop-types
const WorkerCard = ({ imgURL, customerName, rating, feedback,link }) => {
  return (
    <div className='min-w-[300px] min-h-[380px] bg-gradient-to-r from-yellow-200 to-orange-400 ring-2 ring-transparent hover:ring-emerald-600 shadow-2xl hover:shadow-emerald-400 rounded-md px-2 py-2 shadow-black flex justify-center items-center flex-col'>
      <img
        src={imgURL}
        alt='customer'
        className='rounded-md ring-4 ring-transparent hover:ring-[#200E3A] object-cover w-[120px] h-[120px]'
      />
      <p  className='mt-6 min-w-[240px] text-white hover:bg-white hover:text-[#200E3A] hover:ring-transparent bg-[#200E3A] ring-2 ring-[#200E3A] p-2 rounded-md uppercase max-w-sm text-center info-text'>{feedback}</p>
      <p  className='mt-3 min-w-[240px] text-white hover:bg-white hover:text-[#200E3A] hover:ring-transparent bg-[#200E3A] ring-2 ring-[#200E3A] p-2 rounded-md capitalize  text-sm text-center font-montserrat '>{rating}</p>
      <h3 className='mt-2 min-w-[240px] text-white hover:bg-white hover:text-[#200E3A] hover:ring-transparent bg-[#200E3A] ring-2 ring-[#200E3A] p-2 rounded-md uppercase font-palanquin text-2xl text-center font-bold'>
      <a href={link} target="blank">{customerName}</a>
      </h3>
    </div>
  );
};

export default WorkerCard;