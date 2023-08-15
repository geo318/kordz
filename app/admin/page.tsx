import { MusicList, Spinner, UploadMusic } from '@/components'
import { useAdmin } from '@/hooks/useAdmin'

export default function Admin() {
  const { musicList } = useAdmin()

  return (
    <div>
      <h1 className='py-10 text-xl font-semibold'>Upload new track info</h1>
      <MusicList musicListPromise={musicList} />
      <UploadMusic />
    </div>
  )
}
