import React, { useEffect, useState } from "react";
import "./Projects.css";
import projectlist from "../data/projects.json";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
import {Tilt} from 'react-tilt';

export const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      once: false, // Only animate once
    });
  }, []);

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
    "#E67E22", // Orange
  ];
  const [noOfElements, setNoOfElements] = useState(3);

  const projects = projectlist.slice(0, noOfElements);

  const loadmore = () => {
    setTimeout(() => {
      setNoOfElements(noOfElements + noOfElements);
    }, 1500);
  };

  return (
    <section id="projects">
      <h2 className="title">Projects</h2>
      <h4 className="title-description">
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
      </h4>
      <div className="projects">
        {projects.map((project, idx) => {
          return (
            <Tilt><div key={idx} className="project-item" data-aos="flip-left">
              <img src={project.imageSrc} alt="project-image" />
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.skills.map((skill, idx) => {
                  return (
                    <li
                      key={idx}
                      style={{ color: colors[Math.floor(Math.random() * 10)] }}
                    >
                      {`#${skill}`}
                    </li>
                  );
                })}
              </div>
              <ul className="project-output-buttons">
                <li>
                  <a href={project.demo} className="btn text-center">
                    Demo
                  </a>
                </li>
                <li>
                  <a href={project.source} className="btn text-center">
                    Source code
                  </a>
                </li>
              </ul>
            </div>
            </Tilt>
          );
        })}
      </div>
      <div className="load-more-div">
        <button
          type="submit"
          className="load-more"
          onClick={loadmore}
          data-aos="flip-down"
        >
          Load more
        </button>
      </div>
    </section>
  );
};
