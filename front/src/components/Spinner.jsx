import React from 'react'

export default function Spinner() {
  return (
    <div className='flex w-full h-[90vh] items-center justify-center'>
      <div className='animate-ping w-72 h-72 m-8 rounded-full bg-sky-600'></div>
    </div>
  )
}
