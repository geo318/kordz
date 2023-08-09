'use client'

import React from 'react'
import { useFormContext } from 'react-hook-form'

export const Input: React.FC<{
  name: string
  type?: string
  placeholder?: string
  label?: string
  noLabel?: boolean
}> = ({ name, type, placeholder, label, noLabel }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div className='w-full'>
      <label htmlFor={name} className='text-sm font-bold text-gray-700'>
        {!noLabel && (label || placeholder)}
      </label>
      <input
        className={`text-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-gray-400 focus:outline-none focus:shadow-inner ${
          type === 'file' && '!p-1'
        }`}
        type={type || 'text'}
        {...register(name)}
        placeholder={placeholder}
        id={name}
      />
      <div className='text-red-600 text-xs mb-3 pl-2'>
        {name in errors && <span>{`${errors?.[name]?.message}`}</span>}
      </div>
    </div>
  )
}
