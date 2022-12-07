import classes from './Project.module.css'

const Project = () => {
  return (
    <div className={classes.project}>
      <img className={classes.projectImage} src="example_project.png" alt="" />
    </div>
  );
}

export default Project;