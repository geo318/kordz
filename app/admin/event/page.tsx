import { EventList, Nav } from '@/components'
import { useAdmin } from '@/hooks'
import Link from 'next/link'

export default function Admin() {
  const { eventList } = useAdmin()

  return (
    <div>
      <nav className='relative'>
        <Link href='/admin' className='absolute left-0'>
          &lt; Back
        </Link>
        <h1 className='pb-10 text-xl font-semibold text-center'>
          View or Edit Events
        </h1>
        <div className='absolute right-0 top-0'>
          <Nav />
        </div>
      </nav>

      <EventList eventListPromise={eventList()} />
    </div>
  )
}
