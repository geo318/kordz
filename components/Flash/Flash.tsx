'use client'

import { CloseFlash, Portal } from '@/components'
import { useFlash } from './useFlash'
import { Props } from './types'

const Flash: React.FC<Props> = (props) => {
  const { toggleFlash } = useFlash(props)
  return (
    <>
      {props.isActive && (
        <Portal>
          <div className='bg-app-bg bg-opacity-70 fixed inset-0 z-10 block lg:hidden' />
          <div
            className={`lg:block max-w-xs w-full text-base z-50 fixed lg:top-5 top-32 right-5 rounded-four ${
              props.flashInfo.error
                ? 'border-red-500 bg-red-100 text-red-900'
                : 'border-green-500 bg-green-100 text-[#0F5132]'
            }`}
          >
            <div className='gap-2 p-2 flex'>
              <div className='ml-auto cursor-pointer' onClick={toggleFlash}>
                <CloseFlash />
              </div>
            </div>
            <p className='flex items-center gap-5 pl-8 pb-7 text-app-black-dark font-medium'>
              <span className='font-extrabold text-2xl'>
                {props.flashInfo.error ? '⚠ ' : '☑ '}
              </span>
              {props.flashInfo.message}
            </p>
          </div>
        </Portal>
      )}
    </>
  )
}

export default Flash
