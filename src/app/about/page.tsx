import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/assets/avatar.png'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description: 'Frontend Developer, UI / UX enthusiast, JavaScript Engineer.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            About Me
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Greating! I am Damoon Darvishi! <br /> I’ve always loved creating
              things—whether it was shaping sandcastles on the shores of my
              small beach town or mastering the disciplined strikes of
              taekwondo, where I earned my black belt. But my real fascination
              was with how things worked. As a kid, I spent hours taking apart
              gadgets (much to my parents’ dismay) just to see the mechanics
              inside.
            </p>
            <p>
              That curiosity led me to study mechanical engineering, where I
              discovered my passion for precision design. I dove deep into
              SolidWorks, crafting intricate 3D models of machinery and
              assemblies—each bolt, gear, and motion plotted meticulously on the
              screen. There was something thrilling about turning abstract ideas
              into tangible blueprints.
            </p>
            <p>
              But then, I stumbled into something unexpected: coding. What
              started as a curiosity—tinkering with HTML, CSS, and
              JavaScript—quickly became an obsession. The logic of programming
              felt like solving an endless puzzle, and the ability to build
              interactive experiences hooked me. I realized I didn’t just want
              to design objects; I wanted to create digital worlds.
            </p>
            <p>
              So I took a leap, shifting from mechanical engineering to web
              development. Landing my first internship as a frontend developer
              was a turning point—suddenly, I was merging my love for structure
              and creativity in a whole new way. Now, I’m sharpening my skills
              every day, with my sights set on contributing to innovative
              projects and, one day, bringing my talents to an international
              stage.
            </p>
            <p>The journey’s just beginning.</p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://github.com/DamoonDarvishi"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/damoondarvishi/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:damoon.darvishi@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              damoon.darvishi@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
