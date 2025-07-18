
import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import Header from '../components/Header';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-24 pb-16 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">¡Hola!</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto">
            Mis ilustraciones son originales y expresivas. Utilizo distintos estilos que se adaptan a un encargo personal o de empresa, pero sobre todo, ofrezco ideas. ¿No sabes muy bien lo que quieres? Estupendo, ahí empiezo yo. ¿Hablamos?
          </p>
          
          {/* Redes sociales */}
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://www.instagram.com/mariatepinta/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#be1622] transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://www.linkedin.com/in/mariatepinta/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#be1622] transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://www.tiktok.com/@mariatepinta" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#be1622] transition-colors">
              <img 
                src="/lovable-uploads/bb8002d5-0962-4d3a-9301-9603bec5426c.png" 
                alt="TikTok" 
                className="w-6 h-6 object-contain"
              />
            </a>
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 md:p-12 shadow-lg">
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=300&fit=crop&crop=face" 
                alt="Mària - Ilustradora"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 object-cover border-4 border-red-200"
              />
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Me llamo Mària, pero me llaman cuando hay que dibujar cosas raras.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Soy ilustradora freelance especializada en convertir ideas complejas en dibujos que hasta tu abuela entiende. 
              Mi boli y yo llevamos años trabajando juntos, y aunque a veces no nos ponemos de acuerdo, 
              siempre conseguimos que las cosas tengan sentido... o al menos que parezca que lo tienen.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Mi especialidad es tomar conceptos abstractos y transformarlos en ilustraciones que comunican de manera clara y divertida. 
              Desde viñetas con humor hasta complejos diagramas de visual thinking, mi objetivo es siempre el mismo: 
              que la información llegue de la forma más directa y entretenida posible.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <span className="text-gray-600 mr-2">Hecho a boli</span>
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </div>
          <p className="text-sm text-gray-500">
            © 2024 Mariatepinta. Todos los derechos reservados (incluso los torcidos).
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
