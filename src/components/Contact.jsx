import { useState } from 'react'

// import { client } from '../../client';
import emailjs from "@emailjs/browser";
import { useRef } from 'react';
import {  shock } from '../assets/images';
// import { img1, img2 } from '../assets/images';

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const [form,setForm]=useState({
    name:"",
    email:"",
    message:""
  });

  function setform(e){
   const{name,value} =e.target;
   setForm(function(prev){
    return {...prev,[name]:value}
  });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_et4dha3",
        "template_6r2c7a9",
        ref.current,
        "IOVfu7FGo-01DVraz"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setForm({
            name:"",
            email:"",
            message:""

          });
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <section id='contact' className='bg-seven bg-cover min-h-screen w-full flex flex-col justify-start gap-6 items-center overflow-hidden'>
      <h2 className="w-[90%] md:w-[400px] ring-[#163020] text-[#163020] hover:text-[#000000] hover:bg-[#8dffb9] ring-2  bg-[#c0ffee] max-xl:text-[20px] xl:text-2xl text-center font-bold m-4 p-4  rounded-md shadow-lg shadow-[#2D9596] uppercase">Contact</h2>
      <div className='flex p-4 flex-col justify-center items-center gap-4 lg:w-1/2 w-full h-full  rounded-md'>
      <div className="bg-white w-[300px] lg:w-[400px] shadow-lg shadow-black hover:shadow-[#2D9596] flex flex-col p-4 rounded-md gap-3 ">
        <div className="flex hover:bg-[#2D9596] hover:text-[#11293c] hover:ring-[#11293c]  justify-start items-center gap-2 p-2 rounded-md  ring-2 ring-[#2D9596]  ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 fill-white stroke-yellow-500 stroke-2">
         <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>

          <a href="mailto:mprpowertech@gmail.com" className="p-1 ">mprpowertech@gmail.com</a>
        </div>
        <div className="flex hover:bg-[#2D9596] hover:text-[#0c2438] hover:ring-[#11293c] justify-start items-center gap-2 p-2 rounded-md  ring-2 ring-[#2D9596]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 fill-white stroke-yellow-500 stroke-2"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
          <a href="tel:+91 9994202384" className="p-1 ">+91 9994202384</a>
        </div>
      </div>
      {success ?  (
        <div className=' bg-[#fff5b6] shadow-2xl shadow-black  m-4 w:[80%] mx-1  rounded-md flex flex-col justify-start items-center gap-2'>
          <h3 className="text-[#0b0b0b] text-center max-md:text-2xl text-4xl p-2 rounded-lg">
          {success && "Thank you for electric shock connection"}</h3>
          <img className="m-1" src={shock} alt='shock' width={"250px"} height={"300px"}/>
        </div>
      ):(
        <div className="flex bg-white w-[300px] min-h-[300px] mb-3 lg:w-[400px] mx-auto p-4 justify-center items-center shadow-2xl shadow-black  hover:shadow-[#2D9596] text-[#265073]  rounded-md  ">
        <form ref={ref} onSubmit={handleSubmit}  className="flex flex-col justify-start items-center gap-4 mx-auto w-full m">
            <input className="text-[#9AD0C2] block w-full rounded-md border-0 py-1.5 pl-7 pr-20 ring-2 ring-[#265073]  placeholder:text-[#2D9596]  focus:ring-[#265073] sm:text-sm sm:leading-6" type="text" placeholder="Your Name" name="name" value={form.name} onChange={setform} />
            <input className="text-[#9AD0C2] block w-full rounded-md border-0 py-1.5 pl-7 pr-20 ring-2 ring-[#265073]  placeholder:text-[#2D9596]  focus:ring-[#265073]  sm:text-sm sm:leading-6" type="email" placeholder="Your Email" name="email" value={form.email} onChange={setform} />
            <textarea
                   className="text-[#9AD0C2] block w-full rounded-md border-0 py-1.5 pl-7 pr-20 ring-2 ring-[#265073] placeholder:text-[#2D9596]   focus:ring-[#265073]  sm:text-sm sm:leading-6"
              placeholder="Your Message"
              value={form.message}
              name="message"
              onChange={setform}
            />
          <button type="button" className="max-lg:w-[280px] lg:w-[380px] p-2 mx-2 text-black bg-[#88ffdf] font-semibold rounded-lg shadow-md  hover:shadow-[#2D9596] hover:bg-white hover:ring-black ring-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" onClick={handleSubmit}>{!success ? 'Send Message' : 'Sending...'}</button>
          </form>
        </div>
      ) }
      </div>
    </section>
  );
};

export default Contact;