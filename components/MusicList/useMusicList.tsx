import { musicSchemaApi } from '@/schema'
import { useEffect, useState } from 'react'
import { MusicApi } from '@/types'

export const useMusicList = (musicListPromise: Promise<MusicApi>) => {
  const [musicList, setMusicList] = useState<MusicApi>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    ;(async () => {
      try {
        const musicData = await musicListPromise
        const parsedMusicData = musicSchemaApi.parse(musicData)
        setMusicList(parsedMusicData)
      } catch (e) {
        console.log(e)
      }

      setIsLoading(false)
    })()
  }, [musicListPromise])

  return { musicList, isLoading }
}
