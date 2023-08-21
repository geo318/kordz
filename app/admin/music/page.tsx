import { MusicList, Nav } from '@/components'
import { useAdmin } from '@/hooks'
import Link from 'next/link'

export default function Admin() {
  const { musicList } = useAdmin()

  return (
    <div>
      <nav className='relative md:mb-0 mb-20'>
        <Link href='/admin' className='absolute left-0 mt-20 md:mt-0'>
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
