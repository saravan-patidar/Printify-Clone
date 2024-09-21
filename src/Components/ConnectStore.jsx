import React from 'react'
import { PrimaryButton } from './Button/Button'

const BoxPosition = ({ w, h, color, top, left, right, bottom, text }) => {
    return (
        <div className={`w-${w} h-${h} bg-${color} absolute hover:scale-105 shadow-lg rounded-xl`}
            style={{
                top: top ? `${top}%` : undefined,
                left: left ? `${left}%` : undefined,
                right: right ? `${right}%` : undefined,
                bottom: bottom ? `${bottom}%` : undefined,
            }}
        >
            <p className='text-center text-4xl p-5'>{text}</p>
        </div>
    )
}

const ConnectStore = () => {
    return (
        <section className='container mx-auto py-10'>
            <div className='lg:px-20'>
                <div className='space-y-2'>
                    <h2 className='text-center font-bold text-4xl p-5'>Connect your store</h2>
                    <p className='text-center text-sm text-gray-700'>Printify easily integrates with major e-commerce platforms and marketplaces</p>
                    <div className='relative  p-10 h-[400px]'>
                        <BoxPosition w='32' h='32' color='green-500' top='30' left='50'  text="Logo" />
                        <BoxPosition w='20' h='20' color='white' top='10' right='30'  text="s" />
                        <BoxPosition w='28' h='28' color='white' bottom='0' left='20' text="API" />
                        <BoxPosition w='20' h='20' color='white' top='0' left='40' text="B" />
                        <BoxPosition w='20' h='20' color='white' bottom='20' right='40' text="W" />
                        <BoxPosition w='20' h='20' color='white' bottom='10' right='10' text="E" />
                    </div>

                </div>
                <div className=' md:p-10' >
                    <div className='flex justify-between bg-gray-300 rounded-2xl bg-[url(../../public/talkToSale.svg)] bg-no-repeat bg-right sm:p-10 border'>
                        <h4 className='text-2xl text-green-800'>Are you a large business looking for custom solutions?</h4>
                        <PrimaryButton text='Talk To Sales'/>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default ConnectStore 