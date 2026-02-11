import React from 'react'
import Navbar from '../components/Navbar'
import { useProduct } from '../context/ProductProvider'
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cart } = useProduct();
  return (
    <>
      <Navbar />
      {cart.length === 0 ? (
        <h5 className='text-center text-xl font-bold'>Cart is empty</h5>
      ) : (
        cart.map((item, idx) => {
          return (
            <CartItem key={idx} item={item} />
          )
        })
      )}
    </>
  )
}

export default Cart