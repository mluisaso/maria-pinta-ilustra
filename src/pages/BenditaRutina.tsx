
import React from 'react';
import Header from '../components/Header';

const BenditaRutina = () => {
  return (
    <div className="min-h-screen bg-white md:pr-64 pt-40 md:pt-0">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-white pt-20 md:pt-20 pb-12">
        {/* Imagen de la familia en lugar de la animación */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-8 md:mb-8 flex-shrink-0">
          <img 
            src="/lovable-uploads/5d82fc7e-a399-4da3-91e2-847688c97040.png" 
            alt="Bendita Rutina" 
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Logo Bendita Rutina */}
        <div className="mb-16">
          <img 
            src="/lovable-uploads/97856221-927a-4e2b-9140-9da01925d648.png" 
            alt="Bendita Rutina" 
            className="h-auto w-80 lg:w-96"
          />
        </div>

        {/* Contenido que se adaptará después */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <p className="text-gray-600 text-lg">
            Contenido de Bendita Rutina - se adaptará próximamente
          </p>
        </div>
      </section>
    </div>
  );
};

export default BenditaRutina;
