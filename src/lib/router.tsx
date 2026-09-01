import React, { useState, useEffect, createContext, useContext } from 'react'

// Match Vite's base path
export const BASE_PATH = '/NovaPortfolio'

// Helper to sanitize paths by stripping the base path prefix
function getNormalizedPath(): string {
  if (typeof window === 'undefined') return '/'
  const pathname = window.location.pathname

  if (pathname.startsWith(BASE_PATH)) {
    const normalized = pathname.slice(BASE_PATH.length)
    return normalized === '' ? '/' : normalized
  }
  return pathname
}

type NavigationContextProps = {
  path: string
  navigate: (to: string) => void
}

const NavigationContext = createContext<NavigationContextProps>({
  path: typeof window !== 'undefined' ? getNormalizedPath() : '/',
  navigate: () => {}
})

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [path, setPath] = useState(typeof window !== 'undefined' ? getNormalizedPath() : '/')

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handlePopState = () => {
      setPath(getNormalizedPath())
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = (to: string) => {
    if (typeof window !== 'undefined') {
      // Ensure target path includes the base path prefix
      const targetUrl = to.startsWith(BASE_PATH)
        ? to
        : `${BASE_PATH}${to.startsWith('/') ? '' : '/'}${to}`

      window.history.pushState(null, '', targetUrl)
      setPath(to)
      window.scrollTo(0, 0)
    }
  }

  return (
    <NavigationContext.Provider value={{ path, navigate }}>{children}</NavigationContext.Provider>
  )
}

export function useRouter() {
  return useContext(NavigationContext)
}

type LinkProps = {
  to: string
  children: React.ReactNode
  className?: string
  activeClassName?: string
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export function Link({ to, children, className, activeClassName, ...props }: LinkProps) {
  const { path, navigate } = useRouter()

  // Handle matching for active state
  const isHomeMatch = (path === '/' || path === '/home') && (to === '/' || to === '/home')
  const isActive = path === to || isHomeMatch
  const combinedClassName =
    `${className ?? ''} ${isActive ? (activeClassName ?? 'font-bold') : ''}`.trim()

  // Prepend base path for standard href fallback (e.g. right-click -> open in new tab)
  const href = to.startsWith(BASE_PATH) ? to : `${BASE_PATH}${to.startsWith('/') ? '' : '/'}${to}`

  return (
    <a
      href={href}
      className={combinedClassName}
      onClick={(e) => {
        // Only override standard left-clicks with no modifiers
        if (e.button === 0 && !e.metaKey && !e.altKey && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault()
          navigate(to)
        }
      }}
      {...props}
    >
      {children}
    </a>
  )
}
