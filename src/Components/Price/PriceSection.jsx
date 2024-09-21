import React from 'react'
import { SecondaryButton } from '../Button/Button'

const PriceSection = () => {
    return (
        <section className='sm:p-24 lg:container mx-auto'>
            <div className='bg-sky-950 rounded-3xl p-10 md:py-[6%] md:pr-[58%] md:pl-[7%] relative  mx-5 flex text-white'>
                <div className='  space-y-6'>
                    <h3 className='text-3xl sm:text-5xl'>Make Money, Risk Free</h3>
                    <div>You pay for fulfillment only when you make a sale</div>
                    <div className=' bg-slate-900 rounded-2xl p-6 space-y-3'>
                        <div className='flex justify-between'>
                            <p>You sell a t-shirt</p>
                            <p>$30</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>You pay for its production</p>
                            <p>$12</p>
                        </div>
                        <div className='flex  justify-between text-green-500 border-t pt-5 font-bold'>
                            <p>Your Profit</p>
                            <p>$18</p>
                        </div>
                    </div>
                    <SecondaryButton text='Start selling ' />
                    <div className='text-sm text-gray-300'>100% Free to use · 900+ Products · Largest print network</div>
                </div>
                <div className='hidden md:block absolute bottom-0 -right-7 border border-black rounded-2xl h-4/5'>
                    <img className='rounded-2xl w-96  h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR9lKTTWhbJK2MTGl903I2QacbrumtfPxFbHkzfvb0umjdjQNFVUO8oszz9ZLMWvXFwAY&usqp=CAU" alt="" />
                </div>
            </div>
        </section>
    )
}

export default PriceSection;