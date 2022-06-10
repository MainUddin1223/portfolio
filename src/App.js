import Aos from 'aos';
import { useEffect, useState } from 'react';
import { NavLink, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import About from './componants/Pages/About';
import Contact from './componants/Pages/Contact';
import Footer from './componants/Pages/Footer';
import Header from './componants/Pages/Header';
import Home from './componants/Pages/Home';
import Projects from './componants/Pages/Projects';
import Services from './componants/Pages/Services';
import Skills from './componants/Pages/Skills';
import Spinner from './componants/Pages/Spinner';
import AOS from "aos";
import "aos/dist/aos.css";
import Project1 from './componants/Pages/Project1';
import Project2 from './componants/Pages/Project2';
import Project3 from './componants/Pages/Project3';
import Project4 from './componants/Pages/Project4';
function App() {
  const [timer, setTimer] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setTimer(false)
    }, 500)
  }, [])
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return timer ? <Spinner></Spinner> : (

    <div className="bg-black ">
      <Header></Header>
      <div>


      </div>
      <Routes className="overflow-x-hidden">
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/projects/detail1' element={<Project1></Project1>}></Route>
        <Route path='/projects/detail2' element={<Project2></Project2>}></Route>
        <Route path='/projects/detail3' element={<Project3></Project3>}></Route>
        <Route path='/projects/detail4' element={<Project4></Project4>}></Route>

        <Route path='/skills' element={<Skills></Skills>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
