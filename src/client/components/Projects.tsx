import React from "react";
import { Project } from "./model";
import SingleProject from "./SingleProject";
import { Link } from "react-router-dom";

type Props = {
  projects?: Project[];
  setProjects?: React.Dispatch<React.SetStateAction<Project[]>>;
};

function Projects({ projects }: Props) {
  return (
    <div>
      {projects?.map((project) => (
        <div key={project.id}>
          <Link to={`/projects/${project.id}`}>
            {" "}
            <SingleProject project={project} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Projects;
