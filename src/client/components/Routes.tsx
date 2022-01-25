import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Defects from "./Defect";
import Home from "./Home";
import Projects from "./Projects";
import Navbar from "./Navbar";
import SingleProject from "./SingleProject";
import SingleDefect from "./SingleDefect";

export interface Props {}

const Router: React.FunctionComponent<Props> = (props) => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/defects">
          <Route index element={<Defects />} />
          <Route path=":id" element={<SingleDefect />} />
        </Route>
        <Route path="/projects">
          <Route index element={<Projects />} />
          <Route path=":id" element={<SingleProject />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
