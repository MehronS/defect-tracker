import React from "react";
import { useParams } from "react-router-dom";

import { Project } from "./model";

type Props = {
  project?: Project;
};

function SingleProject({ project }: Props) {
  const { id } = useParams();

  // Will query the database for info in future
  if (id) return <p>{id}</p>;
  return (
    <div>
      <p>{project?.name}</p>
    </div>
  );
}

export default SingleProject;
