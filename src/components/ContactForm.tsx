
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm: React.FC = () => {
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
    <section id="contacto" className="py-16 px-4 md:px-8 max-w-2xl mx-auto">
      <div className="text-center mb-12">
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

      <div className="flex justify-center space-x-6 mt-8">
        <a href="#" className="text-gray-600 hover:text-[#be1622] transition-colors duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
        <a href="#" className="text-gray-600 hover:text-[#be1622] transition-colors duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a href="#" className="text-gray-600 hover:text-[#be1622] transition-colors duration-300">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default ContactForm;
