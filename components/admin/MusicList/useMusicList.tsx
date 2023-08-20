import { musicSchemaApi } from '@/schema'
import { useEffect, useState } from 'react'
import { MusicApi } from '@/types'
import { useFlashMessage } from '@/components'

export const useMusicList = (musicListPromise: Promise<MusicApi>) => {
  const [musicList, setMusicList] = useState<MusicApi>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('') //delete this
  const [activeMusic, setActiveMusic] = useState<MusicApi[number]>(
    {} as MusicApi[number]
  )
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { FlashMessage, handleFlashMessage } = useFlashMessage()

  useEffect(() => {
    setIsLoading(true)
    ;(async () => {
      try {
        const musicData = await musicListPromise
        const parsedMusicData = musicSchemaApi.parse(musicData)
        setMusicList(parsedMusicData)
      } catch (e) {
        setError(JSON.stringify(e)) //delete this
        handleFlashMessage(!!'error')
      }

      setIsLoading(false)
    })()
  }, [musicListPromise, handleFlashMessage])

  return {
    error, //delete this
    musicList,
    isLoading,
    activeMusic,
    setActiveMusic,
    isModalOpen,
    setIsModalOpen,
    FlashMessage,
  }
}
