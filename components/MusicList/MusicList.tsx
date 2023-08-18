'use client'

import { MusicApi } from '@/types'
import Image from 'next/image'
import { useMusicList } from './useMusicList'
import { Spinner } from '..'
import { MusicModal } from '@/components'

export const MusicList: React.FC<{ musicListPromise: Promise<MusicApi> }> = ({
  musicListPromise,
}) => {
  const {
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
              className='max-w-sm rounded overflow-hidden shadow-sm border border-zinc-200 col-span-3'
              onClick={() => {
                setActiveMusic(music)
                setIsModalOpen((prev) => !prev)
              }}
            >
              <div className='w-full aspect-square overflow-hidden object-contain flex items-center justify-center'>
                <Image src={music.thumbnail} alt='' width={300} height={300} />
              </div>

              <div className='px-6 py-4'>
                <h4 className='font-bold text-xl mb-2'>{music.title}</h4>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  )
}
