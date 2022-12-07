import classes from './Project.module.css'

const Project = (props) => {
  return (
    <div className={classes.project}>
      <img className={classes.projectImage} src={props.image} alt="" />
      <div className={classes.overlay}>
        <h2 className={classes.title}>{props.title}</h2>
      </div>
    </div>
  );
}

export default Project;