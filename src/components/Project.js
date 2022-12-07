import { useState } from 'react';
import classes from './Project.module.css'
import ProjectModal from './ProjectModal';

const Project = (props) => {
  const [showModal, setShowModal] = useState(false);

  const openProject = () => {
    setShowModal(true)
  };

  const closeProject = () => {
    setShowModal(false)
  };

  const projectDetails = <div className={classes.projectDetails}>
    <h2>{props.title}</h2>
    <img className={classes.modalImage} src={props.image} alt="" />
    <p>{props.description}</p>
    <a className={classes.githubUrl} href={props.github} target='_blank'>Learn More</a>
    <a className={classes.liveUrl} href={props.liveLink} target='_blank'>Live App</a>
  </div>

  return (
    <>
      <div className={classes.project} onClick={openProject}>
        <img className={classes.projectImage} src={props.image} alt="" />
        <div className={classes.overlay}>
          <h2 className={classes.title}>{props.title}</h2>
        </div>
      </div>
      {showModal && <ProjectModal onCloseProject={closeProject}>{projectDetails}</ProjectModal>}
    </>
  );
}

export default Project;