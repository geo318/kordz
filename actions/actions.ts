'use server'

import { revalidatePath, revalidateTag } from 'next/cache'

export const revalidateMusicData = () => {
  revalidateTag('music-list')
}
export const revalidateEventData = () => {
  revalidateTag('event-list')
  revalidatePath('/admin')
  revalidatePath('/admin/event')
  revalidatePath('/')
}
