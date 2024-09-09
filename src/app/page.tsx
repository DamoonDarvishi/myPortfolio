import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

import { Navbar } from './sections/navbar'
import { About } from './sections/about'
import { HeroSection } from './sections/herosection'
import GithubIcon from '@/assets/icons/github.svg'
import InstagramIcon from '@/assets/icons/instagram.svg'
import TwitterIcon from '@/assets/icons/twitter.svg'
import LinkedinIcon from '@/assets/icons/linkedin.svg'
import CodepenIcon from '@/assets/icons/codepen.svg'
import { Experience } from './sections/experience'
import Projects from './sections/projects/Projects'
import Contact from './sections/contact/Contact'
import OtherProjects from './sections/other-projects/OtherProjects'
import Menu from './sections/navbar/components/menu'

export const metadata: Metadata = {
  title: 'Portfolio | Damoon Darvishi',
}

const Home: React.FC = () => {
  return (
    <div className="root">
      <div className="container">
        {/* <Navbar /> */}
        <Menu />
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
            <OtherProjects />
            <Contact />
          </main>
          <footer className="footer">Footer</footer>
        </div>
      </div>
    </div>
  )
}

export default Home
