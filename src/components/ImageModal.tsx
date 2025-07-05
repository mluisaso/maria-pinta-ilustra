
import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: { src: string; title: string; description: string }[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNext,
  onPrev
}) => {
  if (!isOpen || !images[currentIndex]) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
      >
        <X size={32} />
      </button>

      {/* Previous button */}
      {images.length > 1 && (
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
        >
          <ChevronLeft size={40} />
        </button>
      )}

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
        >
          <ChevronRight size={40} />
        </button>
      )}

      {/* Image container */}
      <div className="max-w-4xl max-h-full flex flex-col items-center">
        <img
          src={currentImage.src}
          alt={currentImage.title}
          className="max-w-full max-h-[80vh] object-contain"
        />
        
        {/* Image info */}
        <div className="text-center mt-4 text-white">
          <h3 className="text-xl font-bold mb-2">{currentImage.title}</h3>
          <p className="text-gray-300">{currentImage.description}</p>
          {images.length > 1 && (
            <p className="text-sm text-gray-400 mt-2">
              {currentIndex + 1} de {images.length}
            </p>
          )}
        </div>
      </div>

      {/* Click outside to close */}
      <div
        className="absolute inset-0 -z-10"
        onClick={onClose}
      />
    </div>
  );
};

export default ImageModal;
