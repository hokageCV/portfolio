import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Title from '../utilities/Title';

export default function Contact(){
    const [showForm, setShowForm] = useState(true);
    const form = useRef();


    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y0otqou', 'template_u1k626r', form.current, 'K1lYkIkA55p_BVoT_')
        .then((result) => {
            console.log("message sent  ", result.text);
            // e.target.reset();
            setShowForm(false)
        }, (error) => {
            console.log("error aaya  ",error.text);
        });
    };

    return (
        <div id='contact' className='px-4'>
            <Title>Contact</Title>
            <div className='flex flex-col md:flex-row items-center justify-center m-4  p-4'>

                { showForm && 
                    <form ref={form} onSubmit={sendEmail} className="form-control w-full max-w-xs">

                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Type your email" name="user_email" className="input input-bordered w-full max-w-xs" />

                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Type your name" name="user_name"  className="input input-bordered w-full max-w-xs" />

                        <label className="label">
                            <span className="label-text">Message</span>
                        </label> 
                        <textarea name="message" className="textarea textarea-bordered h-24" placeholder="type your message"/>

                        <button  type="submit" value="Send" className="btn btn-sm btn-outline mt-1 bg-frost-3 dark:bg-frost-1 text-night-3">
                            Send
                        </button>

                    </form>
                }
                { !showForm &&
                    <div className="alert alert-success shadow-lg w-1/2">
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Message Sent</span>
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}