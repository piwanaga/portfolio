import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='projects-bg w-screen flex flex-row justify-center pb-4 pt-32'>
            <p className='text-brown font-mono tracking tighter text-sm mr-3'>{String.fromCharCode(169)} 2022 Phillip Iwanaga</p>
            <a href='https://codepen.io/piwanaga/pens/showcase' target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faCodepen} className='text-brown text-sm mr-3'/>
            </a>
            <a href='https://github.com/piwanaga' target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faGithub} className='text-brown text-sm mr-3'/>
            </a>
            <a href='https://www.linkedin.com/in/phillipiwanaga/' target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faLinkedin} className='text-brown text-sm'/>
            </a>
        </div>
    )
};

export default Footer;