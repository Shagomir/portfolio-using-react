import React from "react";
import { useParams } from "react-router-dom";
import projects from "../assets/projects";
import { Image } from "react-bootstrap";

const ProjectDetail = () => {
  const { projectNumber } = useParams();
  const project = projects[projectNumber];

  return (
    <div>
      <h1>{project.title}</h1>
      <Image src={project.image} alt={project.title} />
      <p>{project.description}</p>
      <a href={project.liveURL}>Link to the project</a>
    </div>
  );
};

export default ProjectDetail;
