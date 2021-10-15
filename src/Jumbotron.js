import React from 'react';

const Jumbotron = () => {
    return (
        <div className='texture-background w-screen flex flex-col items-center'>
            <div className='flex flex-col justify-center tracking-wider xl:tracking-widest min-h-screen text-5xl xs:text-6xl sm:text-8xl space-y-6 sm:space-y-4'>
                <h1 className='animate-slideRight'>
                    <span className='fill-forwards delay-1 animate-makeYellow'>PHILLIP</span> IWA
                </h1>
                <h1 className='animate-slideLeft'>
                    NAGA PHILL
                </h1>
                <h1 className='animate-slideRight'>
                    IP <span className='fill-forwards delay-2 animate-makeYellow'>IWANAGA</span>
                </h1>
                <h1 className='animate-slideLeft'>
                    <span className='fill-forwards delay-3 animate-makeYellow'>PHILLIP</span> IWA
                </h1>
                <h1 className='animate-slideRight'>
                    NAGA PHILL
                </h1>
                <h1 className='animate-slideLeft'>
                    IP <span className='fill-forwards delay-4 animate-makeYellow'>IWANAGA</span>
                </h1>
            </div>
        </div>
    )
};

export default Jumbotron;