
import React, { useState } from 'react';
import Header from '../components/Header';
import { Card, CardContent } from '../components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '../components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../components/ui/tooltip';
import { Instagram } from 'lucide-react';

const BenditaRutina = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <div className="min-h-screen bg-white md:pr-64 pt-32 md:pt-0">
      <Header />

      {/* Hero Section */}
      <section className="bg-white pt-2 md:pt-8 pb-12">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Ilustración y Logo arriba del todo */}
          <div className="flex flex-col items-center mb-6">
            {/* Imagen de la familia */}
            <div className="w-52 lg:w-64 mb-3">
              <img 
                src="/lovable-uploads/5d82fc7e-a399-4da3-91e2-847688c97040.png" 
                alt="Bendita Rutina" 
                className="w-full h-auto object-contain"
              />
            </div>
            
            {/* Logo Bendita Rutina con enlace a Instagram y tooltip */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a 
                    href="https://www.instagram.com/benditarrutina/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-scale transition-transform duration-200"
                  >
                    <div className="w-52 lg:w-64">
                      <img 
                        src="/lovable-uploads/254f3922-2ea8-4e4f-957d-79e70dc414d0.png" 
                        alt="Bendita Rutina" 
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </a>
                </TooltipTrigger>
                <TooltipContent 
                  style={{ backgroundColor: '#be1622', color: 'white' }} 
                  className="text-xs px-2 py-1 border-0"
                >
                  <p>Ver en Instagram</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          {/* Galería de imágenes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Primera card - Libro azul */}
            <a 
              href="https://www.amazon.es/Bendita-Rutina-Historias-del-d%C3%ADa/dp/B0BLZHJCJV"
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer"
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0 relative">
                  <div className="aspect-square bg-gray-100">
                    <img 
                      src="/lovable-uploads/dbcbdf79-eca1-4875-82a1-044a47b00c1d.png"
                      alt="Libro de viñetas Bendita Rutina"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0">
                      <div className="relative p-2 md:p-3">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md px-3 py-2" style={{ backgroundColor: '#be1622' }}>
                          <h3 className="text-xs md:text-sm font-bold text-white mb-1 drop-shadow-lg leading-tight">Libro de viñetas Bendita Rutina 2</h3>
                          <p className="text-xs text-white/90 drop-shadow-md leading-tight">Cómpralo en Amazon</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>

            {/* Segunda card - Libro rosa */}
            <a 
              href="https://www.amazon.es/Bendita-Rutina-Estilo-Mar%C3%ADa-S%C3%A1nchez/dp/8417057048/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=35C3PT891D76H&dib=eyJ2IjoiMSJ9.1pWf9B_K53HO0bD_HBJqrdzoVInJnlHn1CK59JVWD5DXe0QegF1g8ksH68g5cJai.bOr40nC1QPFe0T5tF_7BHyNc9SsTud8DnFpnH_KK4t4&dib_tag=se&keywords=bendita+rutina&qid=1751903168&s=books&sprefix=bendita+rutina%2Cstripbooks%2C116&sr=1-1"
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer"
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0 relative">
                  <div className="aspect-square bg-gray-100">
                    <img 
                      src="/lovable-uploads/646330a1-5c3a-440a-9892-d5f770db78c7.png"
                      alt="Libro de viñetas Bendita Rutina 2"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0">
                      <div className="relative p-2 md:p-3">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md px-3 py-2" style={{ backgroundColor: '#be1622' }}>
                          <h3 className="text-xs md:text-sm font-bold text-white mb-1 drop-shadow-lg leading-tight">Libro de viñetas Bendita Rutina</h3>
                          <p className="text-xs text-white/90 drop-shadow-md leading-tight">Cómpralo en Amazon</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>

            {/* Resto de cards con ilustraciones */}
            {[
              "/lovable-uploads/a37fd13b-9c26-4c01-9bc0-1925c90cdabd.png",
              "/lovable-uploads/876e423d-e39b-4dfd-b46e-23a558ef7de2.png",
              "/lovable-uploads/0e446e95-8b87-431f-94c6-ab505851c658.png",
              "/lovable-uploads/bc1afce9-13ea-4da5-85dc-2a52eb7bb213.png",
              "/lovable-uploads/894f41b9-28ef-406a-a4ab-33cd8b8c4c18.png",
              "/lovable-uploads/2741e168-4afb-452d-8a12-37aa6cb14017.png",
              "/lovable-uploads/a37fd13b-9c26-4c01-9bc0-1925c90cdabd.png",
              // Duplicadas como placeholder
              "/lovable-uploads/a37fd13b-9c26-4c01-9bc0-1925c90cdabd.png",
              "/lovable-uploads/876e423d-e39b-4dfd-b46e-23a558ef7de2.png",
              "/lovable-uploads/0e446e95-8b87-431f-94c6-ab505851c658.png",
              "/lovable-uploads/bc1afce9-13ea-4da5-85dc-2a52eb7bb213.png",
              "/lovable-uploads/894f41b9-28ef-406a-a4ab-33cd8b8c4c18.png",
              "/lovable-uploads/2741e168-4afb-452d-8a12-37aa6cb14017.png",
              "/lovable-uploads/a37fd13b-9c26-4c01-9bc0-1925c90cdabd.png"
            ].map((imageSrc, index) => (
              <Dialog key={index + 2}>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                    <CardContent className="p-0">
                      <div className="aspect-square bg-white">
                        <img 
                          src={imageSrc}
                          alt={`Bendita Rutina ilustración ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] p-4 bg-white border border-gray-200 rounded-lg">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img 
                      src={imageSrc}
                      alt={`Bendita Rutina ilustración ${index + 1}`}
                      className="max-w-full max-h-full object-contain animate-scale-in"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BenditaRutina;
