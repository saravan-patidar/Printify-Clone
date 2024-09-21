import React from 'react'
import logo from '../..//assets/Logo_Printify.svg'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import RedditIcon from '@mui/icons-material/Reddit';

const allLinks = [
  {
    heading: 'Integrations',
    links: ['Shopify', 'Etsy', 'eBay', 'Amazon', 'Shopify', 'Etsy', 'eBay', 'Amazon', 'Shopify', 'Etsy', 'eBay', 'Amazon']
  },
  {
    heading: 'Discover',
    links: ['Shopify', 'Etsy', 'eBay', 'Amazon', 'Shopify', 'Shopify', 'Etsy', 'Etsy', 'eBay', 'Amazon', 'Shopify', 'Etsy', 'eBay', 'Amazon']
  },
  {
    heading: 'Start Selling',
    links: ['Shopify', 'Etsy', 'eBay', 'Amazon', 'Shopify', 'Shopify', 'Etsy', 'eBay', 'Etsy', 'eBay', 'Amazon', 'Shopify', 'Etsy', 'eBay', 'Amazon']
  },
  {
    heading: 'Printify',
    links: ['Shopify', 'Etsy', 'eBay', 'Amazon', 'Shopify', 'Shopify', 'Etsy', 'eBay', 'Amazon', 'Shopify', 'Etsy', 'eBay', 'Amazon', 'Shopify', 'Etsy', 'eBay', 'Amazon']
  },
]

export const Footer = () => {
  return (
    <section>
      <div className='container mx-auto p-4 sm:p-10'>
        <div className='flex flex-wrap justify-between items-center '>
          <div className='w-32'>
            <img src={logo} alt="logo" className='' />
          </div>
          <div className='sm:space-x-5 text-green-600'>
            <FacebookIcon fontSize='large' />
            <InstagramIcon fontSize='large' />
            <LinkedInIcon fontSize='large' />
            <XIcon fontSize='large' />
            <YouTubeIcon fontSize='large' />
            <WhatsAppIcon fontSize='large' />
            <RedditIcon fontSize='large' />
          </div>
        </div>

        <div className='py-20 flex flex-wrap justify-between '>

          {allLinks.map(({ heading, links }, index) => (
            <div className='space-y-5 flex-1 basis-1/2 py-3 md:basis-1/4' key={index}>
              <h4 className='font-bold'>{heading}</h4>
              <ul className='text-sm space-y-3'>
                {links.map((linkName, index) =>
                (
                  <li key={index} className='hover:text-green-600 cursor-pointer'><a>{linkName}</a></li>
                ))}

              </ul>
            </div>
          ))}
        </div>
      </div>


      <div className='bg-gray-300 p-7 rounded-xl'>
        <ul className=' flex justify-center space-x-5'>
          <li className='hover:text-green-500'>lorem</li>
          <li className='hover:text-green-500'>lorem</li>
          <li className='hover:text-green-500'>lorem</li>
          <li className='hover:text-green-500'>lorem</li>
        </ul>

        <p className='text-center text-gray-600'>© 2024 Printify, Inc. All rights reserved.</p>

      </div>
    </section>
  )
}
