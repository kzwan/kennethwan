// import React from "react";
// import PlanIt from "../images/planit.png"
// import "./projects.css"

// function Projects() {
//     return (
//         <div className="grid-container">
//             <div className="grid-item">
//                 <img src={PlanIt} alt="Image 1" className="rounded-image" />
//             </div>
//             <div className="grid-item">
//                 <img src={PlanIt} alt="Image 2" className="rounded-image" />
//             </div>
//             <div className="grid-item">
//                 <img src={PlanIt} alt="Image 3" className="rounded-image" />
//             </div>
//             <div className="grid-item">
//                 <img src={PlanIt} alt="Image 4" className="rounded-image" />
//             </div>
//         </div>
//     );
// }

// export default Projects;

import { useEffect, useRef, useState } from "react";
import React from "react";
import { useAnimation, useInView, motion } from "framer-motion";
import Reveal from "../reveal"
import ProjectModal from "./projectsmodal";
import "./projects.css";

const Projects = ({
  modalContent,
  projectLink,
  description,
  imgSrc,
  title,
  code,
  tech = [],
}) => {
  const [hovered, setHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          className= "projectImage"
        >
          <img
            src={imgSrc}
            alt={`A picture of the ${title} project.`}
            style={{
              width: hovered ? "90%" : "85%",
              transform: `rotate(${hovered ? "2deg" : "0deg"})`,
            }}
          />
        </div>
        <div className="projectCopy">
          <Reveal width="100%">
            <div className="projectTitle">
              <h4>{title}</h4>
              <div className="projectTitleLine" />
            </div>
          </Reveal>
          <Reveal>
            <div className="projectTech">{tech.join(" - ")}</div>
          </Reveal>
          <Reveal>
            <p className="projectDescription">
              {description} <br />
              <span onClick={() => setIsOpen(true)}>Learn more {">"}</span>
            </p>
          </Reveal>
        </div>
      </motion.div>
      <ProjectModal
        modalContent={modalContent}
        projectLink={projectLink}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={imgSrc}
        title={title}
        code={code}
        tech={tech}
      />
    </>
  );
};

export default Projects;
