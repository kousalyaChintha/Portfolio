
const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-violet mx-auto rounded-full"></div>
          </div>

          

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue to-neon-violet"></div>
            {/* Second Experience Item */}
            <div className="relative pl-20 pb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
  {/* Timeline Dot */}
  <div className="absolute left-6 top-6 w-4 h-4 bg-neon-violet rounded-full shadow-neon-violet animate-glow"></div>

  <div className="card-glass">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
      <div>
        <h3 className="text-2xl font-semibold text-neon-violet mb-2">
          MERN Stack Developer
        </h3>
        <h4 className="text-xl text-neon-blue mb-2">Yajurva</h4>
        <p className="text-muted-foreground">Virtual</p>
      </div>
      <div className="mt-4 md:mt-0">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-neon-violet/20 text-neon-violet">
          April 2024 – June 2024
        </span>
      </div>
    </div>

    <div className="space-y-4">
      <p className="text-muted-foreground leading-relaxed">
        Gained hands-on experience in full-stack development using the MERN stack. Built and deployed dynamic web applications, created and consumed RESTful APIs, managed MongoDB databases, and developed responsive, reusable UI components using React.js.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-gradient-to-br from-neon-violet/10 to-transparent rounded-lg border border-neon-violet/20">
          <h5 className="font-semibold text-neon-violet mb-2">Frontend Development</h5>
          <p className="text-sm text-muted-foreground">
            Designed and implemented responsive user interfaces using React.js, leveraging hooks, components, and routing.
          </p>
        </div>
        <div className="p-4 bg-gradient-to-br from-neon-blue/10 to-transparent rounded-lg border border-neon-blue/20">
          <h5 className="font-semibold text-neon-blue mb-2">Backend Development</h5>
          <p className="text-sm text-muted-foreground">
            Built RESTful APIs using Express.js and Node.js to handle server-side logic, routing, and integration with databases.
          </p>
        </div>
        <div className="p-4 bg-gradient-to-br from-neon-pink/10 to-transparent rounded-lg border border-neon-pink/20">
          <h5 className="font-semibold text-neon-pink mb-2">Database Integration</h5>
          <p className="text-sm text-muted-foreground">
            Worked with MongoDB and Mongoose for schema design, database operations, and seamless API integration.
          </p>
        </div>
        <div className="p-4 bg-gradient-to-br from-neon-cyan/10 to-transparent rounded-lg border border-neon-cyan/20">
          <h5 className="font-semibold text-neon-cyan mb-2">Version Control & Deployment</h5>
          <p className="text-sm text-muted-foreground">
            Used Git and GitHub for collaborative development and deployed applications on platforms like Vercel and Render.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-6">
        {[
          'MongoDB',
          'Express.js',
          'React.js',
          'Node.js',
          'JavaScript',
          'REST APIs',
          'Mongoose',
          'Git',
          'Tailwind CSS'
        ].map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs rounded-full glass border border-neon-violet/30 text-neon-violet"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
</div>

            {/* First Experience Item */}
            <div className="relative pl-20 pb-12 animate-fade-in">
              {/* Timeline Dot */}
              <div className="absolute left-6 top-6 w-4 h-4 bg-neon-blue rounded-full shadow-neon-blue animate-glow"></div>

              <div className="card-glass">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-neon-blue mb-2">
                      Data Science & ML Intern
                    </h3>
                    <h4 className="text-xl text-neon-violet mb-2">Brainovision</h4>
                    <p className="text-muted-foreground">Virtual</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-neon-blue/20 text-neon-blue">
                      Jun 2024 – Aug 2024
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Gained hands-on experience in data science and machine learning workflows, 
                    working with real-world datasets and implementing end-to-end ML solutions.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gradient-to-br from-neon-blue/10 to-transparent rounded-lg border border-neon-blue/20">
                      <h5 className="font-semibold text-neon-blue mb-2">Data Preprocessing</h5>
                      <p className="text-sm text-muted-foreground">
                        Dataset preprocessing, handling missing values and outliers, data cleaning and transformation
                      </p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-neon-violet/10 to-transparent rounded-lg border border-neon-violet/20">
                      <h5 className="font-semibold text-neon-violet mb-2">Data Analysis</h5>
                      <p className="text-sm text-muted-foreground">
                        Conducted comprehensive data analysis using Python and Pandas for insights extraction
                      </p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-neon-cyan/10 to-transparent rounded-lg border border-neon-cyan/20">
                      <h5 className="font-semibold text-neon-cyan mb-2">Model Evaluation</h5>
                      <p className="text-sm text-muted-foreground">
                        Evaluated machine learning models based on accuracy metrics and performance optimization
                      </p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-neon-pink/10 to-transparent rounded-lg border border-neon-pink/20">
                      <h5 className="font-semibold text-neon-pink mb-2">Data Visualization</h5>
                      <p className="text-sm text-muted-foreground">
                        Visualized data trends and patterns using Matplotlib for effective communication
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Machine Learning', 'Data Analysis', 'Data Preprocessing'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full glass border border-neon-cyan/30 text-neon-cyan"
                      >
                        {tech}
                      </span>
                    ))}
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

export default Experience;