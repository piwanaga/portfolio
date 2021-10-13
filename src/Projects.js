import React from 'react';
import Project from './Project';
import ProjectList from './ProjectList';

const Projects = () => {
    return (
        <div className='w-screen flex flex-col items-center bg-gray-100 py-20'>
            <div className='w-11/12 md:w-3/5'>
                <p className='text-5xl text-center mb-10'>Projects</p>
                <p className='font-mono tracking-tighter text-center text-lg md:text-xl mb-10'>Some things I completed for school and some I did on the side. My goal with anything I work on is to learn something new, and improve on what I already know.</p>
            </div>
            <div className='w-11/12 md:w-3/5 lg:grid lg:grid-cols-2 lg:w-4/5 lg:items-start xl:w-7/12'>
                {ProjectList.map(p => (
                    <Project 
                        key={p.key}
                        link={p.link} 
                        title={p.title} 
                        description={p.description} 
                        tech={p.tech}
                        implementation={p.implementation}
                        learned={p.learned}
                        forward={p.forward}
                        image={p.image}
                        alt={p.alt}
                    />
                ))}
            </div>
        </div>
    )
};

export default Projects;