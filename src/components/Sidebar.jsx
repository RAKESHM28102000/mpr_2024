import { NavLink } from "react-router-dom"
import { navLink } from "../constants"

// eslint-disable-next-line react/prop-types
const Sidebar = ({sidebar,setSidebar}) => {
  return (
    <div className="bg-gradient-to-r from-rose-500 to-blue-500 flex flex-col justify-start items-center sm:w-[500px] w-[320px] lg:hidden min-h-[200vh] fixed top-0 right-0 bg-white text-emerald-400 text-2xl">
      <div className="flex w-full justify-start pl-2 items-center mt-6 mb-6 pr-2">
       <button onClick={()=>setSidebar(!sidebar)} className="shadow-md shadow-gray-800 p-2 mr-4 bg-white rounded-md  ring-2 ring-white  hover:ring-black">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-black stroke-2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
       </button>
    </div> 
     <ul className="flex flex-col mt-8 items-center  px-3  gap-4 ">
     {navLink.map((item,index)=>{
         return <NavLink onClick={()=>setSidebar(!sidebar)}  key={index} className='hover:text-violet-600  font-bold bg-violet-300 p-2 ring-violet-600 ring-2 w-[250px] text-left text-white hover:bg-white  rounded-lg' to={item.href} ><li>{item.label}</li></NavLink>
     })}
     <NavLink onClick={()=>setSidebar(!sidebar)} className='hover:text-violet-600  font-bold bg-violet-300 p-2 ring-violet-600 ring-2 w-[250px] text-left text-white hover:bg-white  rounded-lg' to="/login" ><li>Login</li></NavLink>
 </ul>
    </div>
  )
}

export default Sidebar