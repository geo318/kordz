'use client'

import { MusicApi } from '@/types'
import Image from 'next/image'
import { useMusicList } from './useMusicList'
import { Spinner } from '..'

export const MusicList: React.FC<{ musicListPromise: Promise<MusicApi> }> = ({
  musicListPromise,
}) => {
  const { musicList, isLoading } = useMusicList(musicListPromise)

  return (
    <div>
      <h1>Music List</h1>
      <div>
        {isLoading ? (
          <Spinner />
        ) : (
          musicList.map((music, i) => (
            <div key={i}>
              {music.title}
              {music.thumbnail}
              <Image src={music.thumbnail} alt='' width={500} height={500} />
            </div>
          ))
        )}
      </div>
    </div>
  )
}
