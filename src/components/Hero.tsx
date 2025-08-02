import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.2 });
  const { elementRef: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation({ threshold: 0.3 });
  const { elementRef: socialRef, isVisible: socialVisible } = useScrollAnimation({ threshold: 0.4 });
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.5 });

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements with Parallax */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ transform: 'translateZ(-1px) scale(2)' }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: 'translateZ(-2px) scale(1.5)',
            animationDelay: '2s'
          }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-2xl"
          style={{ transform: 'translateZ(-0.5px) scale(1.2)' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Title - Slide Up */}
          <h1
            ref={titleRef}
            className={`text-5xl md:text-7xl font-bold text-gradient transition-all duration-1000 ease-out ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
          >
            👋 Hola, soy Cesar Ruiz
          </h1>

          {/* Subtitle - Slide Up with Delay */}
          <p
            ref={subtitleRef}
            className={`text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ease-out ${subtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            style={{ transitionDelay: '200ms' }}
          >
            <strong className="text-white">Backend Developer • Node.js Enthusiast • Automation & AI Explorer</strong><br />
            Construyo software elegante, eficiente y escalable. Me apasiona la automatización,<br />
            la arquitectura limpia y la inteligencia artificial aplicada al desarrollo moderno.
          </p>

          {/* Social Links - Zoom In */}
          <div
            ref={socialRef}
            className={`flex justify-center space-x-4 transition-all duration-1000 ease-out ${socialVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            style={{ transitionDelay: '400ms' }}
          >
            <a
              href="mailto:cr8297408@gmail.com"
              className="px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <img
                src="https://img.shields.io/badge/📧%20Email-cr8297408@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white&labelColor=EA4335"
                alt="Email"
                className="h-8"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/cesarbackend"
              className="px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <img
                src="https://img.shields.io/badge/💼%20LinkedIn-Cesar%20Ruiz-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=0A66C2"
                alt="LinkedIn"
                className="h-8"
              />
            </a>
            <a
              href="https://github.com/cr8297408"
              className="px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <img
                src="https://img.shields.io/badge/🐙%20GitHub-cr8297408-181717?style=for-the-badge&logo=github&logoColor=white&labelColor=181717"
                alt="GitHub"
                className="h-8"
              />
            </a>
          </div>

          {/* GitHub Stats - Fade In with Stagger */}
          {/* <div
            ref={statsRef}
            className={`flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 transition-all duration-1000 ease-out ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="glassmorphism-dark p-4 rounded-2xl">
              <img
                src="https://github-readme-stats.vercel.app/api?username=cr8297408&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0D1117&title_color=58A6FF&icon_color=1F6FEB&text_color=C9D1D9&ring_color=58A6FF"
                alt="GitHub Stats"
                className="rounded-xl"
              />
            </div>
            <div className="glassmorphism-dark p-4 rounded-2xl">
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=cr8297408&theme=tokyonight&hide_border=true&background=0D1117&stroke=58A6FF&ring=58A6FF&fire=FF6B6B&currStreakLabel=C9D1D9"
                alt="GitHub Streak"
                className="rounded-xl"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero; 
