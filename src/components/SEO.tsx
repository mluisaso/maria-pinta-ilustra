import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  schema?: object;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  canonical,
  ogImage = 'https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3dede7b9-1976-440d-bb76-2f383625ab83/id-preview-69c66d54--f82f7f2b-2ec6-4f1e-9646-689eac9b14e5.lovable.app-1763454419618.png',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  schema
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook / Instagram / WhatsApp */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Màriatepinta" />
      <meta property="og:locale" content="es_ES" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="Spanish" />
      <meta name="author" content="Màriatepinta" />
      <meta name="keywords" content="ilustradora profesional, ilustración editorial, ilustración personalizada, ilustración infantil, viñetas ilustradas, recordatorios comunión personalizados, regalos personalizados ilustrados, MariaLuisa ilustradora, Màriatepinta, ilustradora freelance España" />
      
      {/* Structured Data - Schema.org */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
