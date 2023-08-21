import Image from 'next/image'
import Link from 'next/link'
import { logo } from '@/public'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='text-black bg-white md:px-20 px-5 py-5 mx-auto'>
      <Link href='/' className='flex justify-center py-5'>
        <Image src={logo} alt='logo' width={80} />
      </Link>
      {children}
    </main>
  )
}
