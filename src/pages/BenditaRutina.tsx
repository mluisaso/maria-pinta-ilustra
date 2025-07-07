
import React from 'react';
import Header from '../components/Header';
import { Card, CardContent } from '../components/ui/card';

const BenditaRutina = () => {
  return (
    <div className="min-h-screen bg-white md:pr-64 pt-40 md:pt-0">
      <Header />

      {/* Hero Section */}
      <section className="bg-white pt-20 md:pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Ilustración y Logo arriba del todo */}
          <div className="flex flex-col items-center mb-16">
            {/* Imagen de la familia */}
            <div className="w-80 lg:w-96 mb-4">
              <img 
                src="/lovable-uploads/5d82fc7e-a399-4da3-91e2-847688c97040.png" 
                alt="Bendita Rutina" 
                className="w-full h-auto object-contain"
              />
            </div>
            
            {/* Logo Bendita Rutina */}
            <div className="w-80 lg:w-96">
              <img 
                src="/lovable-uploads/97856221-927a-4e2b-9140-9da01925d648.png" 
                alt="Bendita Rutina" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Galería de imágenes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gray-100">
                    <img 
                      src={`https://images.unsplash.com/photo-${1649972904349 + index}-6e44c42644a7?w=400&h=400&fit=crop`}
                      alt={`Bendita Rutina ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BenditaRutina;
