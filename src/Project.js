import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuid } from 'uuid';

const Project = ({ links, title, description, tech, implementation, learned, forward, image, alt }) => {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }

    function renderLinks() {
        if (!links) return null
        let linkText
        title === 'CodePen' ? linkText = 'View CodePen' : linkText = 'View on GitHub'
        return (
            <div>
                <a href={links[0]} target='_blank' rel='noreferrer'>
                    <button className='font-mono tracking-tighter border border-brown text-sm sm:text-base text-brown px-2 hover:bg-brown hover:text-gray'>
                        {linkText}
                    </button>
                </a>
                {links.length > 1 ?
                    <a href={links[1]} target='_blank' rel='noreferrer'>
                        <button className='ml-4 font-mono tracking-tighter border border-brown text-sm sm:text-base text-brown px-2 hover:bg-brown hover:text-gray'>
                        View Deployed
                        </button>
                    </a> :
                    null
                }
            </div>
        )
    }

    return (
        <>
            <button type="button" onClick={openModal}>
                <div className='text-left mb-4 md:m-6 p-5 border-2 border-red hover:shadow transition group'>
                    <img src={image} alt={alt} className='w-full mb-4 opacity-80' />
                    <h5 className='text-brown font-serif font-semibold text-2xl mb-4'>{title}</h5>
                    <p className='text-brown font-mono tracking-tighter text-lg mb-4 line-clamp-2'>{description}</p>
                    <p className='text-brown font-mono tracking-tighter text-md group-hover:underline group-hover:text-red'>Read More</p>
                </div>
            </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-0"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                        &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                        <div className="inline-block w-full max-w-3xl bg-gray p-4 sm:p-6 my-2 overflow-hidden text-left align-middle transition-all transform shadow-xl">
                            <div className='flex justify-between'>
                                <div className='flex flex-col sm:flex-row sm:items-center'>
                                    <Dialog.Title
                                        as="h3"
                                        className="font-serif text-brown text-2xl font-semibold sm:text-3xl leading-6 mb-2 sm:mr-4"
                                    >
                                        {title}
                                    </Dialog.Title>
                                    {renderLinks()}
                                </div>
                                <button type="button" onClick={closeModal} className='text-brown text-lg'>
                                    <FontAwesomeIcon icon={ faTimes }/>
                                </button>
                            </div>
                            <div className="mt-2">
                                
                                <p className="font-mono text-brown tracking-tighter sm:text-lg mb-4">
                                    {description}
                                </p>
                                
                                <img src={image} alt={alt} className='w-full opacity-90 mb-2'/>
                               
                                <div className='flex flex-wrap mb-4'>
                                    {tech.map(t => (
                                        <div className='bg-red shadow-md py-2 px-3 mr-2 mt-2' key={uuid()}>
                                            <p className='text-gray font-serif tracking-wider text-sm xs:text-base'>{t}</p>
                                        </div>)
                                    )}
                                </div>
                                <div className='mb-2'>
                                    <p className="font-serif text-brown text-xl font-semibold">
                                        Implementation
                                    </p>
                                    <p className="font-mono text-brown tracking-tighter sm:text-lg ">
                                        {implementation} 
                                    </p>
                                </div>
                                <div className='mb-2'>
                                    <p className="font-serif text-brown font-semibold text-xl ">
                                        What I learned
                                    </p>
                                    <p className="font-mono text-brown tracking-tighter sm:text-lg ">
                                        {learned}
                                    </p>
                                </div>
                                <div className='mb-2'>
                                    <p className="font-serif text-brown font-semibold text-xl ">
                                        Moving Forward
                                    </p>
                                    <p className="font-mono text-brown tracking-tighter sm:text-lg ">
                                        {forward}
                                    </p>
                                </div>
                            </div>
                        </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
};

export default Project;