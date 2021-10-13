import React from 'react';
import Skyline from './images/skyline.jpg';

const About = () => {
    return (
        <div className='md:grid md:grid-cols-2 h-full'>
            <div className='w-full h-full py-28 bg-yellow-500 flex justify-center'>
                <div className='w-11/12 md:w-11/12 lg:w-4/5 flex flex-col items-center'>
                    <p className='text-center text-4xl xl:text-5xl mb-16 tracking-wide'>Fullstack software engineer, your future favorite coworker</p>
                    <p className='text-center font-mono tracking-tighter text-lg md:text-xl mb-12'>Ok, maybe I won't be your favorite. But I make work fun, I love to share knowledge and I'm a team player. As a fullstack engineer I'm building projects with React, Redux and Node, and while Javascript is my strength, I also have experience with Python and Flask and am eager to dive into anything new.</p>
                    <p className='text-center font-mono tracking-tighter text-lg md:text-xl'>Currently based in Seattle, but looking to relocate to New York City. Outside of work I enjoy photography, skateboarding, hiking, cooking, eating lots and lots of soup, long walks on the beach...</p>
                </div>
            </div>
            <div className='hidden md:inline relative'>
                <img src={Skyline} className='absolute inset-0 h-full w-full object-cover object-center' />
            </div>
        </div>
    )
};

export default About;