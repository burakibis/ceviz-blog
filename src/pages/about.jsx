import React from 'react';
import Layout from '../layout';
import SEO from '../components/SEO';
import ImageComponent from '../components/imageComponent';
import './about.scss';

const About = () => {
  return (
    <Layout>
      <SEO title="About" path="/about" />

      <div className="markdowm-body">
        <p>
          <h2>About Ceviz Lab</h2>
          Ceviz Lab is a roof where I gather my initiatives. <strong>ceviz.io</strong> is a technology blog where I
          mostly share my software experiences, problems and projects I encounter on a weekly basis. It is also a small
          contribution to the open source world. All kinds of questions, opinions, suggestions, even 'I have an idea
          but..' everything you say. Feel free to contact with me on my e-mail, Twitter or Instagram.
          <h2>About Me</h2>
          I was born in Balikesir/Turkey at 1993 of July. In 1998, my father bought a computer that name is "Escort". I
          learnt using PC with Chip and PCOyun magazines. The first website that I entered with ixir and 56K modem
          (that's my first internet provider) is grafi2000. When we realized that the internet was something that could
          end, I unplugged it and played flash games with offline mode of Internet Explorer.
        <br />
        <br />
        
          I care about three things: Nature, free & easy access to information-health-justice, equality in income distribution. If
          you’re looking for a warrior for the things, feel free to contact me. I love open-source software that is why
          I am using Linux and open source applications such as Fedora 30, Ubuntu 16/18, Brave, VSCode, Vim, Docker,
          LibreOffice, WordPress.
        </p>
        <ul />
        <h2 id="jobexperiences">Job Experiences</h2>
        <ul>
          <li>2015-2016 - Zorlu Holding - Budget Reporting Specialist</li>
          <li>2016-2018 - Reeder International - Business Analyst</li>
          <li>2018-2019 - Sabancı Holding - Business Analyst</li>
          <li>2019 -...... - Artistanbul - Software Developer</li>
        </ul>
        <h2 id="areasofexpertise">Areas of Expertise</h2>
        <ul>
          <li>Python based: Flask, Django &amp; Rest,</li>
          <li>PHP based: Wordpress, WooCommerce, CodeIgniter,</li>
          <li>Javascript based: React.js, Gatsby.js, React Native, jQuery</li>
          <li>DevOps: Vagrant, Docker, Azure, Apache2, Nginx</li>
          <li>Database: PostgreSQL, MySQL, Redis, RabbitMQ</li>
          <li>
            Tools: Django Channels, Redis, Celery, GitLab (+API), GitHub (+API),
            <br/>
            Redmine (+API), Sendgrid (+API), Slack
            (I ❤ Slack API),
          </li>
          <li>Trying something with Arduino</li>
        </ul>
        <h1 id="projects">Projects</h1>
        <h2 id="yanci-tracker">Yanci Tracker</h2>
        <ImageComponent url="https://res.cloudinary.com/dqdghe6rx/image/upload/v1582248999/ceviz.io/screencapture-yanci-herokuapp-2020-02-21-01_42_34-min_lkxdf1.png" />
        <hr />
        <p>
          Food order tracking application for companies. It was written to track the debtors that disappeared after
          ordering, to remind them of their debts, to report who owes how much.
        </p>
        <strong>Stacks:</strong>
        <ul>
          <li>
            <p>Python 3.7</p>
          </li>
          <li>
            <p>Django 3.0</p>
          </li>
          <li>
            <p>Django Rest Framework 3.11</p>
          </li>
          <li>
            <p>Knox Token Auth</p>
          </li>
          <li>
            <p>ReactJS 16.1</p>
          </li>
          <li>
            <p>Redux 4</p>
          </li>
          <li>
            <p>PostgreSQL</p>
          </li>
        </ul>
        <h2 id="hello-minaste">Hello Minaste E-Commerce</h2>
        <ImageComponent url="https://res.cloudinary.com/dqdghe6rx/image/upload/v1584784609/ceviz.io/project_covers/705b5076-73f0-4e51-8df4-02cd72b98e4e-min_kcyfke.png" />
        <hr />
        <p>
          This is an e-commerce website initiative that sells products for me and my girlfriend, such as natural
          candles, incense, stones, ceramic products and lavender oil.
        </p>
        <p>
          Live:
          <a href="https://hellominaste.com"> Hello Minaste</a>
        </p>
        <strong>Stacks:</strong>
        <ul>
          <li>
            <p>Wordpress 5.3.2</p>
          </li>
          <li>
            <p>WooCommerce</p>
          </li>
          <li>
            <p>PHP 7.4</p>
          </li>
          <li>
            <p>MySQL</p>
          </li>
          <li>
            <p>ElasticSearch</p>
          </li>
        </ul>
        <h2 id="gratis-career">Gratis Career</h2>
        <ImageComponent url="https://res.cloudinary.com/dqdghe6rx/image/upload/v1582249022/ceviz.io/screencapture-kariyer-gratis-2020-02-21-01_42_59-min_kxhre5.png" />
        <hr />
        <p>
          Gratis’s corporate and career website. Includes job applications, employee interviews, information about the
          company.
        </p>
        <strong>Stacks:</strong>
        <ul>
          <li>
            <p>Wordpress 5.1</p>
          </li>
        </ul>
        <h2 id="badpanty-e-commerce">Badpanty E-Commerce</h2>
        <p>C2C e-commerce site that supports exchanges with Cryptocurrency. Customers sell to customers.</p>
        <strong>Stacks:</strong>
        <ul>
          <li>
            <p>Python 3.7</p>
          </li>
          <li>
            <p>Django 2.8</p>
          </li>
          <li>
            <p>Django REST Framework 3</p>
          </li>
          <li>
            <p>React.js 16.1 + Jinja2 (two app on server with webpack bundle)</p>
          </li>
          <li>
            <p>PostgreSQL</p>
          </li>
          <li>
            <p>Celery</p>
          </li>
          <li>
            <p>Redis</p>
          </li>
        </ul>
        <h2 id="hotnews-mobile-app">HotNews Mobile App</h2>
        <p>
          HotNews is mobile news application. The news shared from the user interface are sent as a notification to the
          users’ mobile phones upon request. It has the features of showing news according to the location, recording
          the news, commenting on the news.
        </p>
        <strong>Stacks:</strong>
        <ul>
          <li>
            <p>Python 3.7</p>
          </li>
          <li>
            <p>Django 2.8</p>
          </li>
          <li>
            <p>Django REST Framework 3</p>
          </li>
          <li>
            <p>React Native 0.59</p>
          </li>
          <li>
            <p>Redux 4</p>
          </li>
          <li>
            <p>Firebase</p>
          </li>
        </ul>
        <h2 id="ceviz.io-blog">ceviz.io Blog</h2>
        <p>
          A personal blog that open-source where I share the problems I often encounter and the new technologies I
          learn. I used Papan01 themes on my site. If you are wondering how to install, deploy and improve, here url:
{' '}
          <a href="https://github.com/papan01/gatsby-starter-papan01">Gatsby Starter Papan01</a>
        </p>
        <p>
          GitHub Repo: <a href="https://github.com/burakibis/ceviz-blog">Ceviz Blog</a>
        </p>
        <strong>Stacks:</strong>
        <ul>
          <li>
            <p>React.js</p>
          </li>
          <li>
            <p>Node.js</p>
          </li>
          <li>
            <p>Gatsby.js</p>
          </li>
          <li>
            <p>GraphQL</p>
          </li>
          <li>
            <p>Netlify CMS with CI</p>
          </li>
          <li>
            <p>GitHub Pages</p>
          </li>
        </ul>
        <h2 id="virgul.co-blog">virgul.co Blog</h2>
        <p>
          The website that open-source and based on Jekyll (Ruby) where I shared my blog posts in the past. Content
          management is troublesome, has a lot of bugs. Therefore, it is no longer available.
        </p>
        <p>
          GitHub Repo: <a href="https://github.com/virgulco/virgulco.github.io">Virgul Co.</a>
        </p>
        <strong>Stacks:</strong>
        <ul>
          <li>
            <p>Ruby 2.6</p>
          </li>
          <li>
            <p>RubyGem</p>
          </li>
          <li>
            <p>Python 3.6</p>
          </li>
          <li>
            <p>Github Pages</p>
          </li>
          <li>
            <p>Bundle</p>
          </li>
        </ul>
        <h2 id="hello-little-arduino">Hello Little Arduino</h2>
        <p>
          It is a simple remote control system project with http socket using a simple Arduino Uno and a few leds. You
          can find my blog post, the details of which can be found at the following link:
{' '}
          <a href="https://www.ceviz.io/archives/2019-12-20-hello-little-arduino">Hello Little Arduino</a>
        </p>
        <p>
          GitLab Repo: <a href="https://gitlab.com/burakibis/hello-little-arduino">Hello Little Arduino</a>
        </p>
        <strong>Stacks:</strong>
        <ul>
          <li>
            <p>Arduino UNO</p>
          </li>
          <li>
            <p>OpenJDK</p>
          </li>
          <li>
            <p>Node.js</p>
          </li>
          <li>
            <p>Johnny-Five and narf libraries</p>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default About;
