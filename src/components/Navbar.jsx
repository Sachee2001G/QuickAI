import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div className='fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center p-3 px-4 sm:px-20 xl:px-20 xl:px-32 cursor-pointer'>
      {/* <div className='text-xl font-bold'>QuickAI</div>
      <div className='flex space-x-4'> */}
        {/* <a href='/' className='hover:underline'>Home</a>
        <a href='/ai' className='hover:underline'>AI Tools</a>
        <a href='/community' className='hover:underline'>Community</a> */}

         <img src={assets.logo} alt='Logo' className='w-32 sm:w-44' onClick={() => navigate('/')} />
      </div>
    // </div>
  )
}

export default Navbar