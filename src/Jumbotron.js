import React from 'react';

const Jumbotron = () => {
    return (
        <div className='bg-red w-screen flex flex-col items-center'>
            <div className='flex flex-col justify-center text-justify min-h-screen text-5xl xs:text-6xl sm:text-8xl lg:text-9xl space-y-6 sm:space-y-4'>
                <h1 className='text-brown animate-slideLeft tracking-wider xl:tracking-widest'>
                    iwanaga phillip
                </h1>
                <h1 className='text-gray animate-slideRight tracking-wider xl:tracking-widest'>
                    phillip iwanaga
                </h1>
                <h1 className='text-brown animate-slideLeft tracking-wider xl:tracking-widest'>
                    iwanaga phillip
                </h1>
            </div>
        </div>
    )
};

export default Jumbotron;