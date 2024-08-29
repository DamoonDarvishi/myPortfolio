'use client'
import React from 'react'
import HandIcon from '@/assets/icons/hand-hi.svg'
import Button from '@/components/button/Button'
import { motion } from 'framer-motion'
import './_hero.scss'

export function HeroSection() {
  return (
    <motion.div
      className="hero"
      id="hero"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="hero_info">
        <div>
          <span className="say-hello">Hello</span>
          <HandIcon width={32} height={32} />
        </div>
        <h2>I&apos;m Damoon</h2>
        <h3>Front-end Developer</h3>
        <div className="contact-cta">
          <Button text=" Check out my resume!" link="#" />
        </div>
      </div>
      <div className="hero_photo">
        <div className="hero_photo-bg">
          <div className="hero_photo-bg-img"></div>
        </div>
      </div>
    </motion.div>
  )
}
