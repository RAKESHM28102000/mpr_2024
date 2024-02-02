import { navLink } from "../constants"

// eslint-disable-next-line react/prop-types
const Sidebar = ({sidebar,setSidebar}) => {
  return (
    <div className="md:w-[600px] w-[320px] lg:hidden min-h-[200vh] fixed top-0 right-0 bg-white text-emerald-400 text-2xl">
       <button onClick={()=>setSidebar(!sidebar)} className="fixed top-3 right-3 shadow-lg shadow-gray-800 p-2 mr-4 bg-white rounded-md  ring-2 ring-white  hover:ring-black">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-black stroke-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

 </button>
     <ul className="flex flex-col mt-8 items-center  px-3  gap-4 ">
     {navLink.map((item,index)=>{
         return <li onClick={()=>setSidebar(!sidebar)} className='hover:text-zinc-900 border-2 border-transparent font-thin  
hover:bg-white p-2  hover:border-white-400 rounded-lg' key={index}><a href={item.
href} >{item.label}</a></li>
     })}
 </ul>
    </div>
  )
}

export default Sidebar