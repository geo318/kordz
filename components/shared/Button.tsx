import { twMerge } from 'tailwind-merge'
import { ButtonProps } from './types'

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={twMerge(
        'justify-center items-center text-sm font-bold bg-white text-black px-5 py-4 capitalize tracking-wide',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
