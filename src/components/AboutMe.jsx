import React from "react";
import { Briefcase, Code, User } from "lucide-react";

export const AboutMe = () => {
  return (
    <section id="About" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>

            <p className="text-muted-foreground">
              I'm developing my skills in web development through hands-on
              projects and continuous learning. I enjoy exploring how things
              work and growing step by step.
            </p>

            <p className="text-muted-foreground">
              I’m passionate about learning and excited to grow as a developer.
              This portfolio reflects the progress I’ve made and the journey I’m
              on.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a href="#contact" className="cosmic-button">
                Downlod Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover ">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className=" h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    I explore building responsive web apps with ReactJS,
                    Tailwind CSS, and Next.js, focusing on clean design and
                    improving performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover ">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className=" h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Profile</h4>
                  <p className="text-muted-foreground">
                    Computer Science student with a creative mindset and a
                    passion for learning through building real projects.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover ">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className=" h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Experience</h4>
                  <p className="text-muted-foreground">
                    Built projects like a URL shortener, artist app using
                    full-stack tools, deployed on GitHub and Vercel. Ask ChatGPT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
