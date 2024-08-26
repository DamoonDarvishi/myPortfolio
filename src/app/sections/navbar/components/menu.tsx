import Link from 'next/link'
import './_menu.scss'

const Menu = () => {
  return (
    <ol className="menu">
      <li>
        <Link className="link active" href="#about">
          About
        </Link>
      </li>
      <li>
        <Link className="link active" href="#jobs">
          Exprience
        </Link>
      </li>
      <li>
        <Link className="link active" href="#projects">
          Work
        </Link>
      </li>
      <li>
        <Link className="link active" href="#contact">
          Contact
        </Link>
      </li>
      <li>
        <Link
          className="link-btn"
          href="/DamoonDarvishi-Resume-2024.pdf"
          download
        >
          Download Resume!
        </Link>
      </li>
    </ol>
  )
}

export default Menu
