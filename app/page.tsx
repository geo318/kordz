import { Button, CarouselSkeleton, Social } from '@/components'
import { logo } from '@/public'
import { useAdmin } from '@/hooks/useAdmin'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const Carousel = dynamic(() => import('@/components/Carousel/Carousel'), {
  ssr: false,
  loading: () => <CarouselSkeleton />,
})

export default function Home() {
  const { musicList, eventList } = useAdmin()

  return (
    <main className='flex min-h-screen flex-col items-center px-24 bg-app-blue'>
      <header className='sticky top-0 bg-app-blue bg-opacity-90 w-full z-50'>
        <div className='flex items-center flex-col w-full p-8'>
          <Link href='/admin'>
            <Image src={logo} alt='logo Kordz' width={170} />
          </Link>

          <Social />
        </div>
      </header>
      <section className='mt-4 mb-14 w-full'>
        <Carousel musicList={musicList()} />
      </section>

      <section>
        <ul className='flex flex-col gap-24'>
          <li className='text-center flex flex-col gap-4 items-center'>
            <h2 className='text-[2rem] font-bold uppercase'>August 19, 2023</h2>
            <div className='w-full max-w-sm text-2xl leading-normal tracking-widest '>
              <p>Beethovenfest Bonn</p>
              <p>Trio with Kai Strobel & Valentine Michaud</p>
            </div>

            <Button className='w-32'>tickets</Button>
          </li>

          <li className='text-center flex flex-col gap-4 items-center'>
            <h2 className='text-[2rem] font-bold uppercase'>August 19, 2023</h2>
            <div className='w-full max-w-sm text-2xl leading-normal tracking-wide '>
              <p>Beethovenfest Bonn</p>
              <p>Trio with Kai Strobel & Valentine Michaud</p>
            </div>

            <Button className='w-32'>tickets</Button>
          </li>
        </ul>
      </section>
      <address className='leading-6 text-sm not-italic text-black text-center my-36'>
        <h4 className='font-bold'>Management:</h4>
        <div className='font-medium'>
          <a>koka@stocktonrecords.com</a>
        </div>
        <Link href='mailto:koka@stocktonrecords.com'>
          <Button className='mt-4 w-48 bg-black text-white'>Contact</Button>
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
