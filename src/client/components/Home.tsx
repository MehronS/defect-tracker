import React, { useState } from "react";
import { Project } from "./model";
import Projects from "./Projects";

type Props = {};

export default function Home({}: Props) {
  const [projects, setProjects] = useState<Project[]>([
    { name: `Project1`, id: 1 },
    { name: `Project2`, id: 2 },
  ]);

  return (
    <div>
      <h4>Dashboard</h4>
      <section>
        <h3>Projects</h3>
        <Projects projects={projects} setProjects={setProjects} />
      </section>
    </div>
  );
}
