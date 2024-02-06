import './App.css'
import { About, Contact, Coursel, Footer, Gallery, Home, Login, Navbar, SignUp, Work, Worker } from './components';
import { BrowserRouter as Router,Routes, Route,} from 'react-router-dom';


function App() {
  return (<div className='scroll-smooth mx-auto shadow-md bg-black w-full overflow-hidden shadow-white-400  min-h-screen'>
 <Router>
  <div>
  <Navbar/>
  <main className='min-h-screen'>
    <Routes>
     <Route path="/" exact element={<Home/>} />
     <Route path="/about" element={<About/>} />
     <Route path="/work" element={<Work/>} />
     <Route path="/testimonial" element={<Gallery/>}/>
     <Route path="/team" element={<Worker/>} />
     <Route path="/contact" element={<Contact/>} />
     <Route path="/login" element={<Login/>} />
     <Route path="/signup" element={<SignUp/>} />
     <Route path="/coursel" element={<Coursel/>} />
     <Route path='*' element={<Home/>}/>
   </Routes>
   </main>
   <Footer/>
 </div>
 </Router> 
  </div>)
}

export default App;

{/* <section className='px-2 lg:px-6'><Navbar/></section> 
<section className='px-2 lg:px-6'><Home/></section> 
<section className='px-2 lg:px-6'><About/></section>
<section className='px-2 lg:px-6'><Work/></section> 
<section className='px-2 lg:px-6'><Gallery/></section> 
<section className='px-2 lg:px-6'><Worker/></section> 
<section className='px-2 lg:px-6'><Contact/></section> 
<section className='px-1'><Footer/></section>  */}
