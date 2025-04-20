import React, { useEffect, useRef, useState } from 'react';
import { Code, Layout, Database, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add('animate-fade-in');
            setMounted(true);
          } else {
            setMounted(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-slate-50 dark:bg-slate-800/50 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-teal-700 dark:text-teal-500">Me</span>
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-right" style={{ animationDelay: '200ms' }}>
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">
              Frontend Developer with a passion for creating engaging user experiences
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              I'm a dedicated frontend developer with expertise in building responsive,
              accessible, and performant web applications. With a strong foundation in modern
              JavaScript frameworks and a keen eye for design, I bridge the gap between
              functionality and aesthetics.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
              My journey in web development began with a fascination for creating interactive
              interfaces. Today, I leverage my skills in React, Next.js, and various styling
              frameworks to craft exceptional digital experiences that not only look great
              but also perform seamlessly.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-700 rounded-lg p-4 shadow-md transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-teal-100 dark:bg-teal-800/50 rounded-full flex items-center justify-center mr-2">
                    <Code size={18} className="text-teal-700 dark:text-teal-400" />
                  </div>
                  <h4 className="font-semibold">Frontend</h4>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Building responsive interfaces with modern frameworks
                </p>
              </div>

              <div className="bg-white dark:bg-slate-700 rounded-lg p-4 shadow-md transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-amber-100 dark:bg-amber-800/50 rounded-full flex items-center justify-center mr-2">
                    <Layout size={18} className="text-amber-700 dark:text-amber-400" />
                  </div>
                  <h4 className="font-semibold">Design</h4>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Creating intuitive and aesthetically pleasing UIs
                </p>
              </div>

              <div className="bg-white dark:bg-slate-700 rounded-lg p-4 shadow-md transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-800/50 rounded-full flex items-center justify-center mr-2">
                    <Database size={18} className="text-blue-700 dark:text-blue-400" />
                  </div>
                  <h4 className="font-semibold">Database</h4>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Working with MongoDB and Supabase for data management
                </p>
              </div>

              <div className="bg-white dark:bg-slate-700 rounded-lg p-4 shadow-md transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-800/50 rounded-full flex items-center justify-center mr-2">
                    <Sparkles size={18} className="text-purple-700 dark:text-purple-400" />
                  </div>
                  <h4 className="font-semibold">UX</h4>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Enhancing user experience through thoughtful interaction design
                </p>
              </div>
            </div>
          </div>

          <div className="animate-slide-left" style={{ animationDelay: '400ms' }}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-500/10 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-500/10 rounded-lg"></div>
              <div className="relative z-10 bg-white dark:bg-slate-700 p-6 rounded-lg shadow-xl">
                <h3 className="text-xl font-bold mb-4 text-teal-700 dark:text-teal-400">Key Skills</h3>

                <div className="space-y-4">
                  {[
                    { name: 'HTML/CSS', percentage: 95 },
                    { name: 'JavaScript', percentage: 90 },
                    { name: 'React.js', percentage: 85 },
                    { name: 'Next.js', percentage: 80 },
                    { name: 'Tailwind CSS', percentage: 90 },
                    { name: 'MongoDB', percentage: 75 },
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-1">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-teal-600 to-amber-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: mounted ? `${skill.percentage}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4 text-teal-700 dark:text-teal-400">Education</h3>
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-medium">Bachelor of Computer Science</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">University of Management and Technology, 2024-28</p>
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
