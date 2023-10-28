import Tilt from 'react-tilt';
import {motion} from 'framer-motion';
import {styles} from '../style';
import { services } from '../constantes';
import {fadeIn,textVariant} from '../utils/motion';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
    </>
  )
}

export default About