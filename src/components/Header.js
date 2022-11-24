import video from '../assets/video.mp4'
import classes from './Header.module.css'

const Header = () => {
  return (
    <div className={classes.header}>
      <video src={video} autoPlay loop muted />
      <div className={classes.content}>
        <p className={classes.contentp}>Hey! I'm Martin Pham, a Front-end Web Developer from Toronto, Canada.</p>
        <p className={classes.contentp}>I have a passion for creating captivating web-applications through meaningful and engaging user-experiences.</p>
      </div>
    </div>
  );
}

export default Header;