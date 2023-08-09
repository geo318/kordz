import { Portal, UploadForm, CloseIcon } from '@/components'
import { useUpdatePaintingModal } from './useUpdatePaintingModal'
import { DeleteModal } from './DeleteModal'
import { Props } from './type'

export const UpdatePaintingModal: React.FC<Props> = (props) => {
  const { handleSubmit, handleDelete, isDeleting, toggleDeleteDialog } =
    useUpdatePaintingModal(props)
  return (
    <>
      <Portal>
        {!isDeleting && (
          <div className='max-w-lg mx-auto mt-20'>
            <div className='z-50 block p-5 relative bg-white rounded-md'>
              <div className='flex'>
                <h3 className='font-medium text-center my-2 mx-auto pl-9'>
                  Change values and submit
                </h3>
                <div className='p-2 cursor-pointer' onClick={props.toggleModal}>
                  <CloseIcon />
                </div>
              </div>

              <UploadForm
                defaultValues={props.defaults}
                handleSubmit={handleSubmit}
                edit
              />

              <div
                className='text-red-500 hover:underline cursor-pointer text-right pt-5 text-sm font-medium'
                onClick={toggleDeleteDialog}
              >
                Delete image?
              </div>
            </div>
            <div
              className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-0'
              onClick={props.toggleModal}
            />
          </div>
        )}
        {isDeleting && (
          <DeleteModal
            handleDelete={handleDelete}
            toggleModal={toggleDeleteDialog}
          />
        )}
      </Portal>
    </>
  )
}
