'use client'

import { FormWrapper, Input } from '@/components'
import { eventSchema as schema } from '@/schema'
import { Props } from './types'
import { Music } from '@/types'

export function UploadForm({
  handleSubmit,
  defaultValues,
  revalidate,
}: Props<Music> & { edit?: boolean }): JSX.Element {
  return (
    <FormWrapper
      schema={schema}
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      className='bg-white'
      revalidate={revalidate}
    >
      <Input name='location' placeholder='Event place' />
      <Input name='description' placeholder='Event details' />
      <Input
        name='url'
        placeholder='https://example.com/some-url'
        label='Link'
      />
      <Input name='date' label='Date' type='date' />
    </FormWrapper>
  )
}
