import React from 'react'
import Profile from './profile'

const Box = () => {
  return (
    <section className='w-full h-screen bg-bg flex items-center'>
        <div className='w-[400px] bg-box h-[560px] rounded-xl flex flex-col justify-center mx-auto'>
            <Profile />
        </div>
    </section>
  )
}

export default Box