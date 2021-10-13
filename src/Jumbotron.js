import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Jumbotron = () => {
    return (
        <div className='space-y-6 lg:space-y-0 texture-background w-screen flex flex-col items-center py-20 md:py-16 lg:py-6'>
            <div>
                <h1 className='text-5xl xs:text-6xl sm:text-8xl lg:text-9xl tracking-wide animate-slideRight'>
                    <span className='fill-forwards delay-1 animate-yellow'>PHILLIP</span> IWA
                </h1>
                <h1 className='text-5xl xs:text-6xl sm:text-8xl lg:text-9xl tracking-wide animate-slideLeft'>
                    NAGA PHILL
                </h1>
                <h1 className='text-5xl xs:text-6xl sm:text-8xl lg:text-9xl tracking-wide animate-slideRight'>
                    IP <span className='fill-forwards delay-2 animate-yellow'>IWANAGA</span>
                </h1>
                <h1 className='text-5xl xs:text-6xl sm:text-8xl lg:text-9xl tracking-wide animate-slideLeft'>
                    <span className='fill-forwards delay-3 animate-yellow'>PHILLIP</span> IWA
                </h1>
                <h1 className='text-5xl xs:text-6xl sm:text-8xl lg:text-9xl tracking-wide animate-slideRight'>
                    NAGA PHILL
                </h1>
                <h1 className='text-5xl xs:text-6xl sm:text-8xl lg:text-9xl tracking-wide animate-slideLeft'>
                    IP <span className='fill-forwards delay-4 animate-yellow'>IWANAGA</span>
                </h1>
            </div>
            <FontAwesomeIcon icon={faChevronDown} className='hidden text-2xl text-gray-700 lg:inline animate-bounce delay-5'/>
        </div>
    )
};

export default Jumbotron;