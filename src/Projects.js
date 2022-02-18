import React from 'react';
import Project from './Project';
import projectList from './projectList';

const Projects = () => {
    return (
        <div className='w-screen bg-gray flex flex-col items-center py-20'>
            <div className='w-11/12 md:w-3/5'>
                <p className='text-brown bg-red py-1 text-5xl text-center mb-10'>PROJECTS</p>
                <p className='text-brown font-mono tracking-tighter text-center text-lg md:text-xl mb-10'>Some things I completed for school and some I've done on the side. My goal with anything I work on is to learn something new and improve on what I already know.</p>
            </div>
            <div className='w-11/12 md:w-3/5 lg:grid lg:grid-cols-2 lg:w-4/5 lg:items-start xl:w-7/12'>
                {projectList.map(p => (
                    <Project 
                        key={p.key}
                        links={p.links} 
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