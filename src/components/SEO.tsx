import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonical }) => {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
};

export default SEO;
