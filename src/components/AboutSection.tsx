
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Sobre mí</h2>
        <div className="bg-white border-2 border-gray-200 rounded-lg p-8 md:p-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Me llamo Mària, pero me llaman cuando hay que dibujar cosas raras.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Soy ilustradora freelance especializada en convertir ideas complejas en dibujos que hasta tu abuela entiende. 
            Mi boli y yo llevamos años trabajando juntos, y aunque a veces no nos ponemos de acuerdo, 
            siempre conseguimos que las cosas tengan sentido... o al menos que parezca que lo tienen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
