import './project.css'
import img from './imgg.png'

const projects = [
  {
    name: "collegeDuniya.com",
    image: img, 
    liveLink: "https://college-duniya-614kp01n3-vinayaks-projects-e13254d7.vercel.app/", 
    githubLink: "https://github.com/Vinayak-Sannaik/collegeDuniya",
  },
  {
    name: "Issue-Tracker.com",
    image: img ,
    liveLink: "https://github.com/Vinayak-Sannaik/Issue-Tracker",
    githubLink: "https://issuetracker-5ms8.onrender.com",
  },
  {
    name: "Track-Habit",
    image: img ,
    liveLink: "https://vinayak-sannaik.github.io/Track-Habit/",
    githubLink: "https://github.com/Vinayak-Sannaik/Track-Habit?tab=readme-ov-file",
  },
  {
    name: "trading-bot",
    image: img, 
    liveLink: "https://github.com/Vinayak-Sannaik/trading-bot",
    githubLink: "https://github.com/Vinayak-Sannaik/trading-bot",
  },
  {
    name: "Note-Meal.com",
    image: img, 
    liveLink: "https://vinayak-sannaik.github.io/MealAPITest/",
    githubLink: "https://github.com/Vinayak-Sannaik/MealAPITest",
  },
  {
    name: "Mark-notes.com",
    image: img, 
    liveLink: "https://marknotes-ten.vercel.app/",
    githubLink: "https://github.com/Vinayak-Sannaik/marknotes/blob/main/README.md",
  },
  {
    name: "To-Do",
    image: img, 
    liveLink: "https://vinayak-sannaik.github.io/todo/",
    githubLink: "https://github.com/Vinayak-Sannaik",
  },
  
];

const ProjectSection = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <img src={project.image} alt={project.name} className="project-image" />
            <h3>{project.name}</h3>
            <div className="project-buttons">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="button"> Live</a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="button">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
