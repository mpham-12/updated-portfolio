import video from '../assets/video.mp4'
import classes from './Header.module.css'

const Header = () => {
  return (
    <div className={classes.header}>
      <video src={video} playsinline autoplay muted loop/>
      <div className={classes.content}>
        <p className={classes.contentp}>Hello, I'm Martin Pham.</p>
        <p className={classes.contentp}>I'm a Front-end Web Developer based in Toronto, Canada.</p>
      </div>
    </div>
  );
}

export default Header;