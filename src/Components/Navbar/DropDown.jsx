import React from 'react'

const DropDown = ({items}) => {
  return (
    <ul className='md:absolute md:border p-3 font-medium bg-white md:w-52 top-12 text-gray-600 md:shadow space-y-2 md:-z-30 '>
        {items.map((item,index)=>(
            <li key={index} className='capitalize hover:text-green-500'>{item}</li>
        ))}
    </ul>
  )
}

export default DropDown