import video from '../assets/video.mp4'
import classes from './Header.module.css'

const Header = () => {
  return ( 
    <div className={classes.header}>
      <video src={video} autoPlay loop muted/>
    </div>
   );
}
 
export default Header;