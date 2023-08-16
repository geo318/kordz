import { Nav, UploadMusic, UploadEvent, SwitchForms } from '@/components'

export default function Admin() {
  return (
    <div>
      <div className='relative'>
        <h1 className='pb-10 text-xl font-semibold text-center'>
          Upload new track info
        </h1>
        <div className='absolute right-0 top-0'>
          <Nav />
        </div>
      </div>
      <div className='flex'>
        <SwitchForms />
      </div>
    </div>
  )
}
