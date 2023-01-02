import classes from './SideBar.module.css'

const SideBar = () => {
  return (
    <div className={classes.sidebar}>

      <a href="http://www.github.com/mpham-12" target='_blank' rel="noreferrer"><img className={classes.icon} src="github.png" alt=""/></a>
      <a href="https://www.linkedin.com/in/martin-pham-dev/" target='_blank' rel="noreferrer"><img className={classes.icon} src="linkedin.png" alt=""/></a>
      <a href="mailto:martinpham.dev@gmail.com" target='_blank' rel="noreferrer"><img className={classes.icon} src="mail.png" alt=""/></a>
      <a href="https://resume.creddle.io/resume/11h9vyikajf" target='_blank' rel="noreferrer"><img className={classes.icon} src="resume.png" alt=""/></a>

    </div>
  );
}

export default SideBar;