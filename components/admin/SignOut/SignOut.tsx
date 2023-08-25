'use client'

import { signOut } from 'next-auth/react'

export const SignOut = () => {
  return (
    <div
      className='absolute right-24 text-blue-100 hover:underline font-semibold'
      onClick={() => signOut({ callbackUrl: '/' })}
    >
      Sign Out
    </div>
  )
}
