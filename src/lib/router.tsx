import React, { useState, useEffect, createContext, useContext } from 'react'

type NavigationContextProps = {
  path: string
  navigate: (to: string) => void
}

const NavigationContext = createContext<NavigationContextProps>({
  path: typeof window !== 'undefined' ? window.location.pathname : '/',
  navigate: () => {}
})

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [path, setPath] = useState(typeof window !== 'undefined' ? window.location.pathname : '/')

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handlePopState = () => {
      setPath(window.location.pathname)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = (to: string) => {
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', to)
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
  // Check if current path matches to, or if path is '/' and to is '/home' or vice-versa
  const isHomeMatch = (path === '/' || path === '/home') && (to === '/' || to === '/home')
  const isActive = path === to || isHomeMatch
  const combinedClassName =
    `${className ?? ''} ${isActive ? (activeClassName ?? 'font-bold') : ''}`.trim()

  return (
    <a
      href={to}
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
