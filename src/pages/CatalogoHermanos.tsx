import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

const catalogImages: { src: string; alt: string }[] = [];

const CatalogoHermanos: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Catálogo Hermanos - Recordatorios Primera Comunión | Maria Luisa Ilustradora"
        description="Catálogo completo de dibujos de hermanos para recordatorios de Primera Comunión personalizados."
        canonical="https://mariatepinta.es/catalogo-hermanos"
      />
      
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-6 font-poppins text-gray-600 hover:text-black"
        >
          <ArrowLeft size={18} />
          Volver
        </Button>

        <h1 className="text-lg font-normal text-black text-left font-poppins underline decoration-[#be1622] decoration-2 underline-offset-4 mb-6">
          Dibujos de catálogo - Hermanos
        </h1>

        <p className="text-base text-gray-700 font-poppins mb-10 max-w-3xl">
          Próximamente se añadirán más dibujos a esta sección.
        </p>

        {catalogImages.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {catalogImages.map((image, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden aspect-square flex items-center justify-center">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogoHermanos;
