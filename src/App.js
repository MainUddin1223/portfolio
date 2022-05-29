import { useEffect, useState } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './componants/Pages/Footer';
import Header from './componants/Pages/Header';
import Home from './componants/Pages/Home';
import Spinner from './componants/Pages/Spinner';

function App() {
  const [timer, setTimer] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setTimer(false)
    }, 1500)
  }, [])
  return timer ? <Spinner></Spinner> : (

    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>


      <Footer></Footer>
    </div>
  );
}

export default App;
