import React from 'react';
import Skyline from './images/skyline.jpg';

const About = () => {

    return (
        <div className='md:grid md:grid-cols-2 h-full'>
            <div className='w-full h-full bg-brown py-28 flex justify-center'>
                <div className='w-11/12 md:w-11/12 lg:w-4/5 flex flex-col items-center'>
                    <p className='text-red font-serif text-center text-4xl xl:text-5xl mb-16'>Fullstack software engineer, your future favorite coworker</p>
                    <p className='sm:w-4/5 md:w-full lg:w-4/5 text-gray text-center font-mono tracking-tighter text-lg mb-12'>I make work fun, I'm great at taking direction and I'm a team player. Currently based in Seattle, but planning to relocate to New York City.</p>
                    <p className='sm:w-4/5 md:w-full lg:w-4/5 text-gray text-center font-mono tracking-tighter text-lg'> As a fullstack engineer I'm mainly building projects with React, Redux and Node, but I love learning new things and applying creative technical solutions to the task at hand. I'm interested in design, creating meaningful user experiences, and delivering high quality, readable code.</p>
                </div>
            </div>
            <div className='hidden md:inline relative'>
                <img src={Skyline} alt='seattle skyline' className='absolute inset-0 h-full w-full object-cover object-center' />
            </div>
        </div>
    )
};

export default About;