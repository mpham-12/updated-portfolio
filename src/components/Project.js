import classes from './Project.module.css'

const Project = () => {
  return (
    <div className={classes.project}>
      <img className={classes.projectImage} src="example_project.png" alt="" />
      <div className={classes.overlay}>
        <h2 className={classes.title}>Project 1</h2>
      </div>
    </div>
  );
}

export default Project;