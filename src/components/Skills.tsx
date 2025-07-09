import { Code, Database, Wrench, Cpu, BookOpen, Settings } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      color: "neon-blue",
      icon: Code,
      skills: [
        { name: "Python", level: 95, icon: "🐍" },
        { name: "Java", level: 85, icon: "☕" },
        { name: "C++", level: 80, icon: "⚙️" },
        { name: "C", level: 75, icon: "C" },
        { name: "JavaScript", level: 85, icon: "JS" },
      ],
    },
    {
      title: "Frameworks",
      color: "neon-violet",
      icon: Settings,
      skills: [
        { name: "React.js", level: 90, icon: "⚛️" },
        { name: "Express.js", level: 80, icon: "E" },
        { name: "Bootstrap", level: 85, icon: "B" },
        { name: "Tailwind CSS", level: 90, icon: "T" },
      ],
    },
    {
      title: "Libraries",
      color: "neon-cyan",
      icon: BookOpen,
      skills: [
        { name: "Pandas", level: 90, icon: "🐼" },
        { name: "NumPy", level: 85, icon: "🔢" },
        { name: "Matplotlib", level: 85, icon: "📊" },
      ],
    },
    {
      title: "Databases",
      color: "neon-pink",
      icon: Database,
      skills: [{ name: "MongoDB", level: 80, icon: "M" }],
    },
    {
      title: "Technologies",
      color: "neon-blue",
      icon: Cpu,
      skills: [
        { name: "HTML", level: 95, icon: "H" },
        { name: "CSS", level: 90, icon: "C" },
        { name: "Data Structures", level: 85, icon: "🏗️" },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-violet mx-auto rounded-full"></div>
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Comprehensive expertise in AI, ML, and modern web development
            technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="card-glass animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`p-3 rounded-lg glass border border-${category.color}/30 mr-4`}
                  >
                    <IconComponent
                      className={`w-6 h-6 text-${category.color}`}
                    />
                  </div>
                  <h3 className={`text-2xl font-bold text-${category.color}`}>
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-lg bg-${category.color}/10 border border-${category.color}/30 flex items-center justify-center text-xs font-bold text-${category.color}`}
                          >
                            {skill.icon}
                          </div>
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted/30 rounded-full h-3 overflow-hidden backdrop-blur-sm border border-border/20">
                        <div
                          className={`h-full bg-gradient-to-r from-neon-blue to-neon-blue/60 rounded-full transition-all duration-1000 ease-out shadow-sm animate-fade-in`}
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${
                              categoryIndex * 0.1 + skillIndex * 0.1
                            }s`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className={`text-${category.color} font-semibold`}>
                      {Math.round(
                        category.skills.reduce(
                          (acc, skill) => acc + skill.level,
                          0
                        ) / category.skills.length
                      )}
                      % Avg
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills */}
      </div>
    </section>
  );
};

export default Skills;
