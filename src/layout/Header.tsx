"use client"
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
      <div className="p-1">
          <header className='flex items-center space-x-5 '>
            <p className='text-sm'>REACT AMUSEMENT</p>

            <button aria-label='btn' className='text-sm' onClick={() => {}}>Share</button>
          </header>
    </div>
  )
}

export default Header