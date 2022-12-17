import React from "react";
import "./skills.css";

//list of skills : mongodb html css js react node.js c/c++

export default function Skills() {
  return (
    <div className="skills--section">
      <h2 className="skills--heading">Skills</h2>
      <div className="skills--container">
        <div className="skill  skill--1">
          <i class="fa-brands fa-html5"></i>
          <h3>HTML 5</h3>
        </div>

        <div className="skill skill--2">
          <i class="fa-brands fa-css3-alt"></i>
          <h3>CSS 3</h3>
        </div>
        <div className="skill skill--3">
          <i class="fa-brands fa-js"></i>
          <h3>JS</h3>
        </div>
        <div className="skill skill--4">
          <i class="fa-brands fa-react"></i>
          <h3>react.js</h3>
        </div>
        <div className="skill skill--5">
          <i class="fa-brands fa-node"></i>
          <h3>Node.js</h3>
        </div>
        <div className="skill  skill--6">
          <i class="icon-cplusplus"></i>
          <h3>C/C++</h3>
        </div>
        <div className="skill skill--7">
          <i class="icon-mysql"></i>
          <h3>SQL</h3>
        </div>
        <div className="skill skill--8">
          <i class="icon-mongodb"></i>
          <h3>mongoDB</h3>
        </div>
        <div className="skill skill--9">
          <i class="icon-bootstrap"></i>
          <h3>Bootstrap</h3>
        </div>
      </div>
    </div>
  );
}
