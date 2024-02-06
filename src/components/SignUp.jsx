/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    // const [login,setLogin]=useState(false);
    const navigate=useNavigate();
    const [user,setUser]=useState({name:"",email:"",password:"",cpassword:""});

    function handleSubmit(e){
        console.log("user submitted")
        e.preventdefault;
        console.log(user)
        if(checkPassword(user.cpassword,user.password)){
            setUser({
                name:"",
                email:"",
                password:"",
                cpassword:"" 
            })
            navigate("/");

        }
        else{
            navigate("/signup")
        }    
    }
    function checkPassword(password,cpassword){
        if(password==cpassword){
            return true;
        }
        else{
            return false;
        }
    }
  return (<section className="flex w-full min-h-screen bg-cover bg-bg1">
    <div className='flex flex-col  justify-center items-center bg-cover bg-seven mx-auto shadow-2xl shadow-black hover:shadow-white m-4 rounded-md p-4'>
        <form className="w-[280px]  lg:w-[400px] min-h-[300px] flex flex-col gap-2 justify-start items-center">
            <input type="text"  className="w-[90%] text-violet-700 md:text-2xl max-md:text-lg mb-3 focus:ring-inset-white border-0 ring-2 ring-violet-500 rounded-xl p-2 mt-4" onChange={(e)=>{setUser(prev =>{return {...prev,[e.target.name]:e.target.value}})}} required name="name" value={user.name} placeholder="Name"/>
            <input type="email" className="w-[90%] text-violet-700 md:text-2xl max-md:text-lg mb-3 focus:ring-inset-white border-0 ring-2 ring-violet-500 rounded-xl p-2 mt-4" onChange={(e)=>{setUser(prev =>{return {...prev,[e.target.name]:e.target.value}})}} required name="email" value={user.email} placeholder="Email id"/>
            <input type="text"  className="w-[90%] text-violet-700 md:text-2xl max-md:text-lg mb-3 focus:ring-inset-white border-0 ring-2 ring-violet-500 rounded-xl p-2 mt-4" onChange={(e)=>{setUser(prev =>{return {...prev,[e.target.name]:e.target.value}})}} required name="password" value={user.password} placeholder="Password"/>
            <input type="text"  className="w-[90%] text-violet-700 md:text-2xl max-md:text-lg mb-3 focus:ring-inset-white border-0 ring-2 ring-violet-500 rounded-xl p-2 mt-4" onChange={(e)=>{setUser(prev =>{return {...prev,[e.target.name]:e.target.value}})}} required name="cpassword" value={user.cpassword} placeholder="Confirm Password"/>

            <button onClick={(e)=>handleSubmit(e)} type="button" className="w-[90%]  p-2 mx-2 text-black hover:text-white hover:bg-black bg-violet-800 font-semibold rounded-lg shadow-md text-lg hover:ring-violet-700 ring-2 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-75">SignUp</button>
        </form>   
 
    </div>
    </section>
  )
}

export default SignUp;