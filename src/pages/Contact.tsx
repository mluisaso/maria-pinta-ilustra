
import React, { useState } from 'react';
import Header from '../components/Header';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Instagram, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
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
    <div className="min-h-screen bg-white md:pr-64 pt-28 md:pt-0">
      <Header />
      
      <section className="pt-24 pb-16 px-4 md:px-8 max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            ¡Hola! Soy Mària.
          </h1>
          <p className="text-xl text-gray-600">
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

        <div className="flex justify-center space-x-6 mt-8">
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
      </section>

    </div>
  );
};

export default Contact;
