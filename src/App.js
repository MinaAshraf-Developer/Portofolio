
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"








import NavBar from './NavBar/NavBar';
import  Banner  from './Banner/Banner';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import NewsLetter from './NewsLetter/NewsLetter';
import Footer from './Footer/Footer';


function App () {
  
  return (
    <div className="App">
      <NavBar />

      <Banner />
      
      <Skills/>
            
      <Projects />
      
      <Contact />
      
      <NewsLetter />
      
      <Footer/>
    </div>
  );
}

export default App;
