'use client'
import Button from '@/components/button/Button'
import Logo from '@/assets/icons/DD-logo.svg'
import Link from 'next/link'
import MenuIcon from '@/assets/icons/humburgerMenu.svg'
import CloseIcon from '@/assets/icons/closeIcon.svg'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './_navbar.scss'

const sectionLinks = [
  { name: 'About', link: '/#about' },
  { name: 'Experience', link: '/#experience' },
  { name: 'Work', link: '/#work' },
  {
    name: 'Contact',
    link: '/#contact',
  },
]

function Navbar() {
  const [navbarVisible, setNavbarVisible] = useState(false)
  const [responsiveNavVisible, setResponsiveNavVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.pageYOffset > 100
        ? setNavbarVisible(true)
        : setNavbarVisible(false)
    })
  }, [])

  useEffect(() => {
    const links = document.querySelectorAll('.nav-items-list-item-link')
    links.forEach((link) => {
      link.addEventListener('click', () => setResponsiveNavVisible(false))
    })
    const nav = document.querySelector('.nav-items')
    nav?.addEventListener('click', (e) => {
      e.stopPropagation()
    })
    const html = document.querySelector('html')
    html?.addEventListener('click', (e) => {
      setResponsiveNavVisible(false)
    })
  }, [])

  useEffect(() => {
    const main = document.querySelector('main')
    if (responsiveNavVisible) {
      main?.classList.add('blur')
    } else {
      main?.classList.remove('blur')
    }
  }, [responsiveNavVisible])

  return (
    <nav>
      <div className={`wrapper ${navbarVisible ? 'blur-nav' : ''}`}>
        <motion.div
          className="brand"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
        >
          <Link href="#">
            <Logo width={60} height={60} />
          </Link>
        </motion.div>
        <motion.div
          className="nav-responsive-toggle"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
        >
          {responsiveNavVisible ? (
            <CloseIcon
              onClick={(e) => {
                e.stopPropagation()
                setResponsiveNavVisible(false)
              }}
            />
          ) : (
            <MenuIcon
              onClick={(e) => {
                e.stopPropagation()
                setResponsiveNavVisible(true)
              }}
            />
          )}
        </motion.div>
        <div
          className={`${responsiveNavVisible && 'nav-responsive'} nav-items`}
        >
          <ul className="nav-items-list">
            {sectionLinks.map(({ name, link }, index) => (
              <motion.li
                key={name}
                className="nav-items-list-item"
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                  delay: 0.3 + index * 0.1,
                }}
              >
                <Link href={link} className="nav-items-list-item-link">
                  {name}
                </Link>
              </motion.li>
            ))}
          </ul>
          <motion.div
            className="nav-items-button"
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
              delay: 0.6,
            }}
          >
            <Button text="Resume!" link="/DamoonDarvishi-Resume-2024.pdf" />
          </motion.div>
        </div>
      </div>
    </nav>
  )
}

export { Navbar }
