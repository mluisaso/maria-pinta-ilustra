import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';

const catalogImages = [
  { src: '/lovable-uploads/angelitoflor.png', alt: 'Angelito flor - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/futbolista_marinero.png', alt: 'Futbolista marinero - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/futbolista_traje.png', alt: 'Futbolista traje - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/futbolista_trajeCORTO.png', alt: 'Futbolista traje corto - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/futbolista_tunica.png', alt: 'Futbolista túnica - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/huyreclinatoriomarinero.png', alt: 'Reclinatorio marinero - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/marienroHoverboard.png', alt: 'Marinero hoverboard - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/marinero_rezando.png', alt: 'Marinero rezando - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/marineroangelito.png', alt: 'Marinero angelito - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/marineroavioncito.png', alt: 'Marinero avioncito - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/besobeberizado.png', alt: 'Beso beberizado - recordatorio Primera Comunión catálogo' },
  { src: '/lovable-uploads/chinita.png', alt: 'Chinita - recordatorio Primera Comunión catálogo' },
  { src: '/lovable-uploads/corderito-sin-cordero.png', alt: 'Corderito - recordatorio Primera Comunión catálogo' },
  { src: '/lovable-uploads/negritaTUnica.png', alt: 'Negrita túnica - recordatorio Primera Comunión catálogo' },
  { src: '/lovable-uploads/organzareclinatorio.png', alt: 'Organza reclinatorio - recordatorio Primera Comunión catálogo' },
  { src: '/lovable-uploads/patinete.png', alt: 'Patinete - recordatorio Primera Comunión catálogo' },
  { src: '/lovable-uploads/rezoorganza.png', alt: 'Rezo organza - recordatorio Primera Comunión catálogo' },
  { src: '/lovable-uploads/tunicaangelito.png', alt: 'Túnica angelito - recordatorio Primera Comunión catálogo' },
  { src: '/lovable-uploads/veladiadema.png', alt: 'Vela diadema - recordatorio Primera Comunión catálogo' },
  { src: '/lovable-uploads/velapaloma.png', alt: 'Vela paloma - recordatorio Primera Comunión catálogo' },
  { src: '/lovable-uploads/balon_traje_CORTO.png', alt: 'Balón traje corto - recordatorio Primera Comunión catálogo' },
  { src: '/lovable-uploads/basketraje.png', alt: 'Basket traje - recordatorio Primera Comunión catálogo' },
  { src: '/lovable-uploads/escudo-marinero.png', alt: 'Escudo marinero - recordatorio Primera Comunión catálogo' },
  { src: '/lovable-uploads/futboltraje.png', alt: 'Fútbol traje - recordatorio Primera Comunión catálogo' },
  { src: '/lovable-uploads/marineroBalon.png', alt: 'Marinero balón - recordatorio Primera Comunión catálogo' },
  { src: '/lovable-uploads/marinerobarquito.png', alt: 'Marinero barquito - recordatorio Primera Comunión catálogo' },
  { src: '/lovable-uploads/marineroreclinatorio.png', alt: 'Marinero reclinatorio - recordatorio Primera Comunión catálogo' },
  { src: '/lovable-uploads/patinete-2.png', alt: 'Patinete niña - recordatorio Primera Comunión catálogo' },
  { src: '/lovable-uploads/RECLINATORIOTRAJE.png', alt: 'Reclinatorio traje - recordatorio Primera Comunión catálogo' },
  { src: '/lovable-uploads/virgenpatio.png', alt: 'Virgen patio - recordatorio Primera Comunión catálogo' },
  { src: '/lovable-uploads/rezando.png', alt: 'Rezando - recordatorio Primera Comunión catálogo' },
  { src: '/lovable-uploads/marineroperrito.png', alt: 'Marinero perrito - recordatorio Primera Comunión catálogo' },
  { src: '/lovable-uploads/trenza.png', alt: 'Trenza - recordatorio Primera Comunión catálogo' },
];

const CatalogoNinos: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Catálogo Niños - Recordatorios Primera Comunión | Maria Luisa Ilustradora"
        description="Catálogo completo de dibujos para recordatorios de Primera Comunión. Adaptables a color, largo de traje, túnica o marinero, y distintas razas."
        canonical="https://mariatepinta.es/catalogo-ninos"
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
          Todas las imágenes se pueden adaptar a color y largo de traje, túnica o marinero. También a distintas razas.
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

export default CatalogoNinos;
