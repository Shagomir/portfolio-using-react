import React, { Component } from "react";
import projects from "../assets/projects";
import { Card, Image } from "react-bootstrap";

const ProjectCard = (props) => {
  const { projectNumber } = props;
  return (
    <Card>
      <h3>{projects[projectNumber].title}</h3>
      <Image
        src={projects[projectNumber].image}
        alt={projects[projectNumber].title}
      />
      <p>{projects[projectNumber].description}</p>
      <a href={projects[projectNumber].liveURL}>Link to the project</a>
    </Card>
  );
};

export default ProjectCard;
