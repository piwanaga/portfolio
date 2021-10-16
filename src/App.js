import React, { useEffect } from 'react';
import { Element, scroller } from 'react-scroll'
import Jumbotron from './Jumbotron';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {

  useEffect(() => {
    scrollToAbout()
  }, [])

  const scrollToAbout = () => {
    scroller.scrollTo('aboutSection', {
      duration: 1500,
      delay: 2800,
      smooth: true
    })
  }

  return (
    <div className='flex flex-col items-center bg-gray-100'>
      <div>
        <Jumbotron />
      </div>
      <div>
        <Element name='aboutSection'>
          <About />
        </Element>
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
