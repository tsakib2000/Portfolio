import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";


const MyProjects = () => {
    const [projects,setProjects]=useState([])
    useEffect(()=>{
        fetch('projects.json')
        .then(res=>res.json())
        .then(data=>setProjects(data))
    },[])
    return (
        <div id="projects" className="mb-5">
            <h1 className="text-center text-2xl md:text-3xl font-bold mb-5">My Projects</h1>
          <div className="grid md:grid-cols-3 gap-4">
          {projects?.map((project,idx)=><ProjectCard key={idx} project={project}/>)}
          </div>
        </div>
    );
};

export default MyProjects;