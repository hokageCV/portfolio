import React from 'react';
import { TbBooks } from 'react-icons/tb'
import resume from '/assets/files/resume.pdf'  //resume: 2301

export default function Footer(){
    return (
        <footer className="footer footer-center relative p-4 bg-snow-3 dark:bg-night-2 text-night-3 dark:text-snow-3">
            <div>
                <a 
                    href={resume}
                    className='p-1 border rounded font-medium  bg-frost-3 text-night-4 hover:bg-frost-2'
                    download="ChaitanyaVaruResume"
                    target="_blank"
                    >
                    Resume 
                </a>
                <p>Copyright &copy; 2023 - All rights reserved</p>
                <a 
                    href="https://www.notion.so/chaitanya-varu/3e7ac1bccaf040519befbafa23309105"
                    target="_blank"
                    className="absolute bottom-0 left-0" // to stick at botton left
                >
                    <TbBooks />
                </a>
            </div>
        </footer>
    )
}