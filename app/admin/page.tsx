'use client'
import { UploadForm } from '@/components'
import axios from 'axios'

export default function Admin() {
  return (
    <div>
      <h1 className='py-10 text-xl font-semibold'>Upload new track info</h1>

      <UploadForm
        handleSubmit={async (data) => {
          try {
            const x = await axios.post('/api/music', data, {
              headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
              },
            })
            console.log(data)
          } catch (e) {
            console.log(e)
          }
        }}
      />
    </div>
  )
}
