import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Nav from './pages/Nav';
import Home from './pages/Home';
import Ask from './pages/Ask';
import Answer from './pages/Answer';
import FAQ from './pages/FAQ';
import Login from './pages/Login';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import { useState, useEffect } from 'react';
import RingLoader from 'react-spinners/RingLoader';
import Signup from './pages/Signup';
const App = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })

    }

    window.addEventListener('resize', handleResize)

    return _ => {
      window.removeEventListener('resize', handleResize)

    }
  })

  return (
    loading ? <div className='loading'>
      <RingLoader
        color="#fff"
        size={100}
        className="loading"
      />

    </div> : <BrowserRouter>

      {dimensions.width <= 786 ? <Nav /> : <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ask" element={<Ask />} />
        <Route path="/answer" element={<Answer />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<ErrorPage />} />


      </Routes>
    </BrowserRouter>



  );
}

export default App;
