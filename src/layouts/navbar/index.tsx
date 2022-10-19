import Image from 'next/image'
import logo from '../../assets/logo.png'
import Menu from './components/menu'

function Navbar() {
  return (
    <nav className={'nav'}>
      <Image src={logo} width="24px" height="24px" alt="logo" />
      <Menu />
    </nav>
  )
}

export default Navbar