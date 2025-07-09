import { Button } from "@/components/ui/button";
import { Github, Linkedin, Code } from "lucide-react";

const Hero = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/kousalyaChintha",
      icon: Github,
      color: "hover:text-neon-blue",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kameswara-laxmi-kousalya-chintha-b09160260/",
      icon: Linkedin,
      color: "hover:text-neon-blue",
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/kousalyachinta",
      icon: Code,
      color: "hover:text-neon-violet",
      label: "HR",
    },
  ];

  const scrollToSection = (href : string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-neon-blue/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-neon-violet/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
            <span className="text-sm font-medium">Open to Work</span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="block text-gradient animate-pulse-neon">
              Chintha Kameswara
            </span>
            <span className="block text-gradient animate-pulse-neon">
              Laxmi Kousalya
            </span>
          </h1>

          {/* Subtitle */}
          <div
            className="text-xl md:text-2xl lg:text-3xl font-light mb-8 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="text-neon-blue">AI & ML Developer</span>
            <span className="mx-2 text-muted-foreground">|</span>
            <span className="text-neon-violet">MERN Stack Developer</span>
          </div>

          {/* Description */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            Passionate AI & ML enthusiast crafting intelligent solutions through
            data science, machine learning, and cutting-edge technology
            innovations.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <Button
              className="btn-neon"
              onClick={() => scrollToSection("#projects")}
            >
              View My Work
            </Button>
            <a
              href="/kousalya_resume.pdf"
              download
              className="glass hover:shadow-neon-violet transition-all duration-300 px-4 py-2 rounded-md border border-neon-violet text-neon-violet text-center text-sm font-medium"
            >
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div
            className="flex justify-center space-x-6 animate-fade-in"
            style={{ animationDelay: "1s" }}
          >
            {socialLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 glass rounded-full transition-all duration-300 hover:scale-110 hover:shadow-neon-blue ${link.color} group`}
                title={link.name}
              >
                {link.label ? (
                  <span className="text-sm font-bold">{link.label}</span>
                ) : (
                  <link.icon className="w-5 h-5" />
                )}
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-neon-blue/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-neon-blue rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
