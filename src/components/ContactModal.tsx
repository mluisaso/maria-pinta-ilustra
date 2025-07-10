import React, { useState } from 'react';
import { X, Instagram, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'cebe667b-b31b-4160-a9ec-62094f39a74f',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: 'Nuevo mensaje desde Mariatepinta.com',
        }),
      });

      if (response.ok) {
        toast({
          title: "¡Mensaje enviado!",
          description: "Te responderé pronto (o cuando termine de dibujar)",
        });
        setFormData({ name: '', email: '', message: '' });
        onClose();
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50" 
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
        >
          <X size={20} className="text-gray-600" />
        </button>

        {/* Content */}
        <div className="p-8 pt-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              ¡Hola! Soy Mària.
            </h1>
            <p className="text-lg text-gray-600">
              Ilustradora, creadora de mundos imposibles y especialista en dar vida a ideas raras. Si necesitas que algo cobre vida con un lápiz, estás en el lugar correcto.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border-2 border-gray-300 focus:border-[#be1622] focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-lg"
              />
            </div>
            
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Tu email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-2 border-gray-300 focus:border-[#be1622] focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-lg"
              />
            </div>
            
            <div>
              <Textarea
                name="message"
                placeholder="Cuéntame qué necesitas dibujar..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full border-2 border-gray-300 focus:border-[#be1622] focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-lg resize-none"
              />
            </div>
            
            <Button 
              type="submit"
              disabled={isLoading}
              className="w-full text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              style={{ backgroundColor: '#be1622' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#a01018'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#be1622'}
            >
              {isLoading ? 'Enviando...' : 'Enviar mensaje'}
            </Button>
          </form>

          <div className="flex justify-center space-x-6 mt-6">
            <a href="https://www.instagram.com/mariatepinta/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#be1622] transition-colors duration-300">
              <Instagram size={24} />
            </a>
            <a href="https://www.linkedin.com/in/mariatepinta/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#be1622] transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="https://www.tiktok.com/@mariatepinta" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#be1622] transition-colors duration-300">
              <img 
                src="/lovable-uploads/bb8002d5-0962-4d3a-9301-9603bec5426c.png" 
                alt="TikTok" 
                className="w-6 h-6 object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;