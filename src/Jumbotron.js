import React from 'react';

const Jumbotron = () => {
    return (
        <div className='texture-background w-screen flex flex-col items-center '>
            <div className='min-h-screen text-5xl xs:text-6xl sm:text-8xl space-y-6 sm:space-y-4 py-40 xs:py-32 sm:py-10'>
                <h1 className='tracking-wide animate-slideRight'>
                    <span className='fill-forwards delay-1 animate-makeYellow'>PHILLIP</span> IWA
                </h1>
                <h1 className='tracking-wide animate-slideLeft'>
                    NAGA PHILL
                </h1>
                <h1 className='tracking-wide animate-slideRight'>
                    IP <span className='fill-forwards delay-2 animate-makeYellow'>IWANAGA</span>
                </h1>
                <h1 className='tracking-wide animate-slideLeft'>
                    <span className='fill-forwards delay-3 animate-makeYellow'>PHILLIP</span> IWA
                </h1>
                <h1 className='tracking-wide animate-slideRight'>
                    NAGA PHILL
                </h1>
                <h1 className='tracking-wide animate-slideLeft'>
                    IP <span className='fill-forwards delay-4 animate-makeYellow'>IWANAGA</span>
                </h1>
            </div>
        </div>
    )
};

export default Jumbotron;