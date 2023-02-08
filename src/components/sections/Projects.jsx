import React from 'react';
import Title from '../utilities/Title';
import Project from '../utilities/Project';
import projects from '../../data/projects'

export default function Projects(){
    return (
        <div id='projects' className='px-4 pt-navwd-1 md:pt-navwd-2'>
            <Title>Projects</Title>

            <div className='flex flex-col md:flex-row items-center justify-center m-4  p-4'>
                <div className='flex flex-col items-center justify-center '>
                    {projects.map( project => (
                        <Project 
                            name={project.name}
                            img={project.img}
                            githubLink={project.githubLink}
                            liveLink={project.liveLink}
                            key={project.name}
                        />
                    ) )}
                </div>
            </div>

        </div>
    )
}