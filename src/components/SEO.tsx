import { Helmet } from "react-helmet-async";

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
}

const SEO = ({
    title = "Essence Dental | Estética Avançada e Implantes",
    description = "Transforme seu sorriso com a Essence Dental. Especialistas em lentes de contato, facetas de porcelana, implantes e harmonização orofacial. Agende sua avaliação.",
    image = "/og-image.jpg",
    url = "https://essencedental.com.br"
}: SEOProps) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            <link rel="canonical" href={url} />
        </Helmet>
    );
};

export default SEO;
