'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import photo from '../../../assets/new-photo.png'
import { useInView, motion } from 'framer-motion'
import './_about.scss'

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref)
  useEffect(() => {
    console.log('Element is in view: ', isInView)
  }, [isInView])
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Hello and welcome to my Portfolio! My name is Damoon, and I am a
            frontend developer passionate about building innovative solutions to
            complex problems. I&apos;m living now in Munich, Germany.
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I&apos;ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">Javascript</li>
            <li className="about-grid-info-list-item">ReactJs</li>
            <li className="about-grid-info-list-item">NextJs</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Redux Toolkit</li>
            <li className="about-grid-info-list-item">Zustand</li>
            <li className="about-grid-info-list-item">Rest API</li>
            <li className="about-grid-info-list-item">Git & Github</li>
            <li className="about-grid-info-list-item">CSS</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src={photo} fill alt="profile" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
