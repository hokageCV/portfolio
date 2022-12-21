import React from 'react';

import github from '/assets/site_icons/github.svg'
import linkedin from '/assets/site_icons/linkedin.svg'
import twitter from '/assets/site_icons/twitter.svg'

export default function Socials(){
    return(
        <div className="btn-group">
            <a href="https://github.com/hokageCV" 
                target="_blank" className='btn bg-frost-2 hover:bg-frost-3'
            >
                <img 
                    src={github}
                    alt="github" 
                    width="48px" 
                    height="48px" 
                />
            </a>
            <a href="https://www.linkedin.com/in/chaitanya-varu/" 
                target="_blank" className='btn bg-frost-2 hover:bg-frost-3'
            >
                <img   
                src={linkedin}
                alt="linkedin" 
                width="48px" 
                height="48px" 
            />
            </a>
            <a href="https://twitter.com/ChaitanyaVaru" 
                target="_blank" className='btn bg-frost-2 hover:bg-frost-3'
            >
                <img 
                src={twitter}
                alt="twitter" 
                width="48px" 
                height="48px" 
            />
            </a>
        </div>
    )
}