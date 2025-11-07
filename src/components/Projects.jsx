import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Modern portfolio website built with React.js and Tailwind CSS featuring smooth animations, dark/light mode toggle, and responsive design optimized for all devices",
      tech: ["React.js", "Tailwind CSS", "Framer Motion", "Dark Mode"],
      features: [
        "Dark/Light Theme Toggle",
        "Smooth Animations",
        "Responsive Design",
        "Glassmorphism Effects",
      ],
      color: "neon-blue",
      gradient: "from-neon-blue/20 to-neon-cyan/20",
      live: "https://kousalya-portfolio.vercel.app",
      github: "https://github.com/kousalyaChintha/Portfolio",
    },
    {
      title: "InfiniteCode",
      description:
        "AI-powered Integrated Development Environment with intelligent code generation, smart auto-complete, and advanced debugging features for enhanced productivity",
      tech: ["React.js", "AI Integration", "JavaScript", "Node.js"],
      features: [
        "AI Code Generation",
        "Smart Auto-complete",
        "Real-time Collaboration",
        "Advanced Debugging",
      ],
      color: "neon-violet",
      gradient: "from-neon-violet/20 to-neon-pink/20",
      live: "https://infinite-code-delta.vercel.app/",
      github: "https://github.com/kousalyaChintha/InfiniteCode",
    },
    {
      title: "Vegetarian Restaurant Site",
      description:
        "Modern restaurant website featuring interactive menu displays, special offers showcase, customer testimonials, and seamless user experience with React and CSS Modules",
      tech: ["React.js", "CSS Modules", "JavaScript", "Responsive Design"],
      features: [
        "Interactive Menu",
        "Customer Testimonials",
        "Special Offers",
        "Mobile Optimized",
      ],
      color: "neon-cyan",
      gradient: "from-neon-cyan/20 to-neon-blue/20",
      live: "",
      github: "https://github.com/kousalyaChintha/Vegetarian-Restarunt",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-neon">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-violet mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Showcasing innovative AI & ML solutions built with modern
            technologies and best practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="card-glass group hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className={`h-2 w-full rounded-t-xl bg-gradient-to-r ${project.gradient} mb-6`}
              ></div>

              <div className="p-6 pt-0">
                <h3 className={`text-2xl font-bold mb-4 text-${project.color}`}>
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-foreground">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div
                          className={`w-1.5 h-1.5 bg-${project.color} rounded-full mr-3`}
                        ></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-foreground">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-xs rounded-full glass border border-${project.color}/30 text-${project.color}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ✅ Updated Buttons with working links */}
                <div className="flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-neon text-sm py-2 flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Preview
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 glass rounded-lg hover:shadow-neon-violet transition-all duration-300 flex items-center justify-center"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
