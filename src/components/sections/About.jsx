import React from 'react';
import Socials from '../utilities/Socials';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

export default function About(){
    return (
        <div id='about' className="hero min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md text-night-3">
                    <h1 className="text-5xl font-bold dark:text-snow-4">Hi, I am Chaitanya</h1>
                    <p className="py-6 dark:text-snow-2">
                        Full stack developer. I Help Companies Enhance Their Web Development Process with Efficient and Organized Solutions.
                    </p>

                    <div className="btn-group">
                        <Socials 
                            link="https://github.com/hokageCV" 
                            Icon={FaGithub}
                        />
                        <Socials 
                            link="https://www.linkedin.com/in/chaitanya-varu/" 
                            Icon={FaLinkedinIn}
                        />
                        <Socials 
                            link="https://twitter.com/ChaitanyaVaru" 
                            Icon={FaTwitter}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}