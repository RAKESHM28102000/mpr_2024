import './App.css'
import { About, Contact, Footer, Gallery, Home, Navbar, Work, Worker } from './components';



function App() {
  return (<div className='scroll-smooth mx-auto shadow-md bg-white w-full overflow-hidden shadow-white-400  min-h-screen'>
   <section className='px-2 lg:px-6'><Navbar/></section> 
   <section className='px-2 lg:px-6'><Home/></section> 
   <section className='px-2 lg:px-6'><About/></section>
   <section className='px-2 lg:px-6'><Work/></section> 
   <section className='px-2 lg:px-6'><Gallery/></section> 
   <section className='px-2 lg:px-6'><Worker/></section> 
   <section className='px-2 lg:px-6'><Contact/></section> 
   <section className='px-1'><Footer/></section> 
   
  </div>)
}

export default App;