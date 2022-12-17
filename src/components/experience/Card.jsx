import React from "react";

export default function Card(props) {
  const dataArray = props.data;
  return (
    <div className="card-container">
      <div className="card-data-main">
        <div className="card-image">
          <img src={props.source} alt={props.alternate} />
        </div>
        <div className="card-data">
          <ul>
            {/* <li>
              Collaborated with a team of 6 people as a SCRUM master to deliver
              the backend part of the project on time.
            </li>
            <li>
              Successfully followed the phases of software development life
              cycle to develop the project Schedul-O-Feedback.
            </li>
            <li>
              Successfully completed the project within the stipulated time
              frame.
            </li>
            */}
            {dataArray.map((name) => (
              <li>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
