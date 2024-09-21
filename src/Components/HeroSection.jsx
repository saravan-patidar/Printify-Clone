import React from 'react'
import DoneIcon from '@mui/icons-material/Done';
import { SecondaryButton, PrimaryButton } from './Button/Button'
import shirtImg from '../assets/img_5.png';

const HeroSection = () => {
    return (
        <section className='md:container  mt-32  mx-auto p-4'>
            <div className='bg-[url(../../public/background-hero.svg)] bg-no-repeat sm:bg-right-bottom bg-right-bottom p-10'>
                <div className='flex flex-col sm:flex-row justify-between items-center '>
                    <div className='sm:w-1/2 md:w-2/5 space-y-3'>
                        <h1 className='text-3xl md:text-5xl font-extrabold'>Create and sell custom products </h1>
                        <ul >
                            <li className='p-2'><DoneIcon color='success' sx={{ marginRight: '1rem' }} />100% Free to use</li>
                            <li className='p-2'><DoneIcon color='success' sx={{ marginRight: '1rem' }} />900+ High-Quality Products</li>
                            <li className='p-2'><DoneIcon color='success' sx={{ marginRight: '1rem' }} />Largest global print network</li>
                        </ul>
                        <div className='flex gap-5 py-4'>
                            <SecondaryButton text="Start for free" />
                            <PrimaryButton text='How it works?' />
                        </div>
                        <p className='text-green-600 text-sm'>Trusted by over 8M sellers around the world</p>
                    </div>
                    <div className='w-1/2 '>
                        <div className='h-[450px] grid grid-cols-2'>
                            <div className=' w-60 h-60 '>
                                <img src={shirtImg} alt="shirt photo" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection