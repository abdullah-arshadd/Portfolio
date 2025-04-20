import React, { useEffect, useRef } from 'react';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills = [
    { 
      category: 'Frontend', 
      items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js', 'Next.js'] 
    },
    { 
      category: 'Styling', 
      items: ['Tailwind CSS', 'Bootstrap', 'CSS Modules', 'Styled Components', 'SASS/SCSS'] 
    },
    { 
      category: 'Backend', 
      items: ['Node.js', 'Express.js', 'RESTful APIs', 'GraphQL'] 
    },
    { 
      category: 'Database', 
      items: ['MongoDB', 'Supabase', 'Firebase', 'PostgreSQL'] 
    },
    { 
      category: 'Tools', 
      items: ['Git', 'Webpack', 'Vite', 'npm', 'Figma', 'VS Code'] 
    },
    { 
      category: 'Other', 
      items: ['Responsive Design', 'Web Accessibility', 'SEO', 'Testing', 'Deployment'] 
    }
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-teal-700 dark:text-teal-500">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world. 
            From frontend frameworks to backend solutions, here's what I bring to the table.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div 
              key={skillGroup.category} 
              className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-slate-100 dark:border-slate-700 animate-fade-in-up"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <h3 className="text-xl font-bold mb-6 text-teal-700 dark:text-teal-500 border-b border-slate-200 dark:border-slate-700 pb-3">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-300 rounded-full text-sm font-medium hover:bg-teal-100 hover:text-teal-800 dark:hover:bg-teal-800/30 dark:hover:text-teal-300 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-teal-500/10 to-amber-500/10 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">My Development Process</h3>
            <p className="text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
              A structured approach to ensure quality and efficiency in every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                step: 1, 
                title: 'Planning', 
                description: 'Understanding requirements and mapping out the architecture'
              },
              { 
                step: 2, 
                title: 'Design', 
                description: 'Creating wireframes and visual designs for a cohesive user experience'
              },
              { 
                step: 3, 
                title: 'Development', 
                description: 'Building the application with clean, efficient, and maintainable code'
              },
              { 
                step: 4, 
                title: 'Testing & Launch', 
                description: 'Rigorous testing and smooth deployment to production'
              }
            ].map((process) => (
              <div 
                key={process.step}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md relative hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
                style={{ animationDelay: `${800 + process.step * 100}ms` }}
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-amber-500 dark:bg-amber-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {process.step}
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3 mt-2">
                  {process.title}
                </h4>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;