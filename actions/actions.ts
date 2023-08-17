'use server'

import { revalidateTag } from 'next/cache'

export const revalidateMusicData = () => {
  revalidateTag('music-list')
}
export const revalidateEventData = () => {
  revalidateTag('event-list')
}
