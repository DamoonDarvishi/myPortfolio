import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, tools I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, tools I love, and other things I recommend."
      intro="Here’s a big list of tools and apps I use on a daily to design, develop, focus, and stay productive."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="14” Apple M1 Pro, 16GB RAM (2021)">
            I was using an Intel-based 16” MacBook Pro prior to this and the
            difference is night and day. I’ve never heard the fans turn on a
            single time, even under the incredibly heavy loads I put it through
            with our various launch simulations.
          </Tool>
          <Tool title="Apple Pro Display XDR (Standard Glass)">
            The only display on the market if you want something HiDPI and
            bigger than 27”. When you’re working at planetary scale, every pixel
            you can get counts.
          </Tool>
          <Tool title="IBM Model M SSK Industrial Keyboard">
            They don’t make keyboards the way they used to. I buy these any time
            I see them go up for sale and keep them in storage in case I need
            parts or need to retire my main.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="VS Code">
            The best code editor with tons of extensions, great performance, and
            built-in Git integration.
          </Tool>
          <Tool title="iTerm2">
            I’m honestly not even sure what features I get with this that aren’t
            just part of the macOS Terminal but it’s what I use.
          </Tool>
          <Tool title="Excalidraw">
            A great tool for creating diagrams and quick sketches to visualize
            ideas.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design & Creativity">
          <Tool title="Figma">
            My go-to tool for UI/UX design and prototyping. It’s great for
            collaboration and has powerful features.
          </Tool>
          <Tool title="Canva">
            Simple and effective for quick designs, social media posts, and
            presentations.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity & Learning">
          <Tool title="Pomodoro Technique">
            I use Pomodoro timers to stay focused and manage work sessions
            effectively.
          </Tool>
          <Tool title="Anki">
            An amazing flashcard app that helps with memorizing concepts, coding
            shortcuts, and languages.
          </Tool>
          <Tool title="Notion">
            My all-in-one tool for notes, project management, and organizing
            ideas.
          </Tool>
          <Tool title="Obsidian">
            A great markdown-based note-taking tool that helps with knowledge
            management.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
