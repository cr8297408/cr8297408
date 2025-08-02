import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Byte4Bit',
      role: 'Desarrollador Backend',
      period: 'Enero 2023 – Actualidad',
      projects: [
        {
          name: 'Xell',
          url: 'https://xell.shop/',
          description: 'Sistema de gestión empresarial en la nube',
          achievements: [
            'Migración exitosa de arquitectura monolítica a microservicios en AWS Lambda',
            'Mejora significativa en la escalabilidad y mantenimiento del sistema',
            'Reducción de costos operativos mediante infraestructura serverless'
          ]
        },
        {
          name: '88Pay',
          url: 'https://88pay.io/',
          description: 'Gateway de pagos de alto riesgo',
          achievements: [
            'Diseño e implementación completa de la arquitectura desde cero',
            'Optimización de costos con AWS y herramientas DevOps',
            'Desarrollo del backend y frontend principales'
          ]
        }
      ]
    },
    {
      company: 'Kabalaw',
      role: 'Líder de Desarrollo Backend',
      period: 'Julio 2022 – Enero 2023',
      achievements: [
        'Rediseño de API existente para mejor escalabilidad',
        'Implementación de estándares de buenas prácticas',
        'Creación de herramientas de productividad para desarrollo',
        'Reducción de tiempos de entrega con generadores de código'
      ]
    },
    {
      company: 'Bioscenter',
      role: 'Desarrollador Backend Freelance',
      period: 'Marzo 2022',
      achievements: [
        'Diseño e implementación de sistema de punto de venta',
        'Arquitectura distribuida con gestión local y en la nube',
        'Documentación completa con Swagger',
        'Creación de Core reutilizable para futuros desarrollos'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Experiencia
          </h2>
        </div>

        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                  <p className="text-indigo-300">{exp.role}</p>
                </div>
                <span className="inline-block mt-2 md:mt-0 px-4 py-1 bg-indigo-900/50 text-indigo-200 rounded-full text-sm font-medium">
                  {exp.period}
                </span>
              </div>

              {exp.projects ? (
                <div className="space-y-6">
                  {exp.projects.map((project, pIdx) => (
                    <div key={pIdx} className="ml-4 pl-4 border-l-2 border-indigo-500/30">
                      <h4 className="text-xl font-semibold text-white mb-2">
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
                          {project.name}
                        </a>
                        <span className="text-gray-400 text-sm font-normal ml-2">
                          {project.description}
                        </span>
                      </h4>
                      <ul className="list-disc list-inside space-y-2 mt-3">
                        {project.achievements.map((ach, aIdx) => (
                          <li key={aIdx} className="text-gray-300">{ach}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="list-disc list-inside space-y-2 ml-4">
                  {exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="text-gray-300">{ach}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 