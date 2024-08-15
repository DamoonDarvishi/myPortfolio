import Image from 'next/image'
import Logo from '@/assets/icons/DD-logo.svg'
import Menu from './components/menu'
import './_navbar.scss'

export function Navbar() {
  return (
    <nav className="nav">
      <Logo width={48} height={48} className="logo" />
      <Menu />
    </nav>
  )
}
