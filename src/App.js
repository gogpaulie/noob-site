import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroVideo from './components/HeroVideo';
import Work from './components/Work';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [scrollActive, setScrollActive] = useState(false);

  function handleScroll() {
    if (window.scrollY > 100) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });
  return (
    <div>
      <Navbar scrollActive={scrollActive} />
      <HeroVideo />
      <Work id='work' />
      <Contact />
    </div>
  );
}

export default App;
