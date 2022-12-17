import React from "react";
import Card from "./Card";
import "./exp.css";
import img from "./download.png";
export default function ExperienceSection() {
  return (
    <div className="exp-section">
      <h1>Internship Section</h1>
      <Card
        source="https://infyspringboard.onwingspan.com/assets/instances/InfosysSpringboard/app_logos/landing-new.png"
        alternate="infosys-sb"
        data={[
          " Collaborated with a team of 6 people as a SCRUM master to deliver the backend part of the project on time.",
          "Successfully followed the phases of software development life cycle to develop the project Schedul-O-Feedback.",
          "Successfully completed the project within the stipulated time frame.",
        ]}
      />
      <Card
        source={img}
        alternate="workat.tech"
        data={[
          "Assisted with the development of projects for a 12-week bootcamp teaching web development and programming fundamentals to 20+ students.",
          "Conducted regular 1:1 meetings with students to identify areas of improvement.",
          "Troubleshooted and debugged code for over 20+ students in a fullstack (MERN) bootcamp.",
        ]}
      />
    </div>
  );
}
