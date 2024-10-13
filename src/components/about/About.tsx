import img from './img.png';
import './about.css'

const About = () => {
  return (
    <div className="about-container">
      <img src={img} alt="About" />

      <h2>Vinayak Sannaik</h2>
      <h3>Frontend developer @ TCS</h3>
      <h2>Expert in Engineering || Best in development</h2>

    </div>
  );
}

export default About;