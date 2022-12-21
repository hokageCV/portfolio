import React from 'react';
import {Link} from 'react-scroll'

export default function Navbar(){
    return (
        <div className="navbar shadow-xl bg-snow-3 text-night-3">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-3xl">Chaitanya Varu</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link activeClass="active" to="about" smooth={true} className="active:bg-frost-3">About</Link></li>
                    <li><Link to="skills" smooth={true} className="active:bg-frost-3">Skills</Link></li>
                    <li><Link to="projects" smooth={true} className="active:bg-frost-3">Projects</Link></li>
                    <li><Link to="contact" smooth={true} className="active:bg-frost-3">Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}