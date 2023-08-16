'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Nav = () => {
  const pathName = usePathname()

  return (
    <nav className='flex py-2'>
      <Link
        href='/admin/music'
        className={`${
          pathName === '/admin/music' ? 'font-semibold' : ''
        } px-3 hover:underline`}
      >
        Music List
      </Link>
      <Link
        href='/admin/event'
        className={`${
          pathName === '/admin/event' ? 'font-semibold' : ''
        } px-3 hover:underline`}
      >
        Event List
      </Link>
    </nav>
  )
}
