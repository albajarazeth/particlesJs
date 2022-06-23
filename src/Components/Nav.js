import React from "react";
import "./Nav.css";
import { AiFillCode } from "react-icons/ai";
function Nav() {
  return (
    <>
      <nav className="nav">
        <div className="left">
          <h1>Alba</h1>
        </div>
        <div className="right">
          {/*  <ul className="li-items">
          <li>About</li>
            <li>Projects</li>
            <li>Technologies</li>
          </ul>*/}{" "}
          <AiFillCode size={50} />
        </div>
      </nav>
    </>
  );
}

export default Nav;
