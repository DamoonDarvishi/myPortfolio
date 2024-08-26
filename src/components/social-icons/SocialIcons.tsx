import Link from 'next/link'
import React from 'react'
import GithubIcon from '@/assets/icons/github.svg'
import LinkIcon from '@/assets/icons/link-icon.svg'
import TwitterIcon from '@/assets/icons/twitter.svg'
import LinkedinIcon from '@/assets/icons/linkedin.svg'
import CodepenIcon from '@/assets/icons/codepen.svg'
import { motion } from 'framer-motion'
import './_social-icons.scss'
function SocialIcons() {
  const socialLinks = [
    { name: 'Github', icon: <GithubIcon />, link: 'https://www.github.com' },
    {
      name: 'Youtube',
      icon: <LinkIcon />,
      link: 'https://www.youtube.com/KishanSheth21/',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedinIcon />,
      link: 'https://www.linkedin.com/in/damoondarvishi/',
    },
    {
      name: 'Codepen',
      icon: <CodepenIcon />,
      link: 'https://instagram.com/koolkishansheth',
    },
    {
      name: 'Twitter',
      icon: <TwitterIcon />,
      link: 'https://twitter.com/koolkishansheth',
    },
  ]
  return (
    <motion.div
      className="social-icons"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
        delay: 1.95,
      }}
    >
      <ul className="social-icons-list">
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className="social-icons-list-item">
            <Link
              href={link}
              className="social-icons-list-item-link"
              target="_blank"
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default SocialIcons
