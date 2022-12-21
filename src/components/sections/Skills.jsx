import React from 'react';
import SkillsArray from '../../data/skills';
import Skill from '../utilities/Skill';
import Title from '../utilities/Title';

export default function Skills(){
    return (
        <div id='skills' className='px-4'>
            <Title>Skills</Title>
            <div className='flex flex-col md:flex-row items-center justify-center m-4 '>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 '>
                    {SkillsArray.map( skill => (
                        <Skill 
                            img={skill.img}
                            name={skill.name}
                        />
                    ) )}
                </div>
            </div>
        </div>
    )
}