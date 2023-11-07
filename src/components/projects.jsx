import React from "react";
import PlanIt from "../images/planit.png"
import "./projects.css"

function Projects() {
    return (
        <div className="grid-container">
            <div className="grid-item">
                <img src={PlanIt} alt="Image 1" className="rounded-image" />
            </div>
            <div className="grid-item">
                <img src={PlanIt} alt="Image 2" className="rounded-image" />
            </div>
            <div className="grid-item">
                <img src={PlanIt} alt="Image 3" className="rounded-image" />
            </div>
            <div className="grid-item">
                <img src={PlanIt} alt="Image 4" className="rounded-image" />
            </div>
        </div>
    );
}

export default Projects;