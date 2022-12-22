import React from 'react';
import {Link} from 'react-scroll'
import {Sun, Moon} from '../utilities/Pokemon'

export default function Navbar({theme, toggleTheme}){
    return (
        <div className="navbar flex flex-col md:flex-row shadow-xl dark:shadow-night-3 bg-snow-3 dark:bg-night-2 text-night-3 dark:text-snow-3">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-3xl">Chaitanya Varu</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link activeClass="active" to="about" smooth={true} className="active:bg-frost-3">About</Link></li>
                    <li><Link to="skills" smooth={true} className="active:bg-frost-3">Skills</Link></li>
                    <li><Link to="projects" smooth={true} className="active:bg-frost-3">Projects</Link></li>
                    <li><Link to="contact" smooth={true} className="active:bg-frost-3">Contact</Link></li>
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
        </div>
    )
}