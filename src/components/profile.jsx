import React from 'react'
import avatar from './images/avatar-jessica.jpeg'
import Links from './links'

const Profile = () => {
    return (
        <div className='w-[100%] flex justify-center flex-col items-center gap-3'>
            <img className='w-[6rem] rounded-full' src={avatar} alt="avatar img" />
            <div className='text-center'>
                <h1 className='text-white text-[1.5rem] md:text-[1.7rem]'>Jessica Randall</h1>
                <p className='text-place font-semibold text-md'>London, United Kingdon</p>
            </div>
            <p className='text-title text-center'>"Front-end developer and avid reader."</p>
            <div className='flex flex-col w-full gap-3 md:gap-2 mt-4'>
                <Links link="https://github.com/OzodbekMahmaraimov" text="GitHub" />
                <Links link="https://www.frontendmentor.io/profile/OzodbekMahmaraimov" text="Frontend Mentor" />
                <Links link="https://www.linkedin.com/in/ozodbek-mahmaraimov-086b182a8/" text="Linkedin" />
                <Links link="https://twitter.com/" text="Twitter" />
                <Links link="https://www.instagram.com/ozodbekmahmaraimov07/" text="Instagram" />
            </div>
        </div>
    )
}

export default Profile