import React from 'react'
import Link from 'next/link'
import HandIcon from '@/assets/icons/hand-hi.svg'
import './_hero.scss'

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero_info">
        <div>
          <span className="say-hello">Hello</span>
          <HandIcon width={32} height={32} />
        </div>
        <h2>I&apos;m Damoon</h2>
        <h3>Front-end Developer</h3>
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
