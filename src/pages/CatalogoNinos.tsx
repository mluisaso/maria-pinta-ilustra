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
  { src: '/lovable-uploads/marineroBalon-2.png', alt: 'Marinero balón - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/marineroBaloncesto.png', alt: 'Marinero baloncesto - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/marineroCaballo.png', alt: 'Marinero caballo - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/marineropaloma.png', alt: 'Marinero paloma - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/marinerovela.png', alt: 'Marinero vela - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/monopatincolor.png', alt: 'Monopatín color - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/naif_traje_balon.png', alt: 'Naif traje balón - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/ninopatinPANTALONLARGO.png', alt: 'Niño patín pantalón largo - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/crayondepietraje.png', alt: 'Crayon de pie traje - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/ninotunicaHoverboard.png', alt: 'Niño túnica hoverboard - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/paloma_tunica.png', alt: 'Paloma túnica - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/pelorizado-futbolistamarinero.png', alt: 'Pelorizado futbolista marinero - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/perfilmarinero.png', alt: 'Perfil marinero - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/perfilcorbatamarinero.png', alt: 'Perfil corbata - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/reclinatorio_chaqueta-gris.png', alt: 'Reclinatorio chaqueta gris - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/traje_corto_tenis.png', alt: 'Traje corto tenis - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/traje_paloma.png', alt: 'Traje paloma - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/traje_vela.png', alt: 'Traje vela - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/trajeangelito.png', alt: 'Traje angelito - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/trajeangelitoCORTO.png', alt: 'Traje angelito corto - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/trajeavioncito.png', alt: 'Traje avioncito - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/trajebalonpie.png', alt: 'Traje balón pie - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/trajeCaballo.png', alt: 'Traje caballo - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/trajeCORTOCaballo.png', alt: 'Traje corto caballo - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/trajehoverboard.png', alt: 'Traje hoverboard - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/trajeLARGOpaloma.png', alt: 'Traje largo paloma - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/tunica_balon.png', alt: 'Túnica balón - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/tunica_baloncesto.png', alt: 'Túnica baloncesto - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/tunicaAvioncito.png', alt: 'Túnica avioncito - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/tunicavela.png', alt: 'Túnica vela - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/virgencapillaValdefuentes.png', alt: 'Virgen capilla Valdefuentes - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/virgenPatioValdefuentes.png', alt: 'Virgen patio Valdefuentes - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/trajeclaro-baloncesto.png', alt: 'Traje claro baloncesto - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/balon_trajeoscuro.png', alt: 'Balón traje oscuro - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/barquito.png', alt: 'Barquito - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/besovirgenmarinero.png', alt: 'Beso virgen marinero - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/reclinatoriocrayontraje.png', alt: 'Reclinatorio crayon traje - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/escudo_marinero.png', alt: 'Escudo marinero - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/escudo_trajeoscuro.png', alt: 'Escudo traje oscuro - recordatorio Primera Comunión niño catálogo' },
  { src: '/lovable-uploads/escudotraje.png', alt: 'Escudo traje - recordatorio Primera Comunión niño catálogo' },
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
          Todas las imágenes se pueden adaptar a color y largo de traje, túnica o marinero. También a distintas razas.{' '}
          <a 
            href="/CATALOGOCHICOS_compressed_2.pdf" 
            download 
            className="text-[#be1622] underline underline-offset-4 decoration-2 hover:opacity-70 transition-opacity font-medium cursor-pointer"
          >
            DESCARGAR CATÁLOGO CHICOS
          </a>
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
