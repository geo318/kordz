'use client'

import { MusicApi } from '@/types'
import Image from 'next/image'
import { useMusicList } from './useMusicList'
import { Button, Spinner } from '@/components'
import { MusicModal } from '@/components'
import Link from 'next/link'

export const MusicList: React.FC<{ musicListPromise: Promise<MusicApi> }> = ({
  musicListPromise,
}) => {
  const {
    error,  //delete this
    musicList,
    isLoading,
    activeMusic,
    setActiveMusic,
    isModalOpen,
    setIsModalOpen,
    FlashMessage,
  } = useMusicList(musicListPromise)

  return (
    <main>
      <div>{error}</div>
      <FlashMessage />
      <MusicModal
        defaults={activeMusic}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <div className='grid grid-cols-12 gap-5'>
        {isLoading ? (
          <Spinner />
        ) : (
          musicList.map((music) => (
            <div
              key={music.id}
              className='max-w-sm rounded-md overflow-hidden shadow-sm border border-zinc-200 col-span-3 cursor-pointer hover:shadow-md'
            >
              <div
                onClick={() => {
                  setActiveMusic(music)
                  setIsModalOpen((prev) => !prev)
                }}
                className='group relative w-full aspect-square overflow-hidden object-contain flex items-center justify-center'
                title='Click to edit'
              >
                <div className='group-hover:flex items-center justify-center hidden absolute inset-0 bg-blue-800 bg-opacity-10'>
                  <Button className='hover:bg-gray-100'>Edit</Button>
                </div>
                <Image src={music.thumbnail} alt='' width={300} height={300} />
              </div>

              <div className='px-6 py-4'>
                <h4 className='font-semi text-lg mb-2'>
                  👉 {music.title || 'music title'}
                </h4>
                <Link
                  target='_blank'
                  href={music.url}
                  className='text-blue-500 hover:underline'
                >
                  🎧 listen
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  )
}
