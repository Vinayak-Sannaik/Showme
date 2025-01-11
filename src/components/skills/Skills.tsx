import './skills.css'

const Skills = () => {
  const skills = [
    { name: "HTML", icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
{ name: "CSS", icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
{ name: "JavaScript", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
{ name: "React", icon: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png" },
{ name: "Node.js", icon: "https://cdn-icons-png.flaticon.com/512/919/919825.png" }, // Added Node.js
{ name: "SQL", icon: "https://cdn-icons-png.flaticon.com/512/2772/2772128.png" }, // Added SQL
{ name: "AWS Lambda", icon: "https://cdn-icons-png.flaticon.com/512/919/919825.png" } // Added AWS Lambda
{ name: "Redux", icon: "https://cdn-icons-png.flaticon.com/512/919/919831.png" },
{ name: "TypeScript", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png" },
{ name: "Bootstrap", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png" },
// { name: "Scss", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968358.png" },
{ name: "Tailwind CSS", icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
{ name: "Webpack", icon: "https://cdn-icons-png.flaticon.com/512/919/919851.png" },
{ name: "GitHub", icon: "https://cdn-icons-png.flaticon.com/512/733/733609.png" },
{ name: "Jest", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968517.png" },
{ name: "Figma", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png" },
{ name: "Rest API", icon: "https://cdn-icons-png.flaticon.com/512/919/919851.png" },
{ name: "AWS", icon: "https://cdn-icons-png.flaticon.com/512/873/873120.png" },


  ];
  

  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
