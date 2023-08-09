import { Music } from '@/types'

export type Props = {
  toggleModal: () => void
  defaults: Music
  refetch: () => void
  handleFlashMessage: (error?: boolean) => void
}
