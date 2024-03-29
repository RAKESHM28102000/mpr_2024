import { useState } from "react"
import { navLink } from "../constants"
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [sidebar,setSidebar]=useState(false);
  return (
    <header  className="xl:text-lg w-full py-4 min-h-[70px] backdrop-blur-xl bg-gradient-to-r from-indigo-600 to-pink-500 text-zinc-100  font-semibold drop-shadow-lg shadow-sm shadow-gray-800 relative z-50">
        <nav className="flex justify-between items-center w-[99%] h-full mx-auto  ">
            <h1 className=" p-4 rounded-2xl shadow-lg bg-black shadow-gray-800 font-bold">MPR POWER TECH</h1>
            <ul className="lg:flex justify-between items-center hidden  shadow-lg shadow-gray-800 bg-black py-1 px-2 border-2 rounded-2xl border-violet-950  gap-4 ">
                {navLink.map((item,index)=>{
                    return <NavLink to={item.href} key={index}><li className='hover:text-zinc-900 border-2 border-transparent font-thin  hover:bg-white px-4 py-2  hover:border-white-400 rounded-2xl'>{item.label}</li></NavLink>
                })}
            </ul>
            <div className="">
            <button className="hidden xl:block ring-2  shadow-lg shadow-gray-800 ring-slate-900 p-3 w-32 rounded-md bg-black transition-all duration-100 hover:bg-white hover:text-black hover:ring-black"><NavLink to="/login">Login</NavLink></button>
            </div>
             <div className="max-lg:flex justify-start items-center gap-2  hidden">
             <button onClick={()=>setSidebar(!sidebar)} className="mr-1 p-2 shadow-lg shadow-gray-800  bg-white rounded-md  ring-2 ring-white  hover:ring-black"> 
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"  className="w-6 fill-black stroke-2 stroke-black h-6 "><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" /></svg>
            </button>
             </div>
        </nav>
        <>
            {
                sidebar && <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>
            }
        </>
    </header>

  )
}

export default Navbar