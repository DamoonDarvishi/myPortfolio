'use client'

import { useEffect, useState } from 'react'

export default function TypewriterEffect() {
  const [text, setText] = useState('Frontend Developer')
  const phrases = ['Frontend Developer', 'Node.js learner', 'UI/UX enthusiast']
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(
      () => {
        const currentPhrase = phrases[phraseIndex]

        if (isDeleting) {
          setText(currentPhrase.substring(0, text.length - 1))
          if (text.length === 0) {
            setIsDeleting(false)
            setPhraseIndex((prev) => (prev + 1) % phrases.length)
          }
        } else {
          setText(currentPhrase.substring(0, text.length + 1))
          if (text.length === currentPhrase.length) {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timer)
  }, [text, phraseIndex, isDeleting])

  return <span className="text-teal-500">{text}</span>
}
