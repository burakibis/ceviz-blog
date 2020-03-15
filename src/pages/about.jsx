import React from "react";
import Layout from "../layout";
import profile from "../../static/profile.png";
import SEO from "../components/SEO";
import "./about.scss";

const About = () => {
  return (
    <Layout>
      <SEO title="About" path="/about" />
      <article className="about">
        <img src={profile} className="user-avatar" alt="profile" />
        <section className="about-context">
          <div>
            <h1>About Ceviz Lab</h1>
            <p>
              Ceviz Lab is a roof where I gather my initiatives.{" "}
              <strong>ceviz.io</strong> is a technology blog where I mostly
              share my software experiences, problems and projects I encounter
              on a weekly basis. It is also a small contribution to the open
              source world. All kinds of questions, opinions, suggestions, even
              'I have an idea but..' everything you say. Feel free to contact
              with me on my e-mail, Twitter or Instagram.
            </p>
            <h1>About Me</h1>
            <p>
              I was born in Balikesir/Turkey at 1993 of July. In 1998, my father
              bought a computer that name is "Escort". I learnt using PC with
              Chip and PCOyun magazines. The first website that I entered with
              ixir and 56K modem (that's my first internet provider) is
              grafi2000. When we realized that the internet was something that
              could end, I unplugged it and played flash games with offline mode
              of Internet Explorer.
            </p>
            <br />
            <p>
              I love open-source software that is why I am currently using Linux
              and open source applications. In my personal computer, I am using
              Fedora 30. Also I love contributing to open-source projects. So If
              you have any idea, please contact me immediately!
            </p>
            <ul>
              <li>
                
              </li>
            </ul>
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
              <li>PHP based: CodeIgniter,</li>
              <li>Javascript based: React.js, Gatsby.js, React Native,</li>
              <li>DevOps: Vagrant, Docker,</li>
              <li>Database: PostgreSQL, MySQL,</li>
              <li>
                Tools: GitLab (+API), GitHub (+API), Redmine (+API), Sendgrid
                (+API), Slack (I ❤ Slack API)
              </li>
              <li>Trying something with Arduino</li>
            </ul>
            <h1 id="projects">Projects</h1>
            <h2 id="yanci-tracker">Yanci Tracker</h2>
            <img
              style={{ width: "500px" }}
              src="https://res.cloudinary.com/dqdghe6rx/image/upload/v1582248999/ceviz.io/screencapture-yanci-herokuapp-2020-02-21-01_42_34-min_lkxdf1.png"
            />
            <hr />
            <p>
              Food order tracking application for companies. It was written to
              track the debtors that disappeared after ordering, to remind them
              of their debts, to report who owes how much.
            </p>
            <ul>
              <strong>Stacks:</strong>
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
            <h2 id="gratis-career">Gratis Career</h2>
            <img
              style={{ width: "500px" }}
              src="https://res.cloudinary.com/dqdghe6rx/image/upload/v1582249022/ceviz.io/screencapture-kariyer-gratis-2020-02-21-01_42_59-min_kxhre5.png"
            />
            <hr />
            <p>
              Gratis’s corporate and career website. Includes job applications,
              employee interviews, information about the company.
            </p>
            <ul>
              <li>
                <strong>Stacks:</strong>
                <p>Wordpress 5.1</p>
              </li>
              <li>
                <p>Custom theme (jQuery 3 + CSS</p>
              </li>
            </ul>
            <h2 id="badpanty-e-commerce">Badpanty E-Commerce</h2>
            <p>
              C2C e-commerce site that supports exchanges with Cryptocurrency.
              Customers sell to customers.
            </p>
            <ul>
              <li>
                <strong>Stacks:</strong>
                <p>Python 3.7</p>
              </li>
              <li>
                <p>Django 2.8</p>
              </li>
              <li>
                <p>Django REST Framework 3</p>
              </li>
              <li>
                <p>
                  React.js 16.1 + Jinja2 (two app on server with webpack bundle)
                </p>
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
              HotNews is mobile news application. The news shared from the user
              interface are sent as a notification to the users’ mobile phones
              upon request. It has the features of showing news according to the
              location, recording the news, commenting on the news.
            </p>
            <ul>
              <li>
                <strong>Stacks:</strong>
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
              A personal blog that open-source where I share the problems I
              often encounter and the new technologies I learn. I used Papan01
              themes on my site. If you are wondering how to install, deploy and
              improve, here url:{" "}
              <a href="https://github.com/papan01/gatsby-starter-papan01">
                https://github.com/papan01/gatsby-starter-papan01
              </a>
            </p>
            <p>
              GitHub Repo:{" "}
              <a href="https://github.com/mindlabcore/ceviz-blog">
                https://github.com/mindlabcore/ceviz-blog
              </a>
            </p>
            <ul>
              <li>
                <strong>Stacks:</strong>
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
              The website that open-source and based on Jekyll (Ruby) where I
              shared my blog posts in the past. Content management is
              troublesome, has a lot of bugs. Therefore, it is no longer
              available.
            </p>
            <p>
              GitHub Repo:{" "}
              <a href="https://github.com/virgulco/virgulco.github.io">
                https://github.com/virgulco/virgulco.github.io
              </a>
            </p>
            <ul>
              <li>
                <strong>Stacks:</strong>
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
              It is a simple remote control system project with http socket
              using a simple Arduino Uno and a few leds. You can find my blog
              post, the details of which can be found at the following link:{" "}
              <a href="https://www.ceviz.io/archives/2019-12-20-testing-in-netlify-cms">
                https://www.ceviz.io/archives/2019-12-20-testing-in-netlify-cms
              </a>
            </p>
            <p>
              GitLab Repo:{" "}
              <a href="https://gitlab.com/burakibis/hello-little-arduino">
                https://gitlab.com/burakibis/hello-little-arduino
              </a>
            </p>
            <ul>
              <li>
                <strong>Stacks:</strong>
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
        </section>
      </article>
    </Layout>
  );
};

export default About;
