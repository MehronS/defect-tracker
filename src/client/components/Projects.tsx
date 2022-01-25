import React from "react";
import { Project } from "./model";

type Props = {
  projects?: Project[];
  setProjects?: React.Dispatch<React.SetStateAction<Project[]>>;
};

function Projects({}: Props) {
  return <div>List of Single Projects Here</div>;
}

export default Projects;
