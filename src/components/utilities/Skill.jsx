import React from 'react';

export default function Skill({name, img}){
    return(
        <div className="card w-32 h-40 bg-snow-4 dark:bg-night-4 shadow-xl hover:bg-frost-1 dark:hover:bg-night-3">
            <figure className="px-4 pt-4">
                <img 
                    src={img}
                    alt={name}
                    className="object-cover h-14 w-14"
                />
            </figure>
            <div className="card-body items-center text-center p-3 text-night-3 dark:text-snow-3">
                <h2 className="card-title">{name}</h2>
            </div>
        </div>
    )
}