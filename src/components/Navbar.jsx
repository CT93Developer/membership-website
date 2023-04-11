import React, {useState} from 'react'
import {MdOutlineClose, MdOutlineMenu} from 'react-icons/md'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [activeNav, setActiveNav] = useState('#home')

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'><a href="#" onClick={() => setActiveNav('#home')} className={activeNav === '#' ? 'active' : ''}>Home</a></li>
            <li className='p-4'><a href="#frameworks" onClick={() => setActiveNav('#frameworks')} className={activeNav === '#frameworks' ? 'active' : ''}>Frameworks</a></li>
            <li className='p-4'><a href="#newsletter" onClick={() => setActiveNav('#newsletter')} className={activeNav === '#newsletter' ? 'active' : ''}>NewsLetter</a></li>
            <li className='p-4'><a href="#cards" onClick={() => setActiveNav('#cards')} className={activeNav === '#cards' ? 'active' : ''}>Prices</a></li>
            <li className='p-4'><a href="#footers" onClick={() => setActiveNav('#footers')} className={activeNav === '#footers' ? 'active' : ''}>Contact</a></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <MdOutlineClose size={20}/> : <MdOutlineMenu size={20}/>}

        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4' >REACT.</h1>
            <ul className='uppercase p-4'>
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>Company</li>
                <li className='p-4 border-b border-gray-600'>Resource</li>
                <li className='p-4 border-b border-gray-600'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
        </div>
    </div>

  )
}

export default Navbar