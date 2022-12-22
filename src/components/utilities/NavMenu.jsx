import React from 'react';
import { Link } from 'react-scroll'
import { Sun, Moon } from './Pokemon';

export default function NavMenu({theme, toggleTheme}){
    return(
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1 py-0">
                <li><Link activeClass="active" to="about" smooth={true} className="active:bg-frost-3">About</Link></li>
                <li><Link to="skills" smooth={true} className="active:bg-frost-3 py-0">Skills</Link></li>
                <li><Link to="projects" smooth={true} className="active:bg-frost-3 py-0">Projects</Link></li>
                <li><Link to="contact" smooth={true} className="active:bg-frost-3 py-0">Contact</Link></li>
                <li>
                    <button 
                        type='submit'
                        onClick={toggleTheme}
                        className=" right-20 top-4 text-lg p-1 ml-2 rounded-md bg-night-1 dark:bg-snow-1 dark:text-night-1"
                    >
                        {theme==='dark'? Sun : Moon}
                    </button>
                </li>
            </ul>
        </div>
    )
}