import React from 'react';
import Layout from '../layout';
import profile from '../../static/profile.png';
import SEO from '../components/SEO';
import './about.scss';

const About = () => {
  return (
    <Layout>
      <SEO title="About" path="/about" />
      <article className="about">
        <img src={profile} className="user-avatar" alt="profile" />
        <section className="about-context">
          <div>
            <p>
              <strong>Virgul.co</strong> is a technology blog where I mostly share my
              software experiences, problems and projects I encounter on a weekly basis.
              It is also a small contribution to the open source world. All kinds of
              questions, opinions, suggestions, even 'I have an idea but..' everything you
              say. Feel free to contact with me on my e-mail (burak@ceviz.io).
  </p>
            <h2 id="personalinformations">Personal Informations</h2>
            <p>
              I was born in Balikesir/Turkey at 1993 of July. In 1998, my father bought a
              computer that name is "Escort". I learnt using PC with Chip and PCOyun
              magazines. The first website that I entered with ixir and 56K modem (that's
              my first internet provider) is grafi2000. When we realized that the internet
              was something that could end, I unplugged it and played flash games with
              offline mode of Internet Explorer.
  </p>
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
              <li>Javascript based: React.js, React Native,</li>
              <li>DevOps: Vagrant, Docker,</li>
              <li>Database: SQLite3, PostgreSQL, MySQL,</li>
              <li>
                Tools: GitLab (+API), GitHub (+API), Redmine (+API), Sendgrid (+API),
                Slack (I ❤ Slack API)
    </li>
              <li>Trying something with Arduino</li>
            </ul>
            <h2 id="projects">Projects</h2>
            <ul>
              <li>
                <p>
                  <strong>Virgul.co</strong>: Developed with Jekyll, a blog framework
                  written in Ruby. It's text based and hosted serverless on GitHub Pages.
        If you're wondering how to install, deploy, and develop, you can visit{" "}
                  <a href="https://jekyllrb.com/">Jekyll Documantation</a>{" "}
                </p>
              </li>
              <li>
                <p>
                  <strong>Badpanty E-Commerce</strong>: C2C e-commerce site that supports
                  exchanges with Cryptocurrency. Backend developed with Django and
                  frontend has little bit React.js. Development is ongoing. Uses the
                  PostgrSQL database. Celery is used for asynchronous operations.
      </p>
              </li>
              <li>
                <p>
                  <strong>Gratis Career</strong>: Gratis's corporate and career website.
                  Includes job applications, employee interviews, information about the
        company. Developed with Wordpress.{" "}
                  <a href="https://www.gratis.com/kariyer">Gratis Career</a>
                </p>
              </li>
              <li>
                <p>
                  <strong>HotNews</strong>: HotNews is mobile news application. It
                  developed with React Native + Redux which provides a hybrid solution for
                  iOS and Android. Coming soon in Apple and Android Market.
                </p>
              </li>
            </ul>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default About;
