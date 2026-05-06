import img from "./img.png";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <img src={img} alt="About" />

      <h1 className="heading">Vinayak Sannaik</h1>
      <h2 className="sub-heading">Consultant @ TechVerito</h2>
      <h3 className="tagline">Passionate Engineer | Skilled Developer</h3>
    </div>
  );
};

export default About;
