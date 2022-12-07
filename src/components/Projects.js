import Project from './Project';
import classes from './Projects.module.css'


const Projects = () => {
  return (
    <div className={classes.projects}>
      <h2 className={classes.heading}>My Work</h2>
      <div className={classes.content}>

        <Project />
      </div>
    </div>
  );
}

export default Projects;