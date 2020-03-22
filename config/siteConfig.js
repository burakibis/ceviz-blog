const config = {
  author: 'Ceviz Lab', // Site owner
  siteTitle: 'Ceviz Blog / Mind-Opening Hacks', // Site title.
  siteTitleShort: 'Ceviz Blog / Mind-Opening Hacks', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'Ceviz-Blog', // Alternative site title for SEO.
  siteLanguage: 'en', // Site language.
  siteDescription:
    'Software, nature, human, books, more. Okay, I am not an alchemist, but I want share personal personalities, what I produce, what I earn, what I live.', // Website description used for RSS feeds/meta description tag.
  siteLogo: 'static/favicons/favicon.png', // Logo used for manifest.
  siteUrl: 'https://ceviz.io', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '798155870693074', // FB Application ID for using app insights
  siteGATrackingID: 'UA-158788730-1', // Tracking code ID for google analytics.
  disqusShortname: 'www-ceviz-io', // Disqus shortname.
  twitterUserName: 'burakibs', // twitter creator for SEO
  datePublished: '2020-02-20', // for SEO
  copyrightYear: '2020', // for SEO
  postsPerPage: 6, // posts per page used in gatsby-node.js
  // Links to social profiles you want to display in the footer.
  rrssb: [
    {
      label: 'github',
      url: 'https://github.com/burakibis',
      iconClassName: 'fab fa-github',
    },
    {
      label: 'mail',
      url: 'mailto:burak@ceviz.io',
      iconClassName: 'fa fa-envelope',
    },
    {
      label: 'gitlab',
      url: 'https://gitlab.com/burakibis',
      iconClassName: 'fab fa-facebook',
    },
    {
      label: 'instagram',
      url: 'https://www.instagram.com/burippo',
      iconClassName: 'fab fa-instagram',
    },
  ],
  // Links to pages you want to display in the navigation bar.
  navbarLinks: [
    {
      label: 'Categories',
      url: '/categories',
      iconClassName: 'fa fa-list-alt',
    },
    {
      label: 'About',
      url: '/about',
      iconClassName: 'fa fa-address-card',
    },
    {
      label: 'Archives',
      url: '/archives',
      iconClassName: 'fa fa-book-open',
    },
  ],
  // Links to pages you want to display in the footer.
  footerLinks: [
    {
      label: 'Privacy Policy',
      url: '/privacyPolicy',
    },
    {
      label: 'Terms And Conditions',
      url: '/terms',
    },
  ],
};
config.copyright = `Copyright © ${config.copyrightYear}. ${config.author}`;

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = '';
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`;

module.exports = config;
