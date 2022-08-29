import React, { useState, useEffect } from 'react';
import Hero from "./components/Hero"
import first from "./components/Themes"
import Work from './components/Work';
import MainNavigation from './components/Navigation/MainNavigation'
import Experience from './components/Experience';
import Sidebar from './components/Sidebar';
import Social from './components/Social';
import About from './components/About';

const App = () => {
  const [theme, setTheme] = useState(first[0])
  let i = 0;
  function two() {
    let l = first.length - 1;
    setInterval(() => {
      while (true) {
        if (i >= l) i = -1;
        i += 1;
        setTheme(first[i])
        break;
      }

    }, 15000)

  }

  useEffect(() => {
    two();
  }, []);
  return (
    <div style={theme}>

      <Sidebar />
      <MainNavigation scheme={theme} />
      <Hero />
      <About />
      <Work />
      <Experience />
      <Social />     </div>
  );
};

export default App;