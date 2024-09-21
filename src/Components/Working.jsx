import React from 'react';
import clotheImg from '../assets/clothes-dekstop.webp'
import clotheImgMobile from '../assets/clothes.png'

const Working = () => {
    return (
        <section className=' my-20 bg-gray-100'>
            <div className='container mx-auto py-28 px-6 sm:px-16'>
                <div className='bg-white md:bg-transparent rounded-2xl'>
                    <div className='flex flex-col md:flex-row items-center md:relative'>
                        <div className='md:w-2/5 md:h-[550px]  rounded-2xl z-30'>
                            <img src={clotheImg} alt="ImgesDesktop" className='bg-green-500 hidden md:block rounded-2xl w-full h-full' />
                            <img src={clotheImgMobile} alt="ImageMobile" className='bg-green-500 md:hidden rounded-2xl w-full h-full' />
                        
                        </div>
                        <div className='md:absolute rounded-2xl w-full bg-white right-0 bottom-0 p-5 md:py-[9%] md:pr-[4%] md:pl-[50%]'>
                            <div className='space-y-7 '>
                                <h3 className='font-bold text-3xl'>Easily add your design to a wide range of products</h3>
                                <p className='my-10'>With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.</p>
                                <div className='text-green-500 hover:text-green-600 cursor-pointer'>All products</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Working