import React from 'react'

const Links = ({ text, link }) => {
    return (
        <a className='w-[75%] mx-auto' href={link}>
            <div className='group w-[100%] h-[3rem] bg-choose rounded-xl flex items-center justify-center active:bg-chooseHover active:text-black'>
                <p className='text-white font-semibold group-active:text-black'>{text}</p>
            </div>
        </a>
    )
}

export default Links
