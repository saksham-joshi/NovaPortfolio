import type { ReactNode } from 'react'
import { RouterProvider, useRouter } from './lib/router'
import { CURRENT_THEME } from './lib/theme'
import Home from './pages/Home'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Error404 from './pages/Error404'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import TopButton from './components/TopButton'

type ThemedPage = (props: { theme: typeof CURRENT_THEME }) => ReactNode

const ROUTES: Record<string, ThemedPage> = {
  '/': Home,
  '/home': Home,
  '/education': Education,
  '/experience': Experience,
  '/projects': Projects,
  '/contact': Contact,
  '/resume': Resume
}

function MainContent() {
  const { path } = useRouter()
  const Page = ROUTES[path]

  if (Page) {
    return <Page theme={CURRENT_THEME} />
  }

  return <Error404 theme={CURRENT_THEME} />
}

export function App() {
  return (
    <div className="bg-theme-body text-theme-text min-h-screen overflow-hidden transition-colors duration-300">
      <RouterProvider>
        <Header theme={CURRENT_THEME} />
        <MainContent />
        <Footer theme={CURRENT_THEME} />
        <TopButton theme={CURRENT_THEME} />
      </RouterProvider>
    </div>
  )
}

export default App
