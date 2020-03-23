/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import config from '../../../config/siteConfig';
import './style.scss';
import GitLabPNG from '../../../static/customIcons/gitlab-brands.png';
import TwitterPNG from '../../../static/customIcons/twitter-brands.png';

const FooterList = () => {
  return (
    <p>
      <a href={config.footerLinks[0].url}>{config.footerLinks[0].label}</a>
      {' | '}
      <a href={config.footerLinks[1].url}>{config.footerLinks[1].label}</a>
    </p>
  );
};

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="links">
        {config.rrssb.map(item => {
          if (item.label === 'gitlab') {
            return (
              <a href={item.url} key={item.label} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
                <img src={GitLabPNG} style={{ height: '30px' }} />
              </a>
            );
          } else if (item.label === 'twitter') {
            return (
              <a href={item.url} key={item.label} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
                <img src={TwitterPNG} style={{ height: '30px' }} />
              </a>
            );
          }
          return (
            <a href={item.url} key={item.label} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
              <i className={`${item.iconClassName} fa-2x`} />
            </a>
          );
        })}
        <a href={`${config.pathPrefix}${config.siteRss}`} target="_blank" rel="noopener noreferrer" aria-label="rss">
          <i className="fa fa-rss fa-2x" />
        </a>
      </div>
      <p>{config.copyright}</p>
      <FooterList />
    </footer>
  );
};

export default React.memo(Footer);
