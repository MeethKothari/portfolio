import './App.css';
import AppBar from '../components/AppBar/AppBar';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Projects from '../components/Projects/Projects';


function App() {

  return (
    <>
      <AppBar />
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
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