import { ExternalLink, Github } from "lucide-react";
import { ArrowRight } from "lucide-react";

const projects = [
  {
  id: 1,
  title: "Virtual Memory Manager",
  description:
    "Web-based simulator for studying and comparing page replacement algorithms like FIFO, LRU, MRU, and Optimal. It provides real-time visualization and performance comparison of different algorithms.",
  techStack: [
    "React.js",
    "JavaScript",
    "HTML",
    "CSS",
    "Material-UI",
    "Firebase"
    
  ],
  github: "https://github.com/Pawarmamta/Virtual_MemoryManager",
  demo: "http://virtual-memory-manager.vercel.app/",
  image: "/Projects/pra.png",
},
  {
    id: 2,
    title: "URL Shortener",
    description:
       "URL shortener built with Node.js and Express.js, featuring rate limiting and basic analytics.",
    techStack:["HTML", "CSS", "JavaScript", "Node.js", "Express.js"],
    github: "https://github.com/Pawarmamta/url-shortner",
    demo: "https://url-shortner-beta-wine.vercel.app/",
    image: "/Projects/urlx.png",
  },
  {
  id: 3,
  title: "Next.js Portfolio Website",
  description:
    "Artistly is a platform to discover artists by category, location, and price. It includes a landing page, searchable artist dashboard, and an onboarding form for artists to register.",
  techStack: [
    "Next.js",
    "JavaScript",
    "HTML",
    "CSS"
  ],
  github: "https://github.com/Pawarmamta/artistly",
  demo: "https://artistly-nine-rosy.vercel.app/",
  image: "/Projects/Artistly.png",
},
];

export const ProjectsSection = () => {
  return (
    <section id="Project" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Feature <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Exploring web development through hands-on projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium bg-primary/20 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" text-center mt-12">
          <a
            href="https://github.com/Pawarmamta"
            target="_blank"
            className=" cosmic-button w-fit flex items-center mx-auto gap-2 "
          >
            {" "}
            Check My Github <ArrowRight size={16} />{" "}
          </a>
        </div>
      </div>
    </section>
  );
};
