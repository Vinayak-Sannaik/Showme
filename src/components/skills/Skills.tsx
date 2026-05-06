import './skills.css'

const Skills = () => {
  const skills = [
  // Frontend
  { name: "JavaScript", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
  { name: "TypeScript", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png" },
  { name: "React", icon: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png" },

  // Backend
  { name: "Node.js", icon: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
  { name: "NestJS", icon: "https://cdn-icons-png.flaticon.com/512/9307/9307648.png" },
  { name: "Express.js", icon: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
  { name: "REST API", icon: "https://cdn-icons-png.flaticon.com/512/2621/2621303.png" },
  { name: "GraphQL", icon: "https://cdn-icons-png.flaticon.com/512/7580/7580576.png" },
  { name: "WebSockets", icon: "https://cdn-icons-png.flaticon.com/512/2919/2919906.png" },

  // Databases
  { name: "PostgreSQL", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png" },
  { name: "SQL", icon: "https://cdn-icons-png.flaticon.com/512/2772/2772128.png" },
  { name: "Redis", icon: "https://cdn-icons-png.flaticon.com/512/919/919843.png" },
  { name: "MongoDB", icon: "https://cdn-icons-png.flaticon.com/512/2906/2906274.png" },

  // Cloud & DevOps
  { name: "AWS", icon: "https://cdn-icons-png.flaticon.com/512/873/873120.png" },
  { name: "AWS Lambda", icon: "https://cdn-icons-png.flaticon.com/512/873/873120.png" },
  { name: "Docker", icon: "https://cdn-icons-png.flaticon.com/512/919/919853.png" },
  { name: "CI/CD", icon: "https://cdn-icons-png.flaticon.com/512/2721/2721291.png" },
  { name: "GitHub Actions", icon: "https://cdn-icons-png.flaticon.com/512/733/733609.png" },
  { name: "GitHub", icon: "https://cdn-icons-png.flaticon.com/512/733/733609.png" },
  { name: "Webpack", icon: "https://cdn-icons-png.flaticon.com/512/919/919851.png" },

  // Geolocation
  { name: "PostGIS", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png" },
  { name: "Here Maps API", icon: "https://cdn-icons-png.flaticon.com/512/2991/2991592.png" },
  { name: "Mapbox", icon: "https://cdn-icons-png.flaticon.com/512/9307/9307574.png" },

  // Testing & Tools
  { name: "Jest", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968517.png" },
  { name: "Figma", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png" },
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
