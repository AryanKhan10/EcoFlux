import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItems from '../components/CartItems'

function Cart() {

  // const {cart} = useSelector((state) => state); ye un necessory re-rendereing karega kiu tm store mai prhe saare slice la rahe ho
  const cart = useSelector((state) => state.cart); // sirf cart slice la rahe ho
  // console.log(cart)
  const [totalAmount, setTotalAmount] = useState(0);


  // jb bhi cart mai changes hongy tho totalAmount calc hogi
  useEffect(()=>{
    setTotalAmount( cart.reduce((acc,cur) => acc + cur.price,0 ))
  },[cart])
  
  return (
    <div className=''>
      {cart.length>0 ? 
      ( <div  className='flex max-w-6xl justify-center mt-20 gap-20'>
          <div className='w-5/12 flex flex-col space-y-3'>
            {cart.map((item) => <CartItems key={item.id} item={item}/>)}
          </div>
          <div className='h-screen ml-10'>
            <div className='text-3xl font-bold text-green-500 py-3'>Cart summary</div>

            <p className='text-lg font-medium text-gray-600'>Total items {cart.length}</p>
            <div className='mt-60'>
              <p className='text-xl font-semibold'>Total amount: <span className='text-green-600 font-bold'> ${totalAmount}</span></p>
            </div>
          </div>
      </div> ):
      (<div className='mx-auto h-screen flex flex-col justify-center items-center'>
        <p className='text-2xl font-medium'>No item in cart</p>
        <Link to={"/"}>
        <button className='my-5 px-3 py-2 rounded-full uppercase text-sm font-bold hover:bg-green-700
                   hover:text-white text-green-700 border-2 border-green-700 transition-all duration-100 delay-75 shadow-xl'
                   >Shop now</button></Link>
      </div>)}
    </div>
  )
}

export default Cart
 