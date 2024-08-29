'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import FolderIcon from '@/assets/icons/folder-icon.svg'
import GithubIcon from '@/assets/icons/github.svg'
import Button from '@/components/button/Button'
import './_other-projects.scss'

const OtherProjects = () => {
  return (
    <motion.div
      className="other-projects"
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2>Other Noteworthy Projects</h2>
      <Link className="archive-project" href="#">
        view the archive
      </Link>
      <ul className="ul-project">
        <li>
          <div className="list-header">
            <div className="folder">
              <FolderIcon width={24} height={24} />
            </div>
            <div className="project-links">
              <Link href="#">
                <GithubIcon width={24} height={24} />
              </Link>
            </div>
          </div>
          <div className="list-body">
            <h3 className="project-title">
              Integrating Algolia Search with WordPress Multisite
            </h3>
            <p className="project-description">
              Building a custom multisite compatible WordPress plugin to build
              global search with Algolia
            </p>
          </div>

          <ul className="ul-footer">
            <li>React</li>
            <li>Javascript</li>
            <li>Node</li>
            <li>React</li>
            <li>Javascript</li>
            <li>Node</li>
            <li>React</li>
            <li>Javascript</li>
            <li>Node</li>
          </ul>
        </li>
        <li>
          <div className="list-header">
            <div className="folder">
              <FolderIcon width={24} height={24} />
            </div>
            <div className="project-links">
              <Link href="#">
                <GithubIcon width={24} height={24} />
              </Link>
            </div>
          </div>
          <div className="list-body">
            <h3 className="project-title">
              Integrating Algolia Search with WordPress Multisite
            </h3>
            <p className="project-description">
              Building a custom multisite compatible WordPress plugin to build
              global search with Algolia
            </p>
          </div>

          <ul className="ul-footer">
            <li>React</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Javascript</li>
            <li>Javascript</li>
          </ul>
        </li>
        <li>
          <div className="list-header">
            <div className="folder">
              <FolderIcon width={24} height={24} />
            </div>
            <div className="project-links">
              <Link href="#">
                <GithubIcon width={24} height={24} />
              </Link>
            </div>
          </div>
          <div className="list-body">
            <h3 className="project-title">
              Integrating Algolia Search with WordPress Multisite
            </h3>
            <p className="project-description">
              Building a custom multisite compatible WordPress plugin to build
              global search with Algolia
            </p>
          </div>

          <ul className="ul-footer">
            <li>React</li>
            <li>Node</li>
            <li>React</li>
            <li>Node</li>
            <li>React</li>
            <li>Node</li>
          </ul>
        </li>
        <li>
          <div className="list-header">
            <div className="folder">
              <FolderIcon width={24} height={24} />
            </div>
            <div className="project-links">
              <Link href="#">
                <GithubIcon width={24} height={24} />
              </Link>
            </div>
          </div>
          <div className="list-body">
            <h3 className="project-title">
              Integrating Algolia Search with WordPress Multisite
            </h3>
            <p className="project-description">
              Building a custom multisite compatible WordPress plugin to build
              global search with Algolia
            </p>
          </div>

          <ul className="ul-footer">
            <li>React</li>
            <li>Javascript dev</li>
            <li>Node js</li>
            <li>React</li>
            <li>Javascript</li>
          </ul>
        </li>
      </ul>
      <Button text="Show More" link="#" />
    </motion.div>
  )
}

export default OtherProjects
