import React from 'react';
import Jumbotron from './Jumbotron';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {
  return (
    <div className='flex flex-col items-center bg-gray-100'>
      <div>
        <Jumbotron />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
