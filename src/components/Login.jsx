/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
    // const [login,setLogin]=useState(false);
    const navigate=useNavigate();
    const [user,setUser]=useState({email:"",password:""});

    function handleSubmit(e){
        console.log("user submitted")
        e.preventdefault;
        console.log(user)
        setUser({
            email:"",
            password:"" 
        })
        navigate("/");
    }
  return (<section className="flex w-full min-h-screen bg-cover bg-bg1">
    <div className='flex flex-col  justify-center items-center bg-cover bg-six mx-auto shadow-2xl shadow-black hover:shadow-white m-4 rounded-md p-4'>
        <form className="w-[280px] lg:w-[400px] min-h-[300px] flex flex-col gap-2 justify-start items-center">
            {/* <input type="text"  className="w-full text-violet-700 text-2xl mb-3 focus:ring-inset-white border-0 ring-2 ring-violet-500 rounded-md p-2 mt-4" onChange={(e)=>{setUser(prev =>{return {...prev,[e.target.name]:e.target.value}})}} required name="name" value={user.name} placeholder="Name"/> */}
            <input type="email" className="w-[90%] mx-auto text-violet-700  max-md:text-lg md:text-2xl mb-3 focus:ring-inset-white border-0 ring-2 ring-violet-500 rounded-md p-2 mt-4" onChange={(e)=>{setUser(prev =>{return {...prev,[e.target.name]:e.target.value}})}} required name="email" value={user.email} placeholder="Email id"/>
            <input type="text"  className="w-[90%] mx-auto text-violet-700  max-md:text-lg md:text-2xl mb-3 focus:ring-inset-white border-0 ring-2 ring-violet-500 rounded-md p-2 mt-4" onChange={(e)=>{setUser(prev =>{return {...prev,[e.target.name]:e.target.value}})}} required name="password" value={user.password} placeholder="Password"/>
            <button onClick={(e)=>handleSubmit(e)} type="button" className="w-[90%] p-2 mx-auto text-black hover:text-white hover:bg-black bg-violet-800 font-semibold rounded-xl shadow-md text-lg hover:ring-violet-700 ring-2 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-75">Login</button>
        </form>   
        <button  type="button" className="w-[90%] p-2 mx-auto text-white bg-black hover:text-black hover:bg-white bg-black-800 font-semibold rounded-xl shadow-md text-lg hover:ring-violet-700 ring-2 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-75"><NavLink to="/signup">SignUp</NavLink></button>
 
    </div>
    </section>
  )
}

export default Login