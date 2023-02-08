import React from 'react';

export default function Title({children}){
    return(
        <h1 
            className='text-3xl  mb-5 text-night-3 dark:text-snow-3'
        >
            {children}
        </h1>
    )
}