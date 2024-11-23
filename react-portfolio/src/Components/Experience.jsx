import React from 'react';
import "./Experience.css";
import skills from "../data/skills.json";
import history from "../data/history.json"

export const Experience = () => {
    return (
        <section id="experience">
            <h2 className='exp-title'>Experience</h2>
            <div className="skills-exp">
            <div className='skills'>
                {
                    skills.map((skill,idx) =>{
                        return <div key={idx}>
                            <figure className='skillImage-container'>
                                <img src={skill.imageSrc} alt={`${skill.title} logo`} className='skillImage'/>
                                <figcaption>{skill.title}</figcaption>
                                </figure>
                            </div>
                    })
                }
            </div>
            <ul className="experience">
                {
                    history.map((exp, idx) => {
                        return <li key={idx} className='exp-item'>
                                <img src={exp.imageSrc} alt={`${exp.organisation} logo`} />
                            <div className='exp-item-content'>
                                <h6>{`${exp.role}, ${exp.organisation}`}</h6>
                                <small>{`${exp.startDate} - ${exp.endDate}`}</small>
                                <ul>
                                    {
                                        exp.experiences.map((experience,idx)=>{
                                           return  <li key={idx}>
                                            {experience}
                                           </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </li>
                    })

                }
            </ul>
            </div>
        </section>
    )

}
