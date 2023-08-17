import { MusicList, Nav } from '@/components'
import { useAdmin } from '@/hooks/useAdmin'
import Link from 'next/link'

export default function Admin() {
  const { musicList } = useAdmin()

  return (
    <div>
      <nav className='relative'>
        <Link href='/admin' className='absolute left-0'>
          &lt; Back
        </Link>
        <h1 className='pb-10 text-xl font-semibold text-center'>
          View or Edit Banners
        </h1>
        <div className='absolute right-0 top-0'>
          <Nav />
        </div>
      </nav>

      <MusicList musicListPromise={musicList()} />
    </div>
  )
}
