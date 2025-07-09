
const Achievements = () => {
  const achievements = [
    {
      title: "Top 5 Class Ranking",
      subtitle: "Consistent Performance",
      description: "Maintained top 5 position throughout academic journey with excellent grades",
      icon: "🏆",
      color: "neon-blue"
    },
    {
      title: "3rd Rank Achievement",
      subtitle: "5th Semester",
      description: "Received appreciation letter for securing 3rd rank in 5th semester",
      icon: "🎖️",
      color: "neon-violet"
    },
    {
      title: "HackerRank 5-Star",
      subtitle: "Python & Java",
      description: "Achieved 5-star ratings in both Python and Java programming on HackerRank",
      icon: "⭐",
      color: "neon-cyan"
    },
    {
      title: "200+ Problems Solved",
      subtitle: "Multiple Platforms",
      description: "Solved over 200 coding problems across LeetCode, GeeksforGeeks, and CodeChef",
      icon: "💻",
      color: "neon-pink"
    }
  ];

  const certifications = [
    { name: "Python (Basic)", provider: "HackerRank", color: "neon-blue" },
    { name: "Java (Basic)", provider: "HackerRank", color: "neon-violet" },
    { name: "C Programming", provider: "Spoken Tutorial", color: "neon-cyan" },
    { name: "Java Programming", provider: "Spoken Tutorial", color: "neon-pink" },
    { name: "Python Programming", provider: "Spoken Tutorial", color: "neon-blue" },
    { name: "Introduction to Data Science with Python", provider: "EDX", color: "neon-violet" },
    { name: "Web Development", provider: "SkillUp", color: "neon-cyan" }
  ];

  return (
    <section id="achievements" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Achievements & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-violet mx-auto rounded-full"></div>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-neon-blue">Major Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="card-glass text-center hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h4 className={`text-xl font-bold mb-2 text-${achievement.color}`}>
                  {achievement.title}
                </h4>
                <p className="font-semibold text-foreground mb-3">
                  {achievement.subtitle}
                </p>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12 text-neon-violet">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className="card-glass hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className={`font-semibold text-${cert.color} mb-1`}>
                      {cert.name}
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      {cert.provider}
                    </p>
                  </div>
                  <div className="text-2xl">🏅</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
