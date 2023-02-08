import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Title from '../utilities/Title';
import Input from '../utilities/Input';

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
        <div id='contact' className='px-4 pt-navwd-1 md:pt-navwd-2'>
            <Title>Contact</Title>
            <div className='flex flex-col md:flex-row items-center justify-center m-4  p-4'>

                { showForm && 
                    <form ref={form} onSubmit={sendEmail} className="form-control w-full max-w-xs">

                        <Input 
                            type="email"
                            label="Email"
                            name="user_email"
                            placeholder="Type your email"
                        />
                        <Input 
                            type="text"
                            label="Name"
                            name="user_name"
                            placeholder="Type your name"
                        />
                        <Input 
                            type="textarea"
                            label="Message"
                            name="message"
                            placeholder="Type your message"
                        />

                        <button  type="submit" value="Send" className="btn btn-sm btn-outline mt-1 bg-frost-3 dark:bg-frost-1 text-night-3">
                            Send
                        </button>

                    </form>
                }
                { !showForm &&
                    <div className="alert alert-success shadow-lg max-w-max">
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