'use client'

import { twMerge } from 'tailwind-merge'
import { useHeader } from './useHeader'

export function Header({
  children,
  fixed = false,
}: {
  children: React.ReactNode
  fixed?: boolean
}) {
  const { isScrolled } = useHeader()
  return (
    <>
      <header
        className={twMerge(
          'top-0 inset-x-0 bg-opacity-90 w-full z-50 transition-all duration-500 ease-in-out',
          isScrolled ? 'header-small' : '',
          fixed ? 'fixed' : ''
        )}
      >
        {children}
      </header>
      {fixed && <div className='h-44' />}
    </>
  )
}
