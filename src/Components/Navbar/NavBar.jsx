import { useState } from 'react'
import logo from '../..//assets/Logo_Printify.svg'
import NavItem from './NavItem,'
import MenuIcon from '@mui/icons-material/Menu';
import { PrimaryButton, SecondaryButton } from '../Button/Button';

const NavBar = () => {
    const [menuBarMobile, setMenuBarMobile] = useState(false);
    const handleMenuBar = () => {
        setMenuBarMobile(true);
    }
    const closeMenuBar = () => {
        setMenuBarMobile(false);
    }


    return (
        <nav className="fixed top-0 right-0 left-0 shadow px-4 h-16 z-50 bg-white">
            <div className='flex lg:container h-16 xl:container px-5 mx-auto items-center justify-between'>
                <div className='w-32 flex items-center'>
                    <div className='md:hidden'>
                        <MenuIcon sx={{ color: 'green', fontSize: '30px' }} onClick={handleMenuBar} />
                    </div>
                    {/* <div className='w-32 h-8 '> */}
                    <img src={logo} alt="Printify logo" className='' />
                    {/* </div> */}
                </div>
                <div className={`md:w-2/3 h-full mr-5 md:flex ${menuBarMobile ? 'block' : 'hidden'}`}>
                    <div className='fixed md:hidden top-0 left-0 w-full h-full bg-sky-800 opacity-40'></div>
                    <div className='absolute md:w-full md:relative top-0 left-0 w-60 bottom-0  min-h-screen md:min-h-0 '>
                        <div className='md:hidden p-2 text-center relative bg-white'>
                            <span className='font-bold text-2xl'>MENU</span>
                            <span className='absolute top-0 right-0 bottom-0 w-10 ' onClick={closeMenuBar}>
                                <span className='absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>X</span>
                            </span>
                        </div>
                        <ul className=' bg-white md:bg-transparent h-full md:h-fit text-2xl  py-10 md:py-1 font-bold md:font-medium  md:flex md:text-sm lg:space-x-3  text-gray-700  '>
                            <NavItem label='Catalog' />
                            <NavItem label='How it works' dropdownItems={['How Printify work', 'print on demand', 'printify quality promise', 'what to sell']} />
                            <NavItem label='Pricing' />
                            <NavItem label='Blog' />
                            <NavItem label='Services' dropdownItems={['item1', 'item2']} />
                            <NavItem label='Use-cases' dropdownItems={['item1', 'item2']} />
                            <NavItem label='Need help?' dropdownItems={['item1', 'item2']} />
                        </ul>
                    </div>

                    {/* </div> */}
                </div>

                <div className='space-x-4 md:space-x-0 lg:space-x-4 flex md:flex-col flex-row lg:flex-row items-center justify-center'>
                    <PrimaryButton text='Log in'/>
                    <SecondaryButton text='Sign up'/>
                </div>
            </div>
        </nav>
    )
}

export default NavBar