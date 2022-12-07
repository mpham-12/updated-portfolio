import Project from './Project';
import classes from './Projects.module.css'

const projects = [
  {
    title: 'Rest & Press',
    image: './juiceApp.png',
    description: '',
    techStack: '',
    githubUrl: '',
    liveUrl: '',
  },
  {
    title: 'PluggedIn',
    image: './juiceApp.png',
    description: '',
    techStack: '',
    githubUrl: '',
    liveUrl: '',
  },
  {
    title: 'Chat Time',
    image: './chat.png',
    description: '',
    techStack: '',
    githubUrl: '',
    liveUrl: '',
  },
  {
    title: 'Rest & Press',
    image: './juiceApp.png',
    description: '',
    techStack: '',
    githubUrl: '',
    liveUrl: '',
  },
]

const Projects = () => {
  return (
    <div className={classes.projects}>
      <h2 className={classes.heading}>My Work</h2>
      <div className={classes.content}>


        {projects.map((project, i) => {
          return <Project key={i} title={project.title} image={project.image}/>
        })}
      </div>
    </div>
  );
}

export default Projects;