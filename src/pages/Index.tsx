import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import LottieAnimation from '../components/LottieAnimation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const portfolioSections = [/* ... mismo contenido ... */]; // No modificado

  useEffect(() => {
    const handleScroll = () => {
      const sections = portfolioSections.map((_, index) => document.getElementById(`section-${index}`));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            setCurrentSection(i);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollHorizontal = (containerId: string, direction: 'left' | 'right') => {
    const container = document.getElementById(containerId);
    if (container) {
      const cardWidth = container.offsetWidth / 3;
      container.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-white md:pr-64 pt-40 md:pt-0">
      <Header />

      <section id="portfolio" className="relative min-h-screen flex flex-col items-center justify-center bg-white pt-20 md:pt-20 pb-12">
        <div className="md:hidden w-32 h-32 sm:w-40 sm:h-40 mb-16 flex-shrink-0">
          <LottieAnimation className="w-full h-full" />
        </div>

        <div className="mb-16 md:hidden">
          <img
            src="/lovable-uploads/dfa29db0-5b18-4143-90b8-7f84bdc6a082.png"
            alt="Mariatepinta"
            className="h-auto w-80 lg:w-96"
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-2 md:space-y-2 relative z-10">
          {portfolioSections.map((section, sectionIndex) => (
            <div key={section.id} id={`section-${sectionIndex}`} className="space-y-4">
              <h2 className="text-lg font-normal text-black text-left font-poppins block md:hidden">
                {section.title}
              </h2>

              <div className="hidden md:block relative">
                <button
                  onClick={() => scrollHorizontal(`scroll-container-${sectionIndex}`, 'left')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-8 h-8 bg-[#be1622] rounded-full flex items-center justify-center hover:bg-[#a01420] transition-colors duration-200"
                >
                  <ChevronLeft size={16} className="text-white" />
                </button>

                <button
                  onClick={() => scrollHorizontal(`scroll-container-${sectionIndex}`, 'right')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-8 h-8 bg-[#be1622] rounded-full flex items-center justify-center hover:bg-[#a01420] transition-colors duration-200"
                >
                  <ChevronRight size={16} className="text-white" />
                </button>

                <div
                  id={`scroll-container-${sectionIndex}`}
                  className="flex gap-1 overflow-x-auto scrollbar-hide scroll-smooth"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {section.images.map((image, index) => (
                    <div key={index} className="group cursor-pointer flex-shrink-0 w-1/3 min-w-0 relative">
                      <div className="relative overflow-hidden aspect-square">
                        {image.type === 'logo' ? (
                          <div className="bg-white w-full h-full flex flex-col items-center justify-between p-3">
                            <div className="w-full flex-1 flex items-center justify-center overflow-hidden">
                              <LottieAnimation className="w-full h-full" />
                            </div>
                            <div className="w-full h-auto flex items-center justify-center mt-2">
                              <img
                                src="/lovable-uploads/dfa29db0-5b18-4143-90b8-7f84bdc6a082.png"
                                alt="Mariatepinta"
                                className="h-6 w-auto object-contain"
                              />
                            </div>
                          </div>
                        ) : (
                          <>
                            <div className="bg-gray-100 w-full h-full">
                              <img
                                src={image.src}
                                alt={image.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="bg-[#be1622] w-full h-full flex items-center justify-center">
                                <div className="p-4 max-w-xs text-center">
                                  <h3 className="font-normal text-white mb-2">{image.title}</h3>
                                  <p className="text-sm text-white/90">{image.description}</p>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:hidden grid grid-cols-2 gap-1">
                {section.images.map((image, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="relative overflow-hidden bg-gray-100 aspect-square">
                      {image.type === 'logo' ? (
                        <div className="bg-white w-full h-full flex flex-col items-center justify-between p-3">
                          <div className="w-full flex-1 flex items-center justify-center overflow-hidden">
                            <LottieAnimation className="w-full h-full" />
                          </div>
                          <div className="w-full h-auto flex items-center justify-center mt-2">
                            <img
                              src="/lovable-uploads/dfa29db0-5b18-4143-90b8-7f84bdc6a082.png"
                              alt="Mariatepinta"
                              className="h-6 w-auto object-contain"
                            />
                          </div>
                        </div>
                      ) : (
                        <>
                          <img
                            src={image.src}
                            alt={image.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-[#be1622] w-full h-full flex items-center justify-center">
                              <div className="p-4 max-w-xs text-center">
                                <h3 className="font-normal text-white mb-2">{image.title}</h3>
                                <p className="text-sm text-white/90">{image.description}</p>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Index;
