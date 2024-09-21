import React from 'react'
import higher from '../assets/higher-profits.svg'

const featureData = [
    {
        imgSrc: higher,
        title: 'Higher Profits',
        desc: 'We offer some of the lowest prices in the industry because print providers continuously compete to win your business.'
    }, {
        imgSrc: higher,
        title: 'Robust Scaling',
        desc: 'Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality'
    }, {
        imgSrc: higher,
        title: 'Best Selection',
        desc: 'With 900+ products and top quality brands, you can choose the best products for your business.'
    }
]

const Feature = () => {

    return (
        <section className='container mx-auto my-18 '>
            <div className='md:p-20'>
                <div className='flex flex-col sm:flex-row justify-between gap-6 items-center  '>
                    {
                        featureData.map(({ imgSrc,title, desc }) => (
                            <div className=' space-y-6 py-4 px-2 w-2/3'>
                                <img src={imgSrc} alt="" className='w-32 ' />
                                <h4 className='font-bold text-lg'>{title}</h4>
                                <p className='text-gray-500'>{desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Feature