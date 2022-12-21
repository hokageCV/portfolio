import React from 'react';

export default function Project({name, img, githubLink, liveLink}){
    return(
        <div className="card w-10/12 md:w-7/12 m-4 px-4 glass bg-snow-4 hover:bg-frost-1">

                <h2 className="card-title text-night-3"> {name}</h2>

                <figure>
                    <img src={img} alt={name}/>
                </figure>

                <div className="card-body">
                    <div className="card-actions justify-start">

                        <a href={githubLink} target="_blank">
                            <button className='btn btn-sm  bg-night-1 text-snow-1'>
                                repository
                            </button>
                        </a>
                        <a href={liveLink} target="_blank">
                            <button className='btn btn-sm bg-night-1 text-snow-1'>
                                Live
                            </button>
                        </a>

                    </div>
                </div>

            </div>
    )
}