import Project from './Project';
import classes from './Projects.module.css'

const projects = [
  {
    title: 'Rest & Press',
    image: './juice.png',
    description: '',
    techStack: '',
    githubUrl: '',
    liveUrl: '',
  },
  {
    title: 'PluggedIn',
    image: './movie.png',
    description: '',
    techStack: '',
    githubUrl: '',
    liveUrl: '',
  },
  {
    title: 'Chat Time',
    image: './chat.png',
    description: 'Chat Time is an instant-messaging app that allows friends and strangers to chat in real time. Simply sign up and select a user to begin chatting.',
    techStack: '',
    githubUrl: 'https://github.com/mpham-12/chat-time',
    liveUrl: '',
  },
  {
    title: 'Day Trip',
    image: './daytrip.png',
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
          return <Project key={i} title={project.title} image={project.image} description={project.description} techStack={project.techStack} github={project.githubUrl} liveLink={project.liveUrl}/>
        })}
      </div>
    </div>
  );
}

export default Projects;