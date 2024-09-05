import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/slices/cartSlice';
import toast from 'react-hot-toast'

function CartItems({item}) {

  const dispatch= useDispatch();

  const remove=()=>{
    dispatch(removeFromCart(item.id));
    toast.success("Removed from cart.")

  }

  return (
    <div className='lg:grid grid-cols-2 border-b-2 border-gray-800 py-3 mx-5 lg:mx-0'>
      <div className='w-full h-[200px] mx-auto'>
        <img src={item.image} className='h-full mx-auto lg:mx-0' alt="" />
      </div>
      <div>
        <p className='font-bold truncate w-full py-2'>{item.title}</p>
        <p className='mt-2 mb-2 text-[18px] text-slate-400'>{item.description.split(" ").slice(0,10).join(" ")+".."}</p>
        <div className='flex justify-between items-center mt-7'>
            <p className=' font-bold text-lg text-green-600'>${item.price}</p>
            <MdDelete className='text-2xl cursor-pointer text-red-600' onClick={remove}/>
        </div>
      </div>
    </div>
  )
}

export default CartItems
