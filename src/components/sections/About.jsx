import React from 'react';
import Socials from '../utilities/Socials';

export default function About(){
    return (
        <div id='about' className="hero min-h-screen ">
            <div className="hero-content text-center">
                <div className="max-w-md text-night-3">
                    <h1 className="text-5xl font-bold dark:text-snow-4">Hi, I am Chaitanya</h1>
                    <p className="py-6 dark:text-snow-2">
                        A full stack developer. I help people to showcase their products/services to the world.
                    </p>

                    <Socials />

                </div>
            </div>
        </div>
    )
}