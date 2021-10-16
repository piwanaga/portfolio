import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <div className='w-screen h-full bg-red py-24 flex justify-center'>
            <div className='w-11/12 md:w-3/5 flex flex-col items-center'>
                <p className='text-brown text-5xl mb-16'>Get in Touch</p>
                <p className='text-brown font-mono tracking-tighter text-xl mb-16 text-center'>If you would like to HIRE ME, take me out for dinner, or just wanna chat and become new internet friends, feel free to send me a message.</p>
                <div className='w-full flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:justify-center text-xl'>
                    <button className='bg-brown text-red font-serif px-3 py-2 lg:mr-6 hover:text-gray'>
                        <a href='mailto:phillip.iwanaga@gmail.com'>
                            <FontAwesomeIcon icon={faEnvelope} className='mr-1'/>
                            phillip.iwanaga@gmail.com
                        </a>
                    </button>
                    <button className='bg-brown text-red font-serif tracking-wide px-3 py-2 lg:mr-6 hover:text-gray'>
                        <a href='https://www.linkedin.com/in/phillipiwanaga/' target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon icon={faLinkedin} className='mr-1'/>
                            /phillipiwanaga
                        </a>
                    </button>
                    <button className='bg-brown text-red font-serif tracking-wide px-3 py-2 hover:text-gray'>
                        <a href='https://drive.google.com/file/d/1xlz5f_EIwN6h9aGtCy8bkHCEQDpBhEPF/view?usp=sharing' target='_blank' rel='noreferrer'>
                            <FontAwesomeIcon icon={faGoogleDrive} className='mr-1'/>
                            resume
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Contact;