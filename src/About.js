import './App.css';
import AboutCore from './components/AboutCore.js';
import { useEffect } from 'react';

function About() {
  useEffect(() => {   
    document.title = `Sobre nosotros`;  
  });
  return (
    <div className="App">
      <AboutCore/>
    </div>
  );
}

export default About;
