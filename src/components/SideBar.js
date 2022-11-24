import classes from './SideBar.module.css'

const SideBar = () => {
  return (
    <div className={classes.sidebar}>

      <img className={classes.icon} src="github.png"/>
      <img className={classes.icon} src="linkedin.png"/>
      <img className={classes.icon} src="mail.png"/>
      <img className={classes.icon} src="resume.png"/>

    </div>
  );
}

export default SideBar;