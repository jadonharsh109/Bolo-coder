import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';

import Home from './pages/Home';
import Ask from './pages/Ask';
import Answer from './pages/Answer';
import FAQ from './pages/FAQ';
import Login from './pages/Login';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import { useState, useEffect } from'react';
import RingLoader from'react-spinners/RingLoader';
const App =()=>{
  const [loading, setLoading] = useState(true)
useEffect(()=>{
  setLoading(true)
  setTimeout(()=>{
    setLoading(false)
  }, 8000)
},[])
  return (
    loading ?     <div className='loading'>
<RingLoader
    color="#fff"
    size={100}
    className="loading"
  />

    </div>  : <BrowserRouter>
  <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ask" element={<Ask />} />
          <Route path="/answer" element={<Answer />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
  </BrowserRouter>
  
  

  );
}

export default App;
