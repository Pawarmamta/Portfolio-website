import { ExternalLink, Github } from "lucide-react";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "URL Shortener",
    description:
      "URL shortener built with Node.js and Express.js, featuring rate limiting and basic analytics.",
    techStack: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js"],
    github: "https://github.com/Pawarmamta/urlx.png",
    demo: "https://url-shortner-beta-wine.vercel.app/",
    image: "/Projects/urlx.png",
  },
  {
    id: 2,
    title: "Real-time Notification System",
    description:
      "Real-time notifications built with ReactJS, Node.js, and Socket.io, optimized to handle high traffic.",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/Pawarmamta/Real-time-notification-system",
    demo: "#",
    image: "/Projects/Notification.jpg",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description:
      "Responsive portfolio built with Next.js and Tailwind CSS to showcase skills and projects.",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Pawarmamta/portpholio",
    demo: "#",
    image: "/Projects/personal_portfolio.png",
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
