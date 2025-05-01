'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import clsx from 'clsx'
import Image, { type ImageProps } from 'next/image'

import reactCertificate from '@/assets/photos/React-certificate.png'
import reactTypescriptCertificate from '@/assets/photos/React-Typescript.png'
import selected from '@/assets/photos/selected.png'
import selectedResort from '@/assets/photos/selectedresort.png'
import typescriptCertificate from '@/assets/photos/Typescript-certificate.png'
import typeError from '@/assets/photos/Typescript-Errors.png'

function Photos() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Transform scrollY progress to X position
  const xPos = useTransform(scrollYProgress, [0, 1], ['22%', '-50%'])

  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  const images = [
    reactTypescriptCertificate,
    reactCertificate,
    typescriptCertificate,
    selected,
    typeError,
    selectedResort,
  ]

  return (
    <div className="mt-16 h-96 overflow-hidden sm:mt-20" ref={containerRef}>
      <motion.div className="flex gap-5 p-4 sm:gap-8" style={{ x: xPos }}>
        {images.map((image, imageIndex) => (
          <motion.div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={image.src}
              alt=""
              width={400}
              height={450}
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Photos
