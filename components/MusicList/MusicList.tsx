'use client'

import { Music } from '@/types'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export const MusicList: React.FC<{ musicListPromise: Promise<Music[]> }> = ({
  musicListPromise,
}) => {
  const [musicList, setMusicList] = useState<Music[]>([])
  useEffect(() => {
    ;(async () => {
      const musicData = await musicListPromise

      setMusicList(musicData)
    })()
  }, [])
  return (
    <div>
      <h1>Music List</h1>
      <div>
        {musicList.map((music, i) => (
          <div key={i}>
            {/* {music.title} */}
            {music.thumbnail}
            <Image src={`http://localhost:3000/${music.thumbnail}`} alt='' width={500} height={500} />
          </div>
        ))}
      </div>
    </div>
  )
}
