import React, { useEffect } from 'react';
import Header from './header';
import Hero from './hero';
import About from './about';
import Projects from './projects';
import Skills from './skills';
import Contact from './contact';
import './App.css';

function App() {
  useEffect(() => {
    // You can add any side effect logic here if needed
    console.log('App component mounted');
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
