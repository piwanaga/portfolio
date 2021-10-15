import React from 'react';
import Skyline from './images/skyline.jpg';

const About = () => {

    return (
        <div className='md:grid md:grid-cols-2 h-full'>
            <div className='w-full h-full py-28 bg-yellow-500 flex justify-center'>
                <div className='w-11/12 md:w-11/12 lg:w-4/5 flex flex-col items-center'>
                    <p className='text-center text-4xl xl:text-5xl mb-16 tracking-wide'>Fullstack software engineer, your future favorite coworker</p>
                    <p className='text-center font-mono tracking-tighter text-lg md:text-xl mb-12'>I make work fun, I can take direction and I'm a team player. As a fullstack engineer I'm mainly building projects with React, Redux and Node, but I love learning new things and applying creative technical solutions to the task at hand.</p>
                    <p className='text-center font-mono tracking-tighter text-lg md:text-xl'>Currently based in Seattle, but looking to relocate to New York City. Outside of work I enjoy photography, skateboarding, hiking, cooking and eating lots and lots of soup. I'm interested in design, travel, sustainability and finance.</p>
                </div>
            </div>
            <div className='hidden md:inline relative'>
                <img src={Skyline} alt='seattle skyline' className='absolute inset-0 h-full w-full object-cover object-center' />
            </div>
        </div>
    )
};

export default About;