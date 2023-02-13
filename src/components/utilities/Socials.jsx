import React from 'react';

export default function Socials({link, Icon}){
    return(
            <a href={link}
                target="_blank" rel="noopener noreferrer"
                className='btn bg-frost-2 hover:bg-frost-3'
            >
                <Icon size={40} color="black"/>
            </a>
    )
}
