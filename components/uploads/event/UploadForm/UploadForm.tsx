'use client'

import { FormWrapper, Input } from '@/components'
import { eventSchema as schema } from '@/schema'
import { Props } from './types'
import { Event } from '@/types'

export function UploadEventForm({
  handleSubmit,
  defaultValues,
  revalidate,
  edit,
}: Props<Event> & { edit?: boolean }): JSX.Element {
  return (
    <FormWrapper
      schema={edit ? schema.optional() : schema}
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
