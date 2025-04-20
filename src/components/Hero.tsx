import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.add('animate-fade-in');
    }
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden opacity-0 transition-opacity duration-1000"
    >
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-teal-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-12">
        <div className="order-2 md:order-1 animate-slide-up" style={{animationDelay: '300ms'}}>
          <div className="mb-4">
            <div className="inline-block py-1 px-3 mb-4 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 text-sm font-medium">
              Frontend Developer
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Hi, I'm <span className="text-teal-700 dark:text-teal-400">Muhammad Abdullah</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
            I craft responsive websites where technology meets creativity. 
            Transforming ideas into exceptional digital experiences.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 bg-teal-700 hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-700 text-white rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get in touch
            </a>
            <a 
              href="#projects" 
              className="inline-flex items-center px-6 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-lg transition-colors duration-300 hover:border-teal-500 dark:hover:border-teal-400 shadow-md hover:shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View work
            </a>
          </div>
          
          <div className="mt-8 flex items-center space-x-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="#" 
              className="text-slate-700 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 transition-colors duration-300"
              aria-label="Resume"
            >
              <FileText size={24} />
            </a>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center animate-slide-up" style={{animationDelay: '500ms'}}>
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl">
              <img 
                src="https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Muhammad Abdullah" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 px-4 py-2 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="text-sm font-medium text-slate-900 dark:text-white">Available for work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          aria-label="Scroll down"
          className="text-slate-400 hover:text-teal-500 dark:text-slate-500 dark:hover:text-teal-400 transition-colors duration-300"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;