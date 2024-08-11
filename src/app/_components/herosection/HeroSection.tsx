import React from 'react'
import Link from 'next/link'
import './_hero.scss'

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero_info">
        <h1>Hi, my name is</h1>
        <h2>Damoon Darvishi</h2>
        <h3>I build things for the web.</h3>
        <p>
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at Selected Group.
        </p>
        <Link className="link-btn" href="#">
          Check out my resume!
        </Link>
      </div>
      <div className="hero_photo">
        <div className="hero_photo-bg">
          <div className="hero_photo-bg-img"></div>
        </div>
      </div>
    </section>
  )
}
