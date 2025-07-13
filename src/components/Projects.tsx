import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Project {
  name: string;
  description: string;
  emoji: string;
  color: string;
  gradient: string;
}

const projects: Project[] = [
  {
    name: 'SmartCoder Labs',
    description: 'Agencia de desarrollo automatizada impulsada por agentes de IA que orquestan análisis, generación de código, testing, despliegue y documentación.',
    emoji: '🧠',
    color: 'from-blue-500 to-purple-600',
    gradient: 'from-blue-400 to-purple-500',
  },
  {
    name: 'Xell',
    description: 'Plataforma SaaS para PYMEs, migrada a microservicios serverless con AWS Lambda.',
    emoji: '🏢',
    color: 'from-green-500 to-blue-600',
    gradient: 'from-green-400 to-blue-500',
  },
  {
    name: '88Pay',
    description: 'Pasarela de pagos de alto riesgo con arquitectura desacoplada y monitoreo inteligente.',
    emoji: '💳',
    color: 'from-orange-500 to-red-600',
    gradient: 'from-orange-400 to-red-500',
  },
  {
    name: 'Eliox',
    description: 'Web scraper de información inmobiliaria con enfoque legal y de seguros.',
    emoji: '🏠',
    color: 'from-purple-500 to-pink-600',
    gradient: 'from-purple-400 to-pink-500',
  },
  {
    name: 'POS Modular',
    description: 'Software para comercios offline/online con arquitectura híbrida documentada.',
    emoji: '🛒',
    color: 'from-cyan-500 to-blue-600',
    gradient: 'from-cyan-400 to-blue-500',
  },
];

const Projects: React.FC = () => {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { elementRef: projectsRef, isVisible: projectsVisible } = useScrollAnimation({ threshold: 0.3 });
  const { elementRef: smartCoderRef, isVisible: smartCoderVisible } = useScrollAnimation({ threshold: 0.4 });
  const { elementRef: featuresRef, isVisible: featuresVisible } = useScrollAnimation({ threshold: 0.5 });
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ threshold: 0.6 });

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            🧪 Proyectos Relevantes
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Una selección de proyectos que demuestran mi experiencia en diferentes tecnologías y enfoques
          </p>
        </div>

        {/* Projects Grid */}
        <div
          ref={projectsRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 transition-all duration-1000 ease-out ${projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          style={{ transitionDelay: '200ms' }}
        >
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="group glassmorphism-dark p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 transform hover:scale-105"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.gradient} flex items-center justify-center text-3xl flex-shrink-0`}>
                  {project.emoji}
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                    {project.name}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SmartCoder Labs Special Section */}
        <div
          ref={smartCoderRef}
          className={`glassmorphism-dark p-12 rounded-3xl max-w-6xl mx-auto transition-all duration-1000 ease-out ${smartCoderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              🧠 SmartCoder Labs – Agencia Automatizada por IA
            </h3>
            <div className="flex justify-center mb-6">
              <img
                src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=667EEA&center=true&vCenter=true&width=600&lines=Agencia+de+desarrollo+automatizada;Impulsada+por+agentes+de+IA;Arquitectura+inteligente+y+escalable"
                alt="Typing SVG"
                className="rounded-xl"
              />
            </div>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              <strong>SmartCoderLabs</strong> es una agencia de desarrollo de software automatizada,
              impulsada por agentes de IA que orquestan tareas como análisis, generación de código,
              testing, despliegue y documentación.
            </p>
          </div>

          {/* Features Grid */}
          <div
            ref={featuresRef}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 transition-all duration-1000 ease-out ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="glassmorphism-light p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Arquitectura basada en agentes</h4>
              <p className="text-sm text-gray-400">PM-Agent, TechLead-Agent, Dev-Agent, Test-Agent, Infra-Agent</p>
            </div>

            <div className="glassmorphism-light p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Scaffolder inteligente</h4>
              <p className="text-sm text-gray-400">Por stack (NestJS, Next.js, Flutter)</p>
            </div>

            <div className="glassmorphism-light p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Testing automatizado</h4>
              <p className="text-sm text-gray-400">Con validación semántica (LLM Validator)</p>
            </div>

            <div className="glassmorphism-light p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="font-semibold text-white mb-2">CI/CD serverless</h4>
              <p className="text-sm text-gray-400">En Vercel, Fly.io</p>
            </div>
          </div>

          {/* CTA Button */}
          <div
            ref={ctaRef}
            className={`text-center mt-8 transition-all duration-1000 ease-out ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ transitionDelay: '800ms' }}
          >
            <a
              href="https://smart-coder-landing.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <img
                src="https://img.shields.io/badge/🌐%20Ver%20Proyecto-smart--coder--landing.vercel.app-667eea?style=for-the-badge&logoColor=white"
                alt="Ver Proyecto"
                className="h-8"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 