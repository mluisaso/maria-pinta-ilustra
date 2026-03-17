import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

const catalogImages = [
  { src: '/lovable-uploads/virgen.png', alt: 'Virgen - recordatorio Primera Comunión niña catálogo' },
  { src: '/lovable-uploads/velapaloma-2.png', alt: 'Vela paloma - recordatorio Primera Comunión niña catálogo' },
  { src: '/lovable-uploads/veladiadema-2.png', alt: 'Vela diadema - recordatorio Primera Comunión niña catálogo' },
  { src: '/lovable-uploads/tunicareclinatorio.png', alt: 'Túnica reclinatorio - recordatorio Primera Comunión niña catálogo' },
  { src: '/lovable-uploads/tunicaangelito-2.png', alt: 'Túnica angelito - recordatorio Primera Comunión niña catálogo' },
  { src: '/lovable-uploads/tunica_misal_angelito.png', alt: 'Túnica misal angelito - recordatorio Primera Comunión niña catálogo' },
  { src: '/lovable-uploads/trenzaflorestunica.png', alt: 'Trenza flores túnica - recordatorio Primera Comunión niña catálogo' },
  { src: '/lovable-uploads/trenzaflore.png', alt: 'Trenza flores - recordatorio Primera Comunión niña catálogo' },
  { src: '/lovable-uploads/sujetando_vestido.png', alt: 'Sujetando vestido - recordatorio Primera Comunión niña catálogo' },
  { src: '/lovable-uploads/subidaenpalomaTUNICA.png', alt: 'Subida en paloma túnica - recordatorio Primera Comunión niña catálogo' },
  { src: '/lovable-uploads/subidaenpaloma.png', alt: 'Subida en paloma - recordatorio Primera Comunión niña catálogo' },
  { src: '/lovable-uploads/subidaencaballo.png', alt: 'Subida en caballo - recordatorio Primera Comunión niña catálogo' },
  { src: '/lovable-uploads/rezotunica.png', alt: 'Rezo túnica - recordatorio Primera Comunión niña catálogo' },
  { src: '/lovable-uploads/rezoorganza-2.png', alt: 'Rezo organza - recordatorio Primera Comunión niña catálogo' },
  { src: '/lovable-uploads/perfilflores.png', alt: 'Perfil flores - recordatorio Primera Comunión niña catálogo' },
  { src: '/lovable-uploads/patinetetunica.png', alt: 'Patinete túnica - recordatorio Primera Comunión niña catálogo' },
  { src: '/lovable-uploads/patinete-3.png', alt: 'Patinete - recordatorio Primera Comunión niña catálogo' },
  { src: '/lovable-uploads/organzareclinatorio-2.png', alt: 'Organza reclinatorio - recordatorio Primera Comunión niña catálogo' },
  { src: '/lovable-uploads/organzAngelito.png', alt: 'Organza angelito - recordatorio Primera Comunión niña catálogo' },
  { src: encodeURI('/lovable-uploads/niñahoverboard.png'), alt: 'Niña hoverboard - recordatorio Primera Comunión niña catálogo' },
  { src: '/lovable-uploads/organzacorderito.png', alt: 'Organza corderito - recordatorio Primera Comunión niña catálogo' },
  { src: encodeURI('/lovable-uploads/niña_tunicahoverboard.png'), alt: 'Niña túnica hoverboard - recordatorio Primera Comunión niña catálogo' },
  { src: '/lovable-uploads/negritaTUnica-2.png', alt: 'Negrita túnica - recordatorio Primera Comunión niña catálogo' },
  { src: '/lovable-uploads/negrita.png', alt: 'Negrita - recordatorio Primera Comunión niña catálogo' },
  { src: '/lovable-uploads/mangalargaREzoOrganza.png', alt: 'Manga larga rezo organza - recordatorio Primera Comunión niña catálogo' },
  { src: '/lovable-uploads/maderaVirgenREzo.png', alt: 'Madera virgen rezo - recordatorio Primera Comunión niña catálogo' },
  { src: '/lovable-uploads/combiVirgenREzo.png', alt: 'Virgen rezo - recordatorio Primera Comunión niña catálogo' },
  { src: '/lovable-uploads/columpionegrita.png', alt: 'Columpio negrita - recordatorio Primera Comunión niña catálogo' },
  { src: '/lovable-uploads/columpio_TUNICA.png', alt: 'Columpio túnica - recordatorio Primera Comunión niña catálogo' },
  { src: '/lovable-uploads/columpio_organza.png', alt: 'Columpio organza - recordatorio Primera Comunión niña catálogo' },
];

const CatalogoNinas: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Catálogo Niñas - Recordatorios Primera Comunión | Maria Luisa Ilustradora"
        description="Catálogo completo de dibujos para recordatorios de Primera Comunión de niñas. Adaptables a traje o túnica, fajín de color, medallas y cruces."
        canonical="https://mariatepinta.es/catalogo-ninas"
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
          Dibujos de catálogo
        </h1>

        <p className="text-base text-gray-700 font-poppins mb-10 max-w-3xl">
          Todas las imágenes se pueden adaptar a traje o túnica, poner o quitar fajín de color, medallas y/o cruces. También a distintas razas.
        </p>

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
      </div>
    </div>
  );
};

export default CatalogoNinas;
