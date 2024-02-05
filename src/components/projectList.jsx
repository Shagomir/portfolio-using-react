import ProjectCard from "./project";

const projects = [
    {
        projectImage: "/",
        imageDescription:"placeholder",
        projectName:"Project 1",
        projectDescription: "placeholder description"
    },
    {
        projectImage: "/",
        imageDescription:"placeholder",
        projectName:"Project 2",
        projectDescription: "Description of Project 2"
}, {
    projectImage: "/",
    imageDescription:"placeholder",
    projectName:"Project 2",
    projectDescription: "Description of Project 2"
}
]

export default function DisplayProjects() {
    return (
        <>
        
            {projects.map((project) => <><br/><ProjectCard data={project}/></>)}

            {/* <li><ProjectCard data={projects[0]}/></li> */}
        </>

    )
}