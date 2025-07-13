import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Skill {
  name: string;
  icon: string;
  category: string;
  color: string;
}

const skills: Skill[] = [
  // Backend
  { name: 'Node.js', icon: 'https://skillicons.dev/icons?i=nodejs', category: 'Backend', color: 'from-green-500 to-green-600' },
  { name: 'NestJS', icon: 'https://skillicons.dev/icons?i=nestjs', category: 'Backend', color: 'from-red-500 to-red-600' },
  { name: 'Express', icon: 'https://skillicons.dev/icons?i=express', category: 'Backend', color: 'from-gray-500 to-gray-600' },
  { name: 'TypeScript', icon: 'https://skillicons.dev/icons?i=typescript', category: 'Backend', color: 'from-blue-500 to-blue-600' },
  { name: 'GraphQL', icon: 'https://skillicons.dev/icons?i=graphql', category: 'Backend', color: 'from-pink-500 to-pink-600' },

  // Databases
  { name: 'MySQL', icon: 'https://skillicons.dev/icons?i=mysql', category: 'Databases', color: 'from-blue-500 to-blue-600' },
  { name: 'MongoDB', icon: 'https://skillicons.dev/icons?i=mongodb', category: 'Databases', color: 'from-green-500 to-green-600' },
  { name: 'DynamoDB', icon: 'https://skillicons.dev/icons?i=dynamodb', category: 'Databases', color: 'from-yellow-500 to-yellow-600' },
  { name: 'Redis', icon: 'https://skillicons.dev/icons?i=redis', category: 'Databases', color: 'from-red-500 to-red-600' },
  { name: 'Cassandra', icon: 'https://skillicons.dev/icons?i=cassandra', category: 'Databases', color: 'from-blue-500 to-blue-600' },

  // DevOps
  { name: 'Docker', icon: 'https://skillicons.dev/icons?i=docker', category: 'DevOps', color: 'from-blue-500 to-blue-600' },
  { name: 'Terraform', icon: 'https://skillicons.dev/icons?i=terraform', category: 'DevOps', color: 'from-purple-500 to-purple-600' },
  { name: 'AWS', icon: 'https://skillicons.dev/icons?i=aws', category: 'DevOps', color: 'from-yellow-500 to-yellow-600' },
  { name: 'GH Actions', icon: 'https://skillicons.dev/icons?i=githubactions', category: 'DevOps', color: 'from-gray-500 to-gray-600' },

  // Frontend
  { name: 'React', icon: 'https://skillicons.dev/icons?i=react', category: 'Frontend', color: 'from-blue-500 to-blue-600' },
  { name: 'Next.js', icon: 'https://skillicons.dev/icons?i=nextjs', category: 'Frontend', color: 'from-gray-500 to-gray-600' },
  { name: 'Remix', icon: 'https://skillicons.dev/icons?i=remix', category: 'Frontend', color: 'from-blue-500 to-blue-600' },
  { name: 'Tailwind', icon: 'https://skillicons.dev/icons?i=tailwind', category: 'Frontend', color: 'from-cyan-500 to-cyan-600' },
];

const Skills: React.FC = () => {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { elementRef: backendRef, isVisible: backendVisible } = useScrollAnimation({ threshold: 0.3 });
  const { elementRef: databasesRef, isVisible: databasesVisible } = useScrollAnimation({ threshold: 0.4 });
  const { elementRef: devopsRef, isVisible: devopsVisible } = useScrollAnimation({ threshold: 0.5 });
  const { elementRef: frontendRef, isVisible: frontendVisible } = useScrollAnimation({ threshold: 0.6 });
  const { elementRef: infoRef, isVisible: infoVisible } = useScrollAnimation({ threshold: 0.7 });

  const categories = ['Backend', 'Databases', 'DevOps', 'Frontend'];
  const categoryColors = {
    Backend: 'from-blue-500 to-purple-600',
    Databases: 'from-green-500 to-blue-600',
    DevOps: 'from-purple-500 to-pink-600',
    Frontend: 'from-cyan-500 to-blue-600',
  };

  const categoryRefs = {
    Backend: backendRef,
    Databases: databasesRef,
    DevOps: devopsRef,
    Frontend: frontendRef,
  };

  const categoryVisibility = {
    Backend: backendVisible,
    Databases: databasesVisible,
    DevOps: devopsVisible,
    Frontend: frontendVisible,
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            🚀 Tech Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tecnologías y herramientas que utilizo para crear soluciones innovadoras y escalables
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <div
              key={category}
              ref={categoryRefs[category as keyof typeof categoryRefs]}
              className={`transition-all duration-1000 ease-out ${categoryVisibility[category as keyof typeof categoryVisibility]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="mb-8">
                <h3 className={`text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]} bg-clip-text text-transparent`}>
                  {category === 'Backend' && '🧠 Backend Development'}
                  {category === 'Databases' && '🗄️ Bases de Datos'}
                  {category === 'DevOps' && '🛠️ DevOps & Arquitectura'}
                  {category === 'Frontend' && '🎨 Frontend Development'}
                </h3>
                <div className={`w-24 h-1 bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]} rounded-full`}></div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="group glassmorphism-dark p-6 rounded-2xl text-center hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:rotate-1"
                      style={{
                        animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms`,
                        transitionDelay: `${skillIndex * 50}ms`
                      }}
                    >
                      <div className="mb-4">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h4 className="font-semibold text-white group-hover:text-gradient transition-colors duration-300">
                        {skill.name}
                      </h4>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div
          ref={infoRef}
          className={`mt-16 text-center transition-all duration-1000 ease-out ${infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="glassmorphism-dark p-8 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              🎯 Enfoque en Calidad
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Me especializo en arquitecturas limpias, testing automatizado y despliegues continuos.
              Cada proyecto se desarrolla con las mejores prácticas y tecnologías modernas para garantizar
              escalabilidad y mantenibilidad a largo plazo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 