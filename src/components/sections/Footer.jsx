import React from 'react';

export default function Footer(){
    return (
        <footer className="footer footer-center p-4 bg-snow-3 dark:bg-night-2 text-night-3 dark:text-snow-3">
            <div>
                <a 
                    href="/files/2210.pdf"
                    className='p-1 border rounded font-medium  bg-frost-3 text-night-4 hover:bg-frost-2'
                    download="ChaitanyaVaruResume"
                    >
                    Resume
                </a>
                <p>Copyright &copy; 2022 - None rights reserved</p>
            </div>
        </footer>
    )
}