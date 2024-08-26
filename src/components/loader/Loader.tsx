import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './_loader.scss'

function Loader({ isLoading, setIsLoading }: any) {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading()
    }, 1900)
  }, [setIsLoading])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader"
          exit={{ scale: 0 }}
          key="motiondivleave"
          transition={{
            duration: 0.45,
            ease: 'easeInOut',
          }}
        >
          <motion.svg
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 864 864"
          >
            <title>Logo</title>
            <g>
              <motion.path
                className="ls0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                exit={{
                  scale: 2,
                }}
                fill="#01ea67"
                d="M314.5,148.3L148.3,314.5v235l166.2,166.2c45.8-26.5,23.2-13.4,104.1-60.1c0-9.4,0-437.8,0-447.2	C337.4,161.5,359.1,174,314.5,148.3z M350.6,616.3l-24.9,14.4L216.3,521.3V342.7l109.3-109.3l24.9,14.4V616.3z"
              />
              <motion.path
                className="ls0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: 'easeInOut',
                  delay: 1.5,
                }}
                exit={{
                  scale: 2,
                }}
                fill="#01ea67"
                d="M445.4,208.4c0,3.7,0,441.8,0,447.2c81.2,46.9,59.5,34.4,104.1,60.1l166.2-166.2v-235L549.5,148.3	C503.7,174.8,526.3,161.7,445.4,208.4z M647.7,521.3L538.3,630.7l-24.9-14.4V247.7l24.9-14.4l109.3,109.3V521.3z"
              />
            </g>
            <g>
              <motion.path
                className="fs0"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1,
                  ease: 'easeInOut',
                }}
                exit={{
                  scale: 2,
                }}
                fill="#01ea67"
                d="M565.5,109.8h-267L109.8,298.5v266.9l188.7,188.7h266.9l188.7-188.7V298.5L565.5,109.8z M560.7,742.7H303.3l-182-182V303.3	l182-182h257.4l182,182v257.4l0,0L560.7,742.7z"
              />
            </g>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader
