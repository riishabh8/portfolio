import React from "react";
import "./home.css";
export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="text-data">
          <div className="main_heading">
            <h1>Hello World;</h1>
          </div>
          <div className="intro">
            <h2>
              Rishabh
              <span className="after-intro">&nbsp;&nbsp; this side.......</span>
            </h2>
          </div>
          <div className="note">
            *Actively looking for internships and full-time-opportunities (batch
            2023)
          </div>
        </div>
        {/* <div className="image">
          <img src={require("./profile.jpg")} alt="" />
        </div> */}
      </div>
    </div>
  );
}
