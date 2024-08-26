import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

import { Navbar } from './sections/navbar'
import { About } from './sections/about'
import { HeroSection } from './sections/herosection'
import FolderIcon from '@/assets/icons/folder-icon.svg'
import GithubIcon from '@/assets/icons/github.svg'
import LinkIcon from '@/assets/icons/link-icon.svg'
import InstagramIcon from '@/assets/icons/instagram.svg'
import TwitterIcon from '@/assets/icons/twitter.svg'
import LinkedinIcon from '@/assets/icons/linkedin.svg'
import CodepenIcon from '@/assets/icons/codepen.svg'
import { Experience } from './sections/experience'
import Projects from './sections/projects/Projects'
import Contact from './sections/contact/Contact'

export const metadata: Metadata = {
  title: 'Portfolio | Damoon Darvishi',
}

const Home: React.FC = () => {
  return (
    <div className="root">
      <div className="container">
        <Navbar />
        <div className="left">
          <ul>
            <li>
              <Link href="https://github.com/DamoonDarvishi">
                <GithubIcon width={24} height={24} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <InstagramIcon width={24} height={24} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <TwitterIcon width={24} height={24} />
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/damoon-darvishi-react-developer/">
                <LinkedinIcon width={24} height={24} />
              </Link>
            </li>
            <li>
              <Link href="#">
                <CodepenIcon width={24} height={24} />
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
            <Experience />
            <Projects />
            <Contact />
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
                          <FolderIcon width={24} height={24} />
                        </div>
                        <div className="project-links">
                          <Link href="#">
                            <GithubIcon width={24} height={24} />
                          </Link>
                          <Link href="#">
                            <LinkIcon width={24} height={24} />
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
                          <FolderIcon width={24} height={24} />
                        </div>
                        <div className="project-links">
                          <Link href="#">
                            <GithubIcon width={24} height={24} />
                          </Link>
                          <Link href="#">
                            <LinkIcon width={24} height={24} />
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
                          <FolderIcon width={24} height={24} />
                        </div>
                        <div className="project-links">
                          <Link href="#">
                            <GithubIcon width={24} height={24} />
                          </Link>
                          <Link href="#">
                            <LinkIcon width={24} height={24} />
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
                          <FolderIcon width={24} height={24} />
                        </div>
                        <div className="project-links">
                          <Link href="#">
                            <GithubIcon width={24} height={24} />
                          </Link>
                          <Link href="#">
                            <LinkIcon width={24} height={24} />
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
                          <FolderIcon width={24} height={24} />
                        </div>
                        <div className="project-links">
                          <Link href="#">
                            <GithubIcon width={24} height={24} />
                          </Link>
                          <Link href="#">
                            <LinkIcon width={24} height={24} />
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
                          <FolderIcon width={24} height={24} />
                        </div>
                        <div className="project-links">
                          <Link href="#">
                            <GithubIcon width={24} height={24} />
                          </Link>
                          <Link href="#">
                            <LinkIcon width={24} height={24} />
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
