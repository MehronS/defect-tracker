import React, { useState } from "react";
import Defects from "./Defect";
import { Defect, Project } from "./model";
import Projects from "./Projects";

type Props = {};

export default function Home({}: Props) {
  const [projects, setProjects] = useState<Project[]>([
    { name: `Project1`, id: 1 },
    { name: `Project2`, id: 2 },
  ]);

  const [defects, setDefects] = useState<Defect[]>([
    {
      id: 1,
      name: "Test Bug1",
      type: "bug",
      severity: "High",
      userId: 1,
      projectId: 1,
    },
    {
      id: 2,
      name: "Test Bug2",
      type: "Improvement",
      severity: "Low",
      userId: 2,
      projectId: 1,
    },
  ]);

  return (
    <div>
      <h4>Dashboard</h4>
      <br />
      <fieldset>
        <legend>
          <h3>Projects</h3>
        </legend>
        <Projects projects={projects} setProjects={setProjects} />
      </fieldset>
      <br />
      <fieldset>
        <legend>
          <h3>Defects</h3>
        </legend>
        <Defects defects={defects} setDefects={setDefects} />
      </fieldset>
    </div>
  );
}
