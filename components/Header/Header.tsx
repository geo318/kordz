'use client'

export function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className='sticky top-0 bg-app-blue bg-opacity-90 w-full z-50'>
      {children}
    </header>
  )
}
