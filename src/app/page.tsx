import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

import Navbar from './_components/navbar'
import { About } from './_components/about'
import { HeroSection } from './_components/herosection'
import {
  IconCodepen,
  IconFolderIcon,
  IconGithub,
  IconInstagram,
  IconLinkIcon,
  IconLinkedin,
  IconTwitter,
} from '../components/icons'

export const metadata: Metadata = {
  title: 'Portfolio | Damoon Darvishi',
}

const Home: React.FC = () => {
  return (
    <div className="root">
      <div className="container">
        <header className="nav-header">
          <Navbar />
        </header>
        <div className="left">
          <ul>
            <li>
              <Link href="https://github.com/DamoonDarvishi">
                <IconGithub />
              </Link>
            </li>
            <li>
              <Link href="#">
                <IconInstagram />
              </Link>
            </li>
            <li>
              <Link href="#">
                <IconTwitter />
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/damoon-darvishi-react-developer/">
                <IconLinkedin />
              </Link>
            </li>
            <li>
              <Link href="#">
                <IconCodepen />
              </Link>
            </li>
          </ul>
        </div>
        <div className="right">
          <div className="email">
            <Link href="mailto:damoon.darvishi@gmail.com?subject=Hello&body=I love your portfolio site 🥰, I will be happy to work with you 🤝">
              Damoon.darvishi@gmail.com
            </Link>
          </div>
        </div>
        <div id="content">
          <main className="main-container">
            <HeroSection />
            <About />
            <section id="jobs" className="jobs">
              <h2>Where I’ve Worked</h2>
            </section>
            <section id="projects" className="projects">
              <h2>Some Things I’ve Built</h2>
            </section>
            <section className="noteworthy-projects">
              <h2>Other Noteworthy Projects</h2>
              <Link className="archive-project" href="#">
                view the archive
              </Link>
              <ul className="ul-project">
                <li>
                  <div className="project-inner">
                    <header>
                      <div className="project-top">
                        <div className="folder">
                          <IconFolderIcon />
                        </div>
                        <div className="project-links">
                          <Link href="#">
                            <IconGithub />
                          </Link>
                          <Link href="#">
                            <IconLinkIcon />
                          </Link>
                        </div>
                      </div>
                      <h3 className="project-title">
                        <Link className="project-title-link" href="#">
                          Integrating Algolia Search with WordPress Multisite
                        </Link>
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
                          <Link href="#">
                            <IconGithub />
                          </Link>
                          <Link href="#">
                            <IconLinkIcon width={24} height={24} />
                          </Link>
                        </div>
                      </div>
                      <h3 className="project-title">
                        <Link className="project-title-link" href="#">
                          Integrating Algolia Search with WordPress Multisite
                        </Link>
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
                          <Link href="#">
                            <IconGithub />
                          </Link>
                          <Link href="#">
                            <IconLinkIcon />
                          </Link>
                        </div>
                      </div>
                      <h3 className="project-title">
                        <Link className="project-title-link" href="#">
                          Integrating Algolia Search with WordPress Multisite
                        </Link>
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
                          <Link href="#">
                            <IconGithub />
                          </Link>
                          <Link href="#">
                            <IconLinkIcon />
                          </Link>
                        </div>
                      </div>
                      <h3 className="project-title">
                        <Link className="project-title-link" href="#">
                          Integrating Algolia Search with WordPress Multisite
                        </Link>
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
                          <Link href="#">
                            <IconGithub />
                          </Link>
                          <Link href="#">
                            <IconLinkIcon />
                          </Link>
                        </div>
                      </div>
                      <h3 className="project-title">
                        <Link className="project-title-link" href="#">
                          Integrating Algolia Search with WordPress Multisite
                        </Link>
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
                          <Link href="#">
                            <IconGithub />
                          </Link>
                          <Link href="#">
                            <IconLinkIcon />
                          </Link>
                        </div>
                      </div>
                      <h3 className="project-title">
                        <Link className="project-title-link" href="#">
                          Integrating Algolia Search with WordPress Multisite
                        </Link>
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
              <Link className="email-link" href="#">
                Say Hello
              </Link>
            </section>
          </main>
          <footer className="footer">Footer</footer>
        </div>
      </div>
    </div>
  )
}

export default Home
