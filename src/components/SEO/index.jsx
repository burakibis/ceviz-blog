import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        author
        siteUrl
        siteLanguage
        siteTitleAlt
        defaultTitle: title
        defaultDescription: description
        defaultImage: image
        datePublished
        copyrightYear
        twitterUsername
        fbAppId
      }
    }
  }
`;

const SEO = ({ title, description, image, path, articleDate }) => {
  const { site } = useStaticQuery(query);
  const {
    author,
    siteUrl,
    siteLanguage,
    siteTitleAlt,
    defaultTitle,
    defaultDescription,
    defaultImage,
    datePublished,
    copyrightYear,
    twitterUsername,
    fbAppId,
  } = site.siteMetadata;

  const date = new Date(articleDate).toISOString();

  const seo = {
    url: path ? `${siteUrl}${path}` : siteUrl,
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    image: image ? `${siteUrl}${image}` : defaultImage,
  };

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: siteUrl,
    headline: siteTitleAlt,
    inLanguage: siteLanguage,
    mainEntityOfPage: siteUrl,
    description: defaultDescription,
    name: defaultTitle,
    author: {
      '@type': 'Person',
      name: author,
    },
    copyrightHolder: {
      '@type': 'Person',
      name: author,
    },
    copyrightYear,
    creator: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Person',
      name: author,
    },
    datePublished: new Date(datePublished).toISOString(),
    dateModified: new Date(datePublished).toISOString(),
    image: {
      '@type': 'ImageObject',
      url: seo.image,
    },
  };

  const itemListElement = [
    {
      '@type': 'ListItem',
      item: {
        '@id': siteUrl,
        name: 'Homepage',
      },
      position: 1,
    },
  ];

  let schemaArticle = null;

  if (articleDate) {
    schemaArticle = {
      '@context': 'http://schema.org',
      '@type': 'Article',
      author: {
        '@type': 'Person',
        name: author,
      },
      copyrightHolder: {
        '@type': 'Person',
        name: author,
      },
      copyrightYear,
      creator: {
        '@type': 'Person',
        name: author,
      },
      publisher: {
        '@type': 'Organization',
        name: author,
        logo: {
          '@type': 'ImageObject',
          url: defaultImage,
        },
      },
      datePublished: date,
      dateModified: date,
      description: seo.description,
      headline: seo.title,
      inLanguage: siteLanguage,
      url: seo.url,
      name: seo.title,
      image: {
        '@type': 'ImageObject',
        url: seo.image,
      },
      mainEntityOfPage: seo.url,
    };
    // Push current blogpost into breadcrumb list
    itemListElement.push({
      '@type': 'ListItem',
      item: {
        '@id': seo.url,
        name: seo.title,
      },
      position: 2,
    });
  }

  const breadcrumb = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    description: 'Breadcrumbs list',
    name: 'Breadcrumbs',
    itemListElement,
  };

  return (
    <Helmet title={seo.title}>
      <html lang={siteLanguage} />
      <link rel="canonical" href={`${seo.url}`} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {/* Schema.org */}
      {!articleDate && <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>}
      {articleDate && <script type="application/ld+json">{JSON.stringify(schemaArticle)}</script>}
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      {/* OpenGraph */}
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:url" content={seo.url} />
      {articleDate && <meta property="og:type" content="article" />}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:alt" content={seo.description} />
      {/* fb app id */}
      <meta property="fb:app_id" content={fbAppId || ''} />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:alt" content={seo.description} />
      <div>
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        {/* Primary Meta Tags */}
        <meta name="title" content="Ceviz.io - Mind-Opening Hacks" />
        <meta
          name="description"
          content="Software, nature, human, books, more. Okay, I am not an alchemist, but I want share personal personalities, what I produce, what I earn, what I live."
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ceviz.io/" />
        <meta property="og:title" content="Ceviz.io - Mind-Opening Hacks" />
        <meta
          property="og:description"
          content="Software, nature, human, books, more. Okay, I am not an alchemist, but I want share personal personalities, what I produce, what I earn, what I live."
        />
        <meta property="og:image" content />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.ceviz.io/" />
        <meta property="twitter:title" content="Ceviz.io - Mind-Opening Hacks" />
        <meta
          property="twitter:description"
          content="Software, nature, human, books, more. Okay, I am not an alchemist, but I want share personal personalities, what I produce, what I earn, what I live."
        />
        <meta property="twitter:image" content />
      </div>
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  path: PropTypes.string,
  articleDate: PropTypes.string,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  path: null,
  articleDate: null,
};

export default React.memo(SEO);
