import React from 'react';
import NavMenu from '../utilities/NavMenu';

export default function Navbar({theme, toggleTheme}){
    return (
        <div className="navbar flex flex-col md:flex-row shadow-xl dark:shadow-night-3 bg-snow-3 dark:bg-night-2 text-night-3 dark:text-snow-3">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-3xl">Chaitanya Varu</a>
            </div>
            <NavMenu theme={theme} toggleTheme={toggleTheme}/>
        </div>
    )
}