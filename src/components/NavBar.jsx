import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoMdCart } from "react-icons/io";
import { useSelector } from 'react-redux';
function NavBar() {
  const cart= useSelector((state)=>state.cart);
  return (
    <div className='flex w-full justify-around items-center h-20 bg-[#115e59]'>
      <div className='text-2xl font-bold text-[#14b8a6]'>
        <NavLink to="/"> <p>EcoFlux</p> </NavLink>
      </div>

      <div className='flex space-x-8 items-center'>
        <NavLink to="/" className={"text-lg text-[#ccfbf1] font-medium"}> <p>Home</p> </NavLink>
        <div className="relative">
        <NavLink to="/cart" className={`text-2xl font-semibold text-[#ccfbf1] hover:text-[#fde047]
           transition-all duration-150 delay-75`}> <IoMdCart/>  </NavLink>

           {cart.length>0 && <span className='absolute bottom-4 right-0 rounded-full text-center w-[15px] h-[15px] text-xs bg-[#06b6d4] font-medium text-white animate-bounce'>{cart.length}</span>}
        </div>

      </div>
    </div>
  )
}

export default NavBar
