
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import RedirectComponent from "./components/RedirectComponent";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Specific redirects for old URL patterns */}
          <Route path="/web/index.php/producto/*" element={<RedirectComponent to="https://mariatepinta.es/" />} />
          <Route path="/web/index.php/subproducto/*" element={<RedirectComponent to="https://mariatepinta.es/" />} />
          <Route path="/web/index.php/cesta" element={<RedirectComponent to="https://mariatepinta.es/" />} />
          <Route path="/web/index.php/contacto" element={<RedirectComponent to="https://mariatepinta.es/contact" />} />
          <Route path="/web/index.php/maria" element={<RedirectComponent to="https://mariatepinta.es/" />} />
          <Route path="/web/index.php/faqs" element={<RedirectComponent to="https://mariatepinta.es/" />} />
          
          {/* Catch-all for any other /web/ URLs */}
          <Route path="/web/*" element={<RedirectComponent to="https://mariatepinta.es/" />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
