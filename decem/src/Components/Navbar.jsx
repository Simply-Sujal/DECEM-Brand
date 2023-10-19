import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full'>
            <div className='flex justify-between px-2 md:px-4 text-[#0F0F0F] items-center'>
                <div className='flex gap-2 md:gap-7 font-semibold text-[14px] md:text-[20px] p-1 md:p-3'>
                    <h1 className='cursor-pointer'>SHOP</h1>
                    <h1 className='cursor-pointer'>STORY</h1>

                </div>
                <div className='text-4xl font-semibold tracking-tighter'>
                    <h1 className='pr-[1rem] md:pr-[6rem]'>DECEM</h1>
                </div>
                <div className='font-semibold text-[14px] md:text-[20px] p-1 md:p-3'>
                    BASKET(0)
                </div>
            </div>
        </div>
    )
}

export default Navbar
