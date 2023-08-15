'use client'
import { MusicList, UploadForm } from '@/components'
import { useAdmin } from '@/hooks/useAdmin'

export default function Admin() {
  const { isLoading, handleSubmit } = useAdmin()
  // const musicList = fetch('/api/music', { cache: 'no-cache' }).then((res) =>
  //   res.json()
  // )
  return (
    <div>
      <h1 className='py-10 text-xl font-semibold'>Upload new track info</h1>
      {/* <MusicList musicListPromise={musicList} /> */}

      {!isLoading ? (
        <UploadForm handleSubmit={handleSubmit} />
      ) : (
        <div>loading...</div>
      )}
    </div>
  )
}
