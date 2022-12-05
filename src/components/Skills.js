import classes from './Skills.module.css'

const technologies = [
  'HTML',
  'CSS',
  'Javascript',
  'React',
  'Node',
  'Express',
  'PostgreSQL',
  'MongoDB',
  'Wordpress',
  'Shopify',
  'Squarespace',
  'Sanity IO'
]
const Skills = () => {
  return (
    <div className={classes.skills}>
      <h2 className={classes.heading}>A few technologies I've worked with</h2>
      <div className={classes.content}>
        {technologies.map((tech, i) => {
          return <span className={classes.tech} key={i}>
            <span className={classes.bullet}>&#8227;</span> {tech}
          </span>
        })}

      </div>
    </div>
  );
}

export default Skills;