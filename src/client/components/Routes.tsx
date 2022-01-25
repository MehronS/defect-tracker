import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bug from "./Bug";
import Home from "./Home";
import Projects from "./Projects";
import Navbar from "./Navbar";

export interface Props {}

const Router: React.FunctionComponent<Props> = (props) => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bugs">
          <Route index element={<Bug />} />
          <Route path=":id" element={<Bug />} />
        </Route>
        <Route path="/projects">
          <Route index element={<Projects />} />
          <Route path=":id" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
