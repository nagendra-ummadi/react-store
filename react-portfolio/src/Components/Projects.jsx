import React, { useState } from "react"
import "./Projects.css"
import projectlist from "../data/projects.json"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export const Projects = () =>{
    const colors = [
        "#FF5733", // Red
        "#33FF57", // Green
        "#3357FF", // Blue
        "#F1C40F", // Yellow
        "#9B59B6", // Purple
        "#E74C3C", // Coral
        "#1ABC9C", // Teal
        "#2ECC71", // Emerald
        "#3498DB", // Sky Blue
        "#E67E22"  // Orange
      ];
      const [noOfElements, setNoOfElements] = useState(3);

      const projects = projectlist.slice(0,noOfElements);

      const loadmore = () =>{
        setNoOfElements(noOfElements + noOfElements)
      }
      
    return(
        <section id="projects">
            <h2 className="title">Projects</h2>
            <div className="projects">
                {
                    projects.map((project,idx) =>{
                        return <div key={idx} className="project-item">
                            <img src={project.imageSrc} alt="project-image" />
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            <div className="project-technologies">
                                {
                                    project.skills.map((skill,idx)=>{
                                        return <li key={idx} style={{color:colors[Math.floor(Math.random()*10)]}}> 
                                        {`#${skill}`}
                                        </li>
                                    })
                                }

                            </div>
                            <ul className="project-output-buttons">
                                <li><a href={project.demo} className="btn text-center">Demo</a></li>
                                <li><a href={project.source} className="btn text-center">Source code</a></li>
                            </ul>
                            </div>
                    })
                }
            </div>
            <div className="load-more-div">
                <button type="submit" className="load-more" onClick={loadmore}>Load more</button>
            </div>
        </section>
    )
}
