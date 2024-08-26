'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Star from '@/assets/icons/yellow-star.svg'
import Branch from '@/assets/icons/branch.svg'

function Footer() {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  })

  useEffect(() => {
    fetch('https://api.github.com/repos/koolkishan/chat-app-react-nodejs')
      .then((response) => response.json())
      .then((json) => {
        const { stargazers_count, forks_count } = json
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        })
      })
      .catch((e) => console.error(e))
  }, [])

  return (
    <footer>
      <Link
        href="https://github.com/koolkishan/chat-app-react-nodejs"
        target="_blank"
        className="footer-link"
      >
        <span className="footer-info">Designed and Built by Kishan Sheth.</span>
        {githubInfo && (
          <div className="footer-git">
            <div className="footer-git-item">
              <Star className="footer-git-item-icon" />
              <span className="footer-git-item-text">{githubInfo.stars}</span>
            </div>
            <div className="footer-git-item">
              <Branch className="footer-git-item-icon" />
              <span className="footer-git-item-text">{githubInfo.forks}</span>
            </div>
          </div>
        )}
      </Link>
    </footer>
  )
}

export default Footer
