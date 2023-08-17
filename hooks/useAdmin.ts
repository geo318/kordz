import { EventApi, MusicApi } from '@/types'

export const useAdmin = () => {
  const musicList = (): Promise<MusicApi> =>
    fetch(`${process.env.NEXT_PUBLIC_URL}/api/music`, {
      next: { tags: ['music-list'] },
    }).then((res) => res.json())

  const eventList = (): Promise<EventApi> =>
    fetch(`${process.env.NEXT_PUBLIC_URL}/api/event`, {
      next: { tags: ['event-list'] },
    }).then((res) => res.json())

  let x = eventList()

  return { musicList, eventList }
}
