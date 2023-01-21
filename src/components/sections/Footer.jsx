import React from 'react';
import resume from '/assets/files/resume.pdf'

export default function Footer(){
    return (
        <footer className="footer footer-center p-4 bg-snow-3 dark:bg-night-2 text-night-3 dark:text-snow-3">
            <div>
                <a 
                    href={resume}
                    className='p-1 border rounded font-medium  bg-frost-3 text-night-4 hover:bg-frost-2'
                    download="ChaitanyaVaruResume"
                    target="_blank"
                    >
                    Resume
                </a>
                <a 
                    href="https://www.notion.so/chaitanya-varu/3e7ac1bccaf040519befbafa23309105"
                    target="_blank"
                    className="p-1 border rounded"
                >
                    स्वाध्याय
                </a>
                <p>Copyright &copy; 2022 - None rights reserved</p>
            </div>
        </footer>
    )
}