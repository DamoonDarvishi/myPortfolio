'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Logo from '@/assets/icons/DD-logo.svg'
import './_menu.scss'

const sectionLinks = [
  { name: 'About', link: '/#about' },
  { name: 'Experience', link: '/#experience' },
  { name: 'Work', link: '/#work' },
  {
    name: 'Contact',
    link: '/#contact',
  },
]
const Menu = () => {
  return (
    <section className="top-nav">
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
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
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
    </section>
  )
}

export default Menu
