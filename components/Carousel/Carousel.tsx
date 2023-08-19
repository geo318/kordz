'use client'

import { useCarousel } from './useCarousel'
import { Props } from './types'
import Image from 'next/image'
import { CarouselSkeleton } from '.'
import Link from 'next/link'
import { Arrow, Button } from '..'

export function Carousel(props: Props) {
  const { music, next, prev, isLoading, FlashMessage } = useCarousel(props)
  return (
    <div className='group w-full'>
      <div className='mx-auto max-w-[31.25rem] relative'>
        <FlashMessage />
        {music && (
          <div className='group/image relative'>
            {isLoading ? (
              <CarouselSkeleton />
            ) : (
              <Image
                src={music.thumbnail}
                alt={music.title}
                width={500}
                height={500}
              />
            )}
            <div className='flex opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 justify-center items-center absolute inset-0 bg-black bg-opacity-50'>
              <Link href={music.url} target='_blank'>
                <Button className='w-32 hover:opacity-90 transition-all duration-200 cursor-pointer'>
                  Listen
                </Button>
              </Link>
            </div>
          </div>
        )}
        <Arrow
          onClick={prev}
          className='hidden group-hover:block group-hover/image:block cursor-pointer absolute top-1/2 -translate-y-1/2 -ml-16'
        />
        <Arrow
          onClick={next}
          className='hidden group-hover:block group-hover/image:block cursor-pointer absolute top-1/2 right-0 -translate-y-1/2 -mr-16 rotate-180'
        />
      </div>
    </div>
  )
}

export default Carousel
