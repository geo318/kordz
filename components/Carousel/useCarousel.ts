import { useEffect, useState } from 'react'
import { Props } from './types'
import { musicSchemaApi } from '@/schema'
import { MusicApi } from '@/types'
import { useFlashMessage } from '..'
import { useBlurBase64, useTouchScroll } from '@/hooks'

export const useCarousel = ({ musicList }: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [music, setMusic] = useState<MusicApi>([])
  const { FlashMessage, handleFlashMessage } = useFlashMessage()
  const [index, setIndex] = useState(0)

  const { base64Image } = useBlurBase64(music?.[index]?.thumbnail)

  useEffect(() => {
    setIsLoading(true)
    ;(async () => {
      try {
        const musicData = await musicList
        const parsedMusicData = musicSchemaApi.parse(musicData)
        setMusic(parsedMusicData.reverse())
      } catch (e) {
        handleFlashMessage(!!'error')
      } finally {
        setIsLoading(false)
      }
    })()

    return () => {
      setIsLoading(false)
    }
  }, [musicList, handleFlashMessage])

  const next = () => {
    if (index === music.length - 1) return setIndex(0)
    setIndex((prev) => prev + 1)
  }

  const prev = () => {
    if (index === 0) return setIndex(music.length - 1)
    setIndex((prev) => prev - 1)
  }

  const { isMobile, handleTouchEnd, handleTouchMove, handleTouchStart } =
    useTouchScroll({ turnLeft: prev, turnRight: next })

  return {
    isMobile,
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
    FlashMessage,
    isLoading,
    music: music[index],
    base64Image,
    next,
    prev,
  }
}
