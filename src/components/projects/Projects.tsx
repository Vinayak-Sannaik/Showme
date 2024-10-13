import './project.css'

const projects = [
  {
    name: "Project One",
    image: "path/to/project-one-image.png", 
    liveLink: "https://example.com/project-one",
    githubLink: "https://github.com/username/project-one",
  },
  {
    name: "Project Two",
    image: "path/to/project-two-image.png", 
    liveLink: "https://example.com/project-two",
    githubLink: "https://github.com/username/project-two",
  },
  {
    name: "Project Three",
    image: "path/to/project-three-image.png", 
    liveLink: "https://example.com/project-three",
    githubLink: "https://github.com/username/project-three",
  },
  {
    name: "Project Two",
    image: "path/to/project-two-image.png", 
    liveLink: "https://example.com/project-two",
    githubLink: "https://github.com/username/project-two",
  },
  {
    name: "Project Three",
    image: "path/to/project-three-image.png", 
    githubLink: "https://github.com/username/project-three",
  },
];

const ProjectSection = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            {/* <img src={project.image} alt={project.name} className="project-image" /> */}
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
