import React from 'react'
import Image from 'next/image'
import Navbar from '../layouts/navbar'
import {
  IconCodepen,
  IconFolderIcon,
  IconGithub,
  IconInstagram,
  IconLinkIcon,
  IconLinkedin,
  IconTwitter,
} from '../components/icons/icons'

const Home: React.FC = () => {
  return (
    <div className={'root'}>
      <div className={'container'}>
        <header className="nav-header">
          <Navbar />
        </header>
        <div className={'left'}>
          <ul>
            <li>
              <a href="https://github.com/DamoonDarvishi">
                <IconGithub />
              </a>
            </li>
            <li>
              <a href="#">
                <IconInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <IconTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/damoon-darvishi-react-developer/">
                <IconLinkedin />
              </a>
            </li>
            <li>
              <a href="#">
                <IconCodepen />
              </a>
            </li>
          </ul>
        </div>
        <div className={'right'}>
          <div className="email">
            <a href="mailto:damoon.darvishi@gmail.com?subject=Hello&body=I love your portfolio site 🥰, I will be happy to work with you 🤝">
              Damoon.darvishi@gmail.com
            </a>
          </div>
        </div>
        <div id="content">
          <main className={'main-container'}>
            <section className={'hero'}>
              <div>
                <h1>Hi, my name is</h1>
              </div>
              <div>
                <h2>Damoon Darvishi</h2>
              </div>
              <div>
                <h3>I build things for the web.</h3>
              </div>
              <div>
                <p>
                  I’m a software engineer specializing in building (and
                  occasionally designing) exceptional digital experiences.
                  Currently, I’m focused on building accessible, human-centered
                  products at Selected Group.
                </p>
              </div>
              <div>
                <a href="#">Check out my resume!</a>
              </div>
            </section>
            <section id="about" className={'about'}>
              <h2>About Me</h2>
              <div className="inner">
                <div className="inner-about">
                  <div className="about-content">
                    <p>
                      Hello! My name is Brittany and I enjoy creating things
                      that live on the internet. My interest in web development
                      started back in 2012 when I decided to try editing custom
                      Tumblr themes — turns out hacking together a custom reblog
                      button taught me a lot about HTML & CSS!
                    </p>
                    <p>
                      Fast-forward to today, and I’ve had the privilege of
                      working at an advertising agency, a start-up, a huge
                      corporation, and a student-led design studio. My main
                      focus these days is building accessible, inclusive
                      products and digital experiences at Upstatement for a
                      variety of clients.
                    </p>
                    <p>
                      I also recently launched a course that covers everything
                      you need to build a web app with the Spotify API using
                      Node & React.
                    </p>
                    <p>
                      Here are a few technologies I’ve been working with
                      recently:
                    </p>
                  </div>
                  <ul className="skills-list">
                    <li>JavaScript (ES6+)</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>Eleventy</li>
                    <li>Node.js</li>
                    <li>WordPress</li>
                  </ul>
                </div>
                <div className="inner-picture">
                  <Image
                    src="https://picsum.photos/200/300"
                    width={300}
                    height={300}
                    alt="pic"
                  />
                </div>
              </div>
            </section>
            <section id="jobs" className="jobs">
              <h2>Where I’ve Worked</h2>
            </section>
            <section id="projects" className="projects">
              <h2>Some Things I’ve Built</h2>
            </section>
            <section className="noteworthy-projects">
              <h2>Other Noteworthy Projects</h2>
              <a className="archive-project" href="#">
                view the archive
              </a>
              <ul className="ul-project">
                <li>
                  <div className="project-inner">
                    <header>
                      <div className="project-top">
                        <div className="folder">
                          <IconFolderIcon />
                        </div>
                        <div className="project-links">
                          <a href="#">
                            <IconGithub />
                          </a>
                          <a href="#">
                            <IconLinkIcon />
                          </a>
                        </div>
                      </div>
                      <h3 className="project-title">
                        <a className="project-title-link" href="#">
                          Integrating Algolia Search with WordPress Multisite
                        </a>
                      </h3>
                      <div className="project-description">
                        <p>
                          Building a custom multisite compatible WordPress
                          plugin to build global search with Algolia
                        </p>
                      </div>
                    </header>
                    <footer>
                      <ul className="project-tech-list">
                        <li>React</li>
                        <li>Javascript</li>
                        <li>Node</li>
                      </ul>
                    </footer>
                  </div>
                </li>
                <li>
                  <div className="project-inner">
                    <header>
                      <div className="project-top">
                        <div className="folder">
                          <IconFolderIcon />
                        </div>
                        <div className="project-links">
                          <a href="#">
                            <IconGithub />
                          </a>
                          <a href="#">
                            <IconLinkIcon width={24} height={24} />
                          </a>
                        </div>
                      </div>
                      <h3 className="project-title">
                        <a className="project-title-link" href="#">
                          Integrating Algolia Search with WordPress Multisite
                        </a>
                      </h3>
                      <div className="project-description">
                        <p>
                          Building a custom multisite compatible WordPress
                          plugin to build global search with Algolia
                        </p>
                      </div>
                    </header>
                    <footer>
                      <ul className="project-tech-list">
                        <li>React</li>
                        <li>Javascript</li>
                        <li>Node</li>
                      </ul>
                    </footer>
                  </div>
                </li>
                <li>
                  <div className="project-inner">
                    <header>
                      <div className="project-top">
                        <div className="folder">
                          <IconFolderIcon />
                        </div>
                        <div className="project-links">
                          <a href="#">
                            <IconGithub />
                          </a>
                          <a href="#">
                            <IconLinkIcon />
                          </a>
                        </div>
                      </div>
                      <h3 className="project-title">
                        <a className="project-title-link" href="#">
                          Integrating Algolia Search with WordPress Multisite
                        </a>
                      </h3>
                      <div className="project-description">
                        <p>
                          Building a custom multisite compatible WordPress
                          plugin to build global search with Algolia
                        </p>
                      </div>
                    </header>
                    <footer>
                      <ul className="project-tech-list">
                        <li>React</li>
                        <li>Javascript</li>
                        <li>Node</li>
                      </ul>
                    </footer>
                  </div>
                </li>
                <li>
                  <div className="project-inner">
                    <header>
                      <div className="project-top">
                        <div className="folder">
                          <IconFolderIcon />
                        </div>
                        <div className="project-links">
                          <a href="#">
                            <IconGithub />
                          </a>
                          <a href="#">
                            <IconLinkIcon />
                          </a>
                        </div>
                      </div>
                      <h3 className="project-title">
                        <a className="project-title-link" href="#">
                          Integrating Algolia Search with WordPress Multisite
                        </a>
                      </h3>
                      <div className="project-description">
                        <p>
                          Building a custom multisite compatible WordPress
                          plugin to build global search with Algolia
                        </p>
                      </div>
                    </header>
                    <footer>
                      <ul className="project-tech-list">
                        <li>React</li>
                        <li>Javascript</li>
                        <li>Node</li>
                      </ul>
                    </footer>
                  </div>
                </li>
                <li>
                  <div className="project-inner">
                    <header>
                      <div className="project-top">
                        <div className="folder">
                          <IconFolderIcon />
                        </div>
                        <div className="project-links">
                          <a href="#">
                            <IconGithub />
                          </a>
                          <a href="#">
                            <IconLinkIcon />
                          </a>
                        </div>
                      </div>
                      <h3 className="project-title">
                        <a className="project-title-link" href="#">
                          Integrating Algolia Search with WordPress Multisite
                        </a>
                      </h3>
                      <div className="project-description">
                        <p>
                          Building a custom multisite compatible WordPress
                          plugin to build global search with Algolia
                        </p>
                      </div>
                    </header>
                    <footer>
                      <ul className="project-tech-list">
                        <li>React</li>
                        <li>Javascript</li>
                        <li>Node</li>
                      </ul>
                    </footer>
                  </div>
                </li>
                <li>
                  <div className="project-inner">
                    <header>
                      <div className="project-top">
                        <div className="folder">
                          <IconFolderIcon />
                        </div>
                        <div className="project-links">
                          <a href="#">
                            <IconGithub />
                          </a>
                          <a href="#">
                            <IconLinkIcon />
                          </a>
                        </div>
                      </div>
                      <h3 className="project-title">
                        <a className="project-title-link" href="#">
                          Integrating Algolia Search with WordPress Multisite
                        </a>
                      </h3>
                      <div className="project-description">
                        <p>
                          Building a custom multisite compatible WordPress
                          plugin to build global search with Algolia
                        </p>
                      </div>
                    </header>
                    <footer>
                      <ul className="project-tech-list">
                        <li>React</li>
                        <li>Javascript</li>
                        <li>Node</li>
                      </ul>
                    </footer>
                  </div>
                </li>
              </ul>
              <button>Show More</button>
            </section>
            <section id="contact" className="contact">
              <h2 className="numberd-heading">What’s Next?</h2>
              <h2 className="title">Get In Touch</h2>
              <p>
                Although I’m not currently looking for any new opportunities, my
                inbox is always open. Whether you have a question or just want
                to say hi, I’ll try my best to get back to you!
              </p>
              <a className="email-link" href="#">
                Say Hello
              </a>
            </section>
          </main>
          <footer className={'footer'}>Footer</footer>
        </div>
      </div>
    </div>
  )
}

export default Home
