import React, { useState } from 'react'
import DropDown from './DropDown'
import Arrow from '../../assets/Arrow.svg'

const NavItem = ({label,dropdownItems}) => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)
    const handleMouseEnter = () => {
        if(dropdownItems) setIsDropDownOpen(true)
    }

    const handleMouseLeave=()=>{
        setIsDropDownOpen(false)
    }

    return (
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='lg:h-full md:flex items-center p-2 lg:mt-3 cursor-pointer hover:text-green-600 relative '>
           {label}{dropdownItems&&( isDropDownOpen?<img src={Arrow} className='w-4 rotate-180 inline-block' alt='Arrow'/>:<img src={Arrow} className='w-4 inline-block' alt='Arrow'/>)}
           {isDropDownOpen && dropdownItems && <DropDown items={dropdownItems}/>}
           {/* {dropdownItems && <DropDown items={dropdownItems}/>} */}

        </li>
    )
}

export default NavItem