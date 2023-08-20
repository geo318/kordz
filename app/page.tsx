import {
  Button,
  CarouselSkeleton,
  EventsSkeleton,
  Social,
  Header,
} from '@/components'
import { logo } from '@/public'
import { useAdmin } from '@/hooks'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const Carousel = dynamic(() => import('@/components/Carousel/Carousel'), {
  ssr: false,
  loading: () => <CarouselSkeleton />,
})

const Events = dynamic(() => import('@/components/Events/Events'), {
  ssr: false,
  loading: () => <EventsSkeleton />,
})

export default function Home() {
  const { musicList, eventList } = useAdmin()

  return (
    <main className='flex min-h-screen flex-col items-center px-24 bg-app-blue'>
      <Header>
        <div className='flex items-center flex-col w-full p-8'>
          <Link href='/admin'>
            <Image src={logo} alt='logo Kordz' width={170} priority />
          </Link>

          <Social />
        </div>
      </Header>
      <section className='mt-4 mb-14 w-full h-[32rem] relative'>
        <Carousel musicList={musicList()} />
      </section>

      <section>
        <Events eventsPromise={eventList()} />
      </section>
      <address className='leading-6 text-sm not-italic text-black text-center my-36'>
        <h4 className='font-bold'>Management:</h4>
        <div className='font-medium'>
          <a>koka@stocktonrecords.com</a>
        </div>
        <Link href='mailto:koka@stocktonrecords.com'>
          <Button className='mt-4 w-48 bg-black text-white hover:bg-white hover:text-black transition-all'>
            Contact
          </Button>
        </Link>
      </address>
      <footer>
        <p className='p-6 text-black font-semibold text-sm'>
          Copyright © 2023 all rights reserved
        </p>
      </footer>
    </main>
  )
}
