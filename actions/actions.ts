'use server'

import { revalidateTag } from 'next/cache'

export const revalidateMusicData = () => {
  revalidateTag('music-list')
}
export const revalidatePostData = () => {
  revalidateTag('post-list')
}
