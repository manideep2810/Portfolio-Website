// @ts-nocheck
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Certifications, Hero, Navbar, Tech, Works } from './components';
// Temporarily comment out StarsCanvas until we fix the 3D components
// import { StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Certifications />
        <div className="relative z-0">
          <Contact />
          {/* Temporarily disabled to fix errors */}
          {/* <StarsCanvas /> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App; 