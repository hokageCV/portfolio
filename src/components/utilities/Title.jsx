import React from 'react';

export default function Title({children}){
    return(
        <h1 
            className='text-3xl underline underline-offset-8 decoration-4 mb-5 text-night-3 dark:text-white'
        >
            {children}
        </h1>
    )
}