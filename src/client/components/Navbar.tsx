import React from "react";
import { Link } from "react-router-dom";

type Props = {};

function Navbar({}: Props) {
  return (
    <div>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/defects">Defects</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </nav>
    </div>
  );
}

export default Navbar;
