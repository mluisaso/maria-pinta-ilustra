import React, { useState } from 'react';
import { X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl rounded-lg bg-white p-0 overflow-hidden">
        {/* Header con botón cerrar */}
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Contenido del modal */}
        <div className="px-8 pb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              ¿Y ahora qué? Escríbeme.
            </h2>
            <p className="text-lg text-gray-600">
              Me llamo Mària, pero me llaman cuando hay que dibujar cosas raras
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
                rows={6}
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
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;