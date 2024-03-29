import Project from './Project';
import classes from './Projects.module.css'

const projects = [
  {
    title: 'Volunteer Markham',
    image: './volunteermarkham.png',
    description: 'Volunteer Markham helps build a stronger community through innovative programs that connect volunteers to organizations that need them. This web application is hosted on WordPress and my responsibilities were to follow detailed wireframes and specifications to redesign the website, along with regular maintenaince.',
    techStack: 'HTML, CSS, Javascript, Wordpress',
    liveUrl: 'https://volunteermarkham.ca/',
  },
  {
    title: 'PluggedIn',
    image: './movie.png',
    description: <>PluggedIn is an app that displays updated movie information using TMDB's API. Users can view general information about a movie, and can filter through movies by genre and categories. *Before running this application, please visit <a href='https://cors-anywhere.herokuapp.com/corsdemo'>this link</a> and allow temporary access to the server.*</>,
    techStack: 'HTML, CSS, Javascript, React, React Router, The Movie DB API',
    githubUrl: 'https://github.com/mpham-12/movie-app',
    liveUrl: 'https://velvety-douhua-c0fc98.netlify.app',
  },
  {
    title: 'Chat Time',
    image: './chat.png',
    description: 'Chat Time is an instant-messaging app that allows friends and strangers to chat in real time. Simply sign up and select a user to begin chatting.',
    techStack: 'HTML, CSS, Javascript, React, React Router, Firebase',
    githubUrl: 'https://github.com/mpham-12/chat-time',
    liveUrl: 'https://bright-crisp-85c3a6.netlify.app',
  },
  {
    title: 'Rest & Press',
    image: './juice.png',
    description: 'Rest & Press is a front-end juice delivery app that offers organic cold-press juices. Users choose juices to add to their cart and submit their order after entering their delivery information into a form.',
    techStack: 'HTML, CSS, Javascript, React, Firebase',
    githubUrl: 'https://github.com/mpham-12/green-juice-app',
    liveUrl: 'https://cerulean-frangipane-fc82e0.netlify.app',
  }
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