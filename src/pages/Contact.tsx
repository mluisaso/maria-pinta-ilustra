
import React, { useState } from 'react';
import Header from '../components/Header';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

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
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Necesitarás reemplazar esto con tu clave real
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: 'Nuevo mensaje desde Mariatepinta Portfolio',
          from_name: formData.name,
          to_email: 'tsanchezocana@hotmail.com'
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
      console.error('Error:', error);
      toast({
        title: "Error al enviar",
        description: "Hubo un problema. Puedes escribirme directamente a tsanchezocana@hotmail.com",
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
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-24 pb-16 px-4 md:px-8 max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            ¿Y ahora qué? Escríbeme.
          </h1>
          <p className="text-xl text-gray-600">
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
              disabled={isLoading}
              className="w-full border-2 border-gray-300 focus:border-red-400 rounded-lg"
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
              disabled={isLoading}
              className="w-full border-2 border-gray-300 focus:border-red-400 rounded-lg"
            />
          </div>
          
          <div>
            <Textarea
              name="message"
              placeholder="Cuéntame qué necesitas dibujar..."
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isLoading}
              rows={6}
              className="w-full border-2 border-gray-300 focus:border-red-400 rounded-lg resize-none"
            />
          </div>
          
          <Button 
            type="submit"
            disabled={isLoading}
            className="w-full bg-red-500 hover:bg-red-600 disabled:bg-red-300 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            {isLoading ? 'Enviando...' : 'Enviar mensaje'}
          </Button>
        </form>

        {/* Nota importante para el usuario */}
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            <strong>Nota:</strong> Para que el formulario funcione, necesitas registrarte en{' '}
            <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" className="underline">
              web3forms.com
            </a>{' '}
            y reemplazar "YOUR_WEB3FORMS_ACCESS_KEY" con tu clave real en el código.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mt-8">
          <a href="mailto:tsanchezocana@hotmail.com" className="text-gray-600 hover:text-red-500 transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-red-500 transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-red-500 transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.11.221.81.402-.09.402-.297 1.394-.337 1.585-.053.238-.174.289-.402.175-1.499-.69-2.438-2.875-2.438-4.618 0-3.79 2.749-7.271 7.924-7.271 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.99C24.007 5.367 18.641.001.017.001z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-red-500 transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-red-500 transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-2.08v5.73a3.87 3.87 0 01-3.14 3.78 3.77 3.77 0 01-4.85-3.5A4.09 4.09 0 019.8 4.1a4.1 4.1 0 01.31-.05 4.47 4.47 0 01.2-1.94 6.27 6.27 0 00-2.13.35 6.06 6.06 0 00-4.08 5.78 5.84 5.84 0 007.66 5.55 5.89 5.89 0 004.13-5.55v-2.8a8.14 8.14 0 004.77 1.2z"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <span className="text-gray-600 mr-2">Hecho a boli</span>
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </div>
          <p className="text-sm text-gray-500">
            © 2024 Mariatepinta. Todos los derechos reservados (incluso los torcidos).
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
