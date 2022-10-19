import Image from 'next/image'
import Navbar from '../layouts/navbar'
import Github from '../assets/github.svg'
import Instagram from '../assets/instagram.svg'
import Twitter from '../assets/twitter.svg'
import Linkedin from '../assets/linkedin.svg'
import Codepen from '../assets/codepen.svg'
import FolderIcon from '../assets/folder-icon.svg'
import LinkIcon from '../assets/link-icon.svg'

export default function Home() {

  return (
    <div className={'root'}>
      <div className={'container'}>
        <header className='nav-header'>
          <Navbar />
        </header>
        <div className={'left'}>
          <ul>
            <li><a href="#"><Image src={Github} width="48px" height="48px" alt="social-media" /></a></li>
            <li><a href="#"><Image src={Instagram} width="48px" height="48px" alt="social-media" /></a></li>
            <li><a href="#"><Image src={Twitter} width="48px" height="48px" alt="social-media" /></a></li>
            <li><a href="#"><Image src={Linkedin} width="48px" height="48px" alt="social-media" /></a></li>
            <li><a href="#"><Image src={Codepen} width="48px" height="48px" alt="social-media" /></a></li>
          </ul>
        </div>
        <div className={'right'}>
          <div className='email'>
            <a href="#">Damoon.darvishi@gmail.com</a>
          </div>
        </div>
        <div id='content'>
          <main className={'main-container'}>
            <section className={'hero'}>
              <div><h1>Hi, my name is</h1></div>
              <div><h2>Damoon Darvishi</h2></div>
              <div><h3>I build things for the web.</h3></div>
              <div>
                <p>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
                  Currently, I’m focused on building accessible, human-centered products at Selected Group.</p>
              </div>
              <div><a href='#'>Check out my resume!</a></div>
            </section>
            <section id='about' className={'about'}>
              <h2>About Me</h2>
              <div className='inner'>
                <div className='inner-about'>
                  <div className='about-content'>
                    <p>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
                    <p>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
                    <p>I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.</p>
                    <p>Here are a few technologies I’ve been working with recently:</p>
                  </div>
                  <ul className="skills-list"><li>JavaScript (ES6+)</li><li>TypeScript</li><li>React</li><li>Eleventy</li><li>Node.js</li><li>WordPress</li></ul>
                </div>
                <div className='inner-picture'><Image src="https://picsum.photos/200/300" width={300} height={300} alt="pic" /></div>
              </div>

            </section>
            <section id='jobs' className='jobs'>
              <h2>Where I’ve Worked</h2>
            </section>
            <section id='projects' className='projects'>
              <h2>Some Things I’ve Built</h2>
            </section>
            <section className='noteworthy-projects'>
              <h2>
                Other Noteworthy Projects
              </h2>
              <a className='archive-project' href="#">view the archive</a>
              <ul className='ul-project'>
                <li>
                  <div className='project-inner'>
                    <header>
                      <div className='project-top'>
                        <div className="folder"><Image src={FolderIcon} alt="" /></div>
                        <div className="project-links">
                          <a href="#">
                            <Image src={Github} alt="" />
                          </a>
                          <a href="#">
                            <Image src={LinkIcon} alt="" width={24} height={24} />
                          </a>
                        </div>
                      </div>
                      <h3 className='project-title'><a className='project-title-link' href="#">Integrating Algolia Search with WordPress Multisite</a></h3>
                      <div className='project-description'><p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p></div>
                    </header>
                    <footer>
                      <ul className='project-tech-list'>
                        <li>React</li>
                        <li>Javascript</li>
                        <li>Node</li>
                      </ul>
                    </footer>
                  </div>
                </li>
                <li>
                  <div className='project-inner'>
                    <header>
                      <div className='project-top'>
                        <div className="folder"><Image src={FolderIcon} alt="" /></div>
                        <div className="project-links">
                          <a href="#">
                            <Image src={Github} alt="" />
                          </a>
                          <a href="#">
                            <Image src={LinkIcon} alt="" width={24} height={24} />
                          </a>
                        </div>
                      </div>
                      <h3 className='project-title'><a className='project-title-link' href="#">Integrating Algolia Search with WordPress Multisite</a></h3>
                      <div className='project-description'><p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p></div>
                    </header>
                    <footer>
                      <ul className='project-tech-list'>
                        <li>React</li>
                        <li>Javascript</li>
                        <li>Node</li>
                      </ul>
                    </footer>
                  </div>
                </li>
                <li>
                  <div className='project-inner'>
                    <header>
                      <div className='project-top'>
                        <div className="folder"><Image src={FolderIcon} alt="" /></div>
                        <div className="project-links">
                          <a href="#">
                            <Image src={Github} alt="" />
                          </a>
                          <a href="#">
                            <Image src={LinkIcon} alt="" width={24} height={24} />
                          </a>
                        </div>
                      </div>
                      <h3 className='project-title'><a className='project-title-link' href="#">Integrating Algolia Search with WordPress Multisite</a></h3>
                      <div className='project-description'><p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p></div>
                    </header>
                    <footer>
                      <ul className='project-tech-list'>
                        <li>React</li>
                        <li>Javascript</li>
                        <li>Node</li>
                      </ul>
                    </footer>
                  </div>
                </li>
                <li>
                  <div className='project-inner'>
                    <header>
                      <div className='project-top'>
                        <div className="folder"><Image src={FolderIcon} alt="" /></div>
                        <div className="project-links">
                          <a href="#">
                            <Image src={Github} alt="" />
                          </a>
                          <a href="#">
                            <Image src={LinkIcon} alt="" width={24} height={24} />
                          </a>
                        </div>
                      </div>
                      <h3 className='project-title'><a className='project-title-link' href="#">Integrating Algolia Search with WordPress Multisite</a></h3>
                      <div className='project-description'><p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p></div>
                    </header>
                    <footer>
                      <ul className='project-tech-list'>
                        <li>React</li>
                        <li>Javascript</li>
                        <li>Node</li>
                      </ul>
                    </footer>
                  </div>
                </li>
                <li>
                  <div className='project-inner'>
                    <header>
                      <div className='project-top'>
                        <div className="folder"><Image src={FolderIcon} alt="" /></div>
                        <div className="project-links">
                          <a href="#">
                            <Image src={Github} alt="" />
                          </a>
                          <a href="#">
                            <Image src={LinkIcon} alt="" width={24} height={24} />
                          </a>
                        </div>
                      </div>
                      <h3 className='project-title'><a className='project-title-link' href="#">Integrating Algolia Search with WordPress Multisite</a></h3>
                      <div className='project-description'><p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p></div>
                    </header>
                    <footer>
                      <ul className='project-tech-list'>
                        <li>React</li>
                        <li>Javascript</li>
                        <li>Node</li>
                      </ul>
                    </footer>
                  </div>
                </li>
                <li>
                  <div className='project-inner'>
                    <header>
                      <div className='project-top'>
                        <div className="folder"><Image src={FolderIcon} alt="" /></div>
                        <div className="project-links">
                          <a href="#">
                            <Image src={Github} alt="" />
                          </a>
                          <a href="#">
                            <Image src={LinkIcon} alt="" width={24} height={24} />
                          </a>
                        </div>
                      </div>
                      <h3 className='project-title'><a className='project-title-link' href="#">Integrating Algolia Search with WordPress Multisite</a></h3>
                      <div className='project-description'><p>Building a custom multisite compatible WordPress plugin to build global search with Algolia</p></div>
                    </header>
                    <footer>
                      <ul className='project-tech-list'>
                        <li>React</li>
                        <li>Javascript</li>
                        <li>Node</li>
                      </ul>
                    </footer>
                  </div>
                </li>
              </ul>
            </section>
            <section id='contact' className={'contact'}>
              <h2>
                What’s Next?
              </h2>
            </section>
          </main>
          <footer className={'footer'}>Footer</footer>
        </div>
      </div>
    </div >
  )
}
