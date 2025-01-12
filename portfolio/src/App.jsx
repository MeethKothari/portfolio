import './App.css';
import AppBar from '../components/AppBar/AppBar';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Projects from '../components/Projects/Projects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Swipe from '../components/Swiper/Swiper';


function App() {

  return (
    <>
      <AppBar />
      <About />
      <Projects/>
      <Contact/>
    </>
  )
}

export default App


{/* <>
    <Router>
      <Routes>
      <Route path='/' element={<AppBar/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
    </> */}