import React from "react";
import styles from './ProjectCard.module.css'
import projects from "../../data/projects.json";
import { getImageUrl } from "../../utils";

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(project.imageSrc)}
        alt={`Image of ${project.title}`}
        className={styles.image}
      />
      <h3 className={styles.container}>{project.title}</h3>
      <p className={styles.container}>{project.description}</p>
      <ul >
        {project.skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
      <div>
        <a href={project.demo}>Demo</a>
        <a href={project.source}>Source</a>
      </div>
    </div>
  );
};

export default ProjectCard;
