import React, { useEffect } from 'react';
import { useAnimation, useInView, motion } from "framer-motion";
import { AiFillGithub, AiOutlineExport } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import PropTypes from 'prop-types'; // Using PropTypes for defining prop types
import "./projectsmodal.css"

const ProjectModal = ({
  modalContent,
  projectLink,
  setIsOpen,
  imgSrc,
  isOpen,
  title,
  code,
  tech,
}) => {
  useEffect(() => {
    const body = document.querySelector('body');

    if (isOpen) {
      body.style.overflowY = 'hidden';
    } else {
      body.style.overflowY = 'scroll';
    }
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="modal" onClick={closeModal}>
      <button className="closeModalBtn" onClick={closeModal}>
        <MdClose />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className="modalCard"
      >
        <img
          src={imgSrc}
          alt={`An image of the ${title} project.`}
          className="modalImage"
        />
        <div className="modalContent">
          <h4>{title}</h4>
          <div className="modalTech">{tech.join(' - ')}</div>

          <div className="suppliedContent">{modalContent}</div>

          <div className="modalFooter">
            <p className="linksText">
              Project Links<span>.</span>
            </p>
            <div className="links">
              <a href={code} target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
                Source code
              </a>
              <a href={projectLink} target="_blank" rel="noopener noreferrer">
                <AiOutlineExport />
                Live project
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

ProjectModal.propTypes = {
  modalContent: PropTypes.element.isRequired,
  projectLink: PropTypes.string.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  imgSrc: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  tech: PropTypes.array.isRequired,
};

export default ProjectModal;
