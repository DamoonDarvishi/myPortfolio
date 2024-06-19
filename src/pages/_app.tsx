import '../styles/globals.scss'
import '../styles/Home.scss'
import '../layouts/navbar/components/menu.scss'
import '../layouts/navbar/navbar.scss'
import { Fira_Code } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const fira = Fira_Code({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-fira_code',
})
function MyApp({ Component, pageProps }) {
  return (
    <main className={fira.variable}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
