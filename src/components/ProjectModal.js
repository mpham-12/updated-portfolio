import classes from './ProjectModal.module.css';
import ReactDOM from 'react-dom';


const BackDrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClose}>
    </div>
  )
}
const ProjectOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        {props.children}
      </div>
    </div>
  )
}

const portalElement=document.getElementById('overlays')

const ProjectModal = (props) => {
  return (
    <div className={classes.popup}>
      {ReactDOM.createPortal(<BackDrop onClose={props.onCloseProject} />, portalElement)}
      {ReactDOM.createPortal(<ProjectOverlay>{props.children}</ProjectOverlay>, portalElement)}
    </div>
  );
}

export default ProjectModal;