import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

const catalogImages = [
  { src: '/lovable-uploads/melllizospatin.png', alt: 'Mellizos patín - recordatorio Primera Comunión hermanos catálogo' },
  { src: '/lovable-uploads/mellizosrezoperfil.png', alt: 'Mellizos rezo perfil - recordatorio Primera Comunión hermanos catálogo' },
  { src: '/lovable-uploads/mellizosdefrenteangelito.png', alt: 'Mellizos de frente angelito - recordatorio Primera Comunión hermanos catálogo' },
  { src: encodeURI('/lovable-uploads/mellizosbalonfutbol.png'), alt: 'Mellizos balón fútbol - recordatorio Primera Comunión hermanos catálogo' },
  { src: '/lovable-uploads/mellizosbalonbasket.png', alt: 'Mellizos balón basket - recordatorio Primera Comunión hermanos catálogo' },
  { src: '/lovable-uploads/hermanostunicabalon.png', alt: 'Hermanos túnica balón - recordatorio Primera Comunión hermanos catálogo' },
];

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
          Todas las imágenes se pueden adaptar a traje o túnica, poner o quitar fajín de color, medallas y/o cruces. También a distintas razas y cualquier uniforme escolar.{' '}
          <a 
            href="/CATALOGOhermanos_compressed.pdf" 
            download 
            className="text-[#be1622] underline underline-offset-4 decoration-2 hover:opacity-70 transition-opacity font-medium cursor-pointer"
          >
            DESCARGAR CATÁLOGO HERMANOS
          </a>
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
