import img from './img.png';
import './about.css'

const About = () => {
  return (
    <div className="about-container">
      <img src={img} alt="About" />
      
      <h2 className='heading'>Vinayak Sannaik</h2>
      <h3 className='sub-heading'>Frontend developer @ TCS</h3>
      <h2 className='heading'>Best Engineer | Good Developer</h2>

    </div>
  );
}

export default About;