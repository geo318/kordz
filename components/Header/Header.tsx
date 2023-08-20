'use client'

import { twMerge } from 'tailwind-merge'
import { useHeader } from './useHeader'

export function Header({ children }: { children: React.ReactNode }) {
  const { isScrolled } = useHeader()
  return (
    <>
      <header
        className={twMerge(
          'fixed top-0 inset-x-0 bg-app-blue bg-opacity-90 w-full z-50',
          isScrolled ? 'header-small' : ''
        )}
      >
        {children}
      </header>
      <div className='h-44' />
    </>
  )
}
