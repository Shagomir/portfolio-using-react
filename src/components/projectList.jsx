import ProjectCard from "./project";
import { projects } from "../assets/projects";

export default function DisplayProjects() {
  return (
    <>
      {projects.map((project) => (
        <>
          <br />
          <ProjectCard key={project.key} data={project} />
        </>
      ))}

      {/* <li><ProjectCard data={projects[0]}/></li> */}
    </>
  );
}
