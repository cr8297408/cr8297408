import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            📫 Contacto
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ¡Siempre abierto a colaborar en proyectos innovadores y desafiantes!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glassmorphism-dark p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-gradient mb-6">
                💬 Conectemos
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                ¿Tienes un proyecto en mente? ¿Quieres colaborar en algo innovador?
                Me encanta conectar con otros desarrolladores y emprendedores para crear
                soluciones que marquen la diferencia.
              </p>

              {/* Contact Links */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <a
                  href="mailto:cr8297408@gmail.com"
                  className="flex items-center space-x-4 p-4 glassmorphism-light rounded-2xl hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Gmail" className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-gradient transition-colors duration-300">
                      Email
                    </h4>
                    <p className="text-gray-400">cr8297408@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/cesarbackend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 glassmorphism-light rounded-2xl hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-gradient transition-colors duration-300">
                      LinkedIn
                    </h4>
                    <p className="text-gray-400">Cesar Ruiz</p>
                  </div>
                </a>

                <a
                  href="https://github.com/cr8297408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 glassmorphism-light rounded-2xl hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl flex items-center justify-center">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-gradient transition-colors duration-300">
                      GitHub
                    </h4>
                    <p className="text-gray-400">cr8297408</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Philosophy */}
            <div className="glassmorphism-dark p-8 rounded-3xl text-center">
              <h3 className="text-2xl font-bold text-gradient mb-4">
                ✨ Filosofía
              </h3>
              <blockquote className="text-xl italic text-gray-300 leading-relaxed">
                "Elegancia + Automatización + Código limpio = Ingeniería que escala."
              </blockquote>
            </div>
          </div>

          {/* Contact Form */}
          {/* <div className="glassmorphism-dark p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-gradient mb-6">
              📝 Envíame un mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Enviar Mensaje
              </button>
            </form>
          </div> */}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="glassmorphism-dark p-8 rounded-3xl max-w-4xl mx-auto">
            <div className="flex justify-center space-x-6 mb-6">
              <a
                href="mailto:cr8297408@gmail.com"
                className="p-3 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <img
                  src="https://img.shields.io/badge/📧%20Email-cr8297408@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white&labelColor=EA4335"
                  alt="Email"
                  className="h-8"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/cesarbackend"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <img
                  src="https://img.shields.io/badge/🔗%20LinkedIn-Cesar%20Ruiz-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=0A66C2"
                  alt="LinkedIn"
                  className="h-8"
                />
              </a>
              <a
                href="https://github.com/cr8297408"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <img
                  src="https://img.shields.io/badge/🐙%20GitHub-cr8297408-181717?style=for-the-badge&logo=github&logoColor=white&labelColor=181717"
                  alt="GitHub"
                  className="h-8"
                />
              </a>
            </div>
            <p className="text-gray-300">
              ¡Siempre abierto a colaborar en proyectos innovadores y desafiantes! 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 