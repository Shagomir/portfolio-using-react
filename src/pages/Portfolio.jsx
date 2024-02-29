import React from "react";
import { Link } from "react-router-dom";
import projects from "../assets/projects";
import ProjectCard from "../components/ProjectCard";
import { Container, ListGroup } from "react-bootstrap";

const Portfolio = () => {
  return (
    <>
      <Container className="min-vw-100">
        <h1>Portfolio</h1>
        <p>Check out the following projects:</p>
        <ListGroup>
          {projects.map((project, index) => (
            <li key={index}>
              <ProjectCard key={index} projectNumber={index} />
            </li>
          ))}
        </ListGroup>
      </Container>
    </>
  );
};

export default Portfolio;
