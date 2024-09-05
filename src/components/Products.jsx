import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../redux/slices/cartSlice'
import toast from 'react-hot-toast'
function Products({post}) {
    const [alreadyInCart, setAlreadyInCart] = useState(false)

    const cart = useSelector((state)=>state.cart.some((p) =>p.id===post.id))
    const dispatch= useDispatch()
    // console.log(alreadyInCart)
    const add = () =>{
      dispatch(addToCart(post));
      toast.success("Added to cart.")
      // setAlreadyInCart(prev=>!prev)
    }
    const remove = () =>{
      dispatch(removeFromCart(post.id));
      // dispatch(addToCart(post));
      toast.success("Removed from cart.")

    }
    // const titl=post.title.substring(0,17)+"..."
    // const des=post.description.substring(0,50)+"..."
  return (
    <div className='flex flex-col max-w-80 sm:w-full justify-between  border-[1px] rounded-md py-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]
                    transition-all ease-in-out duration-200 delay-100 hover:scale-105'>
      <div className='font-bold truncate w-full px-10'>
        {post.title}
      </div>

      <div className='mt-4 mb-3 text-[10px] text-slate-400 px-10'>
        {post.description.split(" ").slice(0,10).join(" ")+".."}
      </div>

      <div className='mx-auto h-[180-px] px-10'>
        <img src={post.image} className='h-full' alt="" />
      </div>

        <div className='flex justify-between mt-4 gap-8 px-3'>
          <div className=' font-bold text-green-700'>
            ${post.price}
          </div>
              {
                // mai agr yaha pr ik state bana dun or os ko update kr do (jis k base pe add or remove ka button shut 
                // krwaon )jb item cart mai add ho jaye ya remove 
                // ho jaye update tho jaye ga pr jb mai cart page pr jaon or waha se waps home pr awon tho wo state
                // reset ho jati hai or button remove se add mai shift ho jata hai kiu k wo local state hai
                //is functionality k leye globle state use karni hoti hai 
                
                  cart? <button 
                  className='px-2 py-1 rounded-full uppercase text-xs font-bold hover:bg-gray-700
                   hover:text-white border-2 border-gray-700 transition-all duration-100 delay-75 shadow-xl'
                   onClick={remove}>Remove item</button> : 

                  <button 
                  className='px-2 py-1 rounded-full uppercase text-xs font-bold hover:bg-gray-700
                   hover:text-white border-2 border-gray-700 transition-all ease-linear duration-100 delay-75 shadow-xl' 
                   onClick={add}>Add to cart</button>
              }
        </div>
    </div>
  )
}

export default Products
