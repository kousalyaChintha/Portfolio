
const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-neon">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-violet mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <div className="card-glass">
                <h3 className="text-2xl font-semibold mb-4 text-neon-blue">
                  AI & ML Enthusiast
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dedicated AI student with hands-on experience in machine learning, data analysis, and 
                  front-end development. Currently pursuing B.Tech in AI & ML with a passion for creating 
                  intelligent solutions that solve real-world problems.
                </p>
              </div>

              <div className="card-glass">
                <h3 className="text-2xl font-semibold mb-4 text-neon-violet">
                  Data Science Expertise
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Proficient in Python, machine learning algorithms, and data visualization. 
                  Experienced in dataset preprocessing, handling missing values, and model evaluation 
                  with strong analytical and problem-solving skills.
                </p>
              </div>

              <div className="card-glass">
                <h3 className="text-2xl font-semibold mb-4 text-neon-cyan">
                  Full Stack Development
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Skilled in modern web technologies including React.js, JavaScript, and responsive design. 
                  Combines technical expertise with creative design to build engaging user experiences.
                </p>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="card-glass p-8 text-center">
                <div className="space-y-8">
                  <div>
                    <div className="text-4xl font-bold text-neon-blue mb-2">8.77</div>
                    <div className="text-muted-foreground">Current CGPA</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-neon-violet mb-2">200+</div>
                    <div className="text-muted-foreground">Coding Problems Solved</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-neon-cyan mb-2">5★</div>
                    <div className="text-muted-foreground">HackerRank Python & Java</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-neon-pink mb-2">Top 5</div>
                    <div className="text-muted-foreground">Consistent Class Ranking</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
