'use client'

import { FormWrapper, Input } from '@/components'
import {
  musicSchema as schema,
  uploadSchemaPartial as partialSchema,
} from '@/schema'
import { Props } from './types'
import { Music } from '@/types/general'

export function UploadForm({
  handleSubmit,
  defaultValues,
  edit,
}: Props<Music> & { edit?: boolean }): JSX.Element {
  return (
    <FormWrapper
      schema={edit ? partialSchema : schema}
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      className='bg-white'
    >
      <Input name='title' placeholder='name of a painting' label='Title' />
      <Input name='thumbnail' type='file' label='Image - max 5MB' />
      <Input name='url' placeholder='year of creation' label='Link' />
    </FormWrapper>
  )
}
