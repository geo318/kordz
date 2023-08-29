import {
  Button,
  CarouselSkeleton,
  EventsSkeleton,
  Social,
  Header,
} from '@/components'
import { background, logo, base64bg } from '@/public'
import { useAdmin } from '@/hooks'
import Image from 'next/image'
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
    <>
      <Image
        src={background}
        alt='background theme'
        className='fixed inset-0 object-cover -z-10 min-w-full min-h-full transition-all duration-300 ease-in-out'
        blurDataURL={base64bg}
        placeholder='blur'
      />
      <main className='flex min-h-screen flex-col items-center md:px-24 px-5'>
        <Header>
          <div className='flex items-center flex-col w-full p-8'>
            <Image src={logo} alt='logo Kordz' width={170} priority />
            <Social />
          </div>
        </Header>

        <div className='flex flex-col-reverse md:flex-col md:gap-0 gap-10 w-full'>
          <section className='mt-10 md:mb-14 w-full md:h-[32rem] aspect-square relative'>
            <Carousel musicList={musicList()} />
          </section>

          <section className='mt-10'>
            <Events eventsPromise={eventList()} />
          </section>
        </div>

        <address className='leading-6 text-sm not-italic text-black text-center md:my-36 mb-20 mt-36'>
          <div className='flex flex-col gap-10'>
            <div>
              <h4 className='font-bold'>General Management:</h4>
              <div className='font-medium'>
                <a>Koka Gogokhia - koka@stocktonrecords.com</a>
              </div>
              <a href='mailto:koka@stocktonrecords.com'>
                <Button className='mt-4 w-48 bg-black text-white hover:bg-white hover:text-black transition-all'>
                  Contact
                </Button>
              </a>
            </div>
            <div>
              <h4 className='font-bold'>Classical Music Projects:</h4>
              <div className='font-medium'>
                <a>Anna Haefliger - anna@haefligerproduction.com</a>
              </div>
              <a href='mailto:anna@haefligerproduction.com'>
                <Button className='mt-4 w-48 bg-black text-white hover:bg-white hover:text-black transition-all'>
                  Contact
                </Button>
              </a>
            </div>
          </div>
        </address>
        <footer>
          <p className='p-6 text-black font-semibold text-sm'>
            Copyright © 2023 all rights reserved
          </p>
        </footer>
      </main>
      <Social mobile />
    </>
  )
}
