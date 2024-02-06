// eslint-disable-next-line react/prop-types
const ServiceCard = ({ imgURL, label, subtext }) => {
    return (
      <div className='flex-1 mb-3 bg-white sm:w-[320px] md:min-w-[350px] xl:min-w-[360px] xl:min-h-[500px] md:min-h-1/2 w-full rounded-[20px] hover:shadow-emerald-400 ring-2 ring-transparent hover:ring-emerald-600 shadow-2xl shadow-black px-10 py-16'>
        <div className='w-[200px] h-[200px] overflow-hidden bg-black flex justify-center items-center mx-auto rounded-md'>
          <img src={imgURL} alt={label} width={"100%"} height={"100%"} className="overflow-hidden rounded-md" />
        </div>
        <h3 className='mt-5 text-[#561C24] uppercase font-palanquin text-3xl leading-normal font-bold'>
          {label}
        </h3>
        <p className='mt-3  text-[#6D2932]  break-words font-montserrat text-sm leading-normal'>
          {subtext}
        </p>
      </div>
    );
  };
  
  export default ServiceCard;
  