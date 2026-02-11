import { HugeiconsIcon } from '@hugeicons/react'
import { RiAddLine, RiSubtractLine } from '@remixicon/react'
import { MinusSignCircleIcon, PlusSignCircleIcon } from 'hugeicons-react'
import React from 'react'
import { useProduct } from '../context/ProductProvider'
import { Link } from 'react-router-dom'

const CartItem = ({ item }) => {

    const { cart, increment, decrement, deleteCart } = useProduct();

    const totalItem = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <>
            <div className=''>
                <div className='max-h-[50vh] overflow-y-scroll'>
                    <div className='h-[25vh] flex flex-col md:flex-row justify-between max-w-[65%] mx-auto my-2 border-2 border-green-500 px-3 py-2'>
                        <div className='flex flex-col items-center gap-2 '>
                            <img src={item.thumbnail} alt={item.title} className='h-[15vh] w-[20vw] object-cover' />
                            <h4 className='text-xl font-bold'>{item.title}</h4>
                        </div>
                        <div className='flex flex-row md:flex-col items-center gap-2'>
                            <div className='flex flex-col items-center gap-2'>
                                <h4>{item.price}</h4>
                                <div className='flex border-2 border-green-500 px-3 py-2 rounded-2xl items-center'>
                                    <button
                                        disabled={item.quantity === 1}
                                        onClick={() => decrement(item.id)}
                                        className='cursor-pointer bg-gray-100 px-1 py-1 rounded-md'
                                    >
                                        <RiSubtractLine />
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        disabled={item.quantity === 10}
                                        onClick={() => increment(item.id)}
                                        className='cursor-pointer bg-gray-100 px-1 py-1 rounded-md'
                                    >
                                        <RiAddLine />
                                    </button>
                                </div>
                            </div>
                            <div>
                                <button
                                    onClick={() => deleteCart(item.id)}
                                    className='bg-red-500 px-3 py-2 text-white rounded-md cursor-pointer'>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* total items, total price */}
                <div className='fixed w-full bottom-0 right-0 left-0 bg-gray-500'>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col items-center gap-3'>
                            <span className='text-xl font-bold'>Total Items</span>
                            <span className='text-xl font-bold'>Total Price</span>
                        </div>
                        <div className='flex flex-col items-center gap-3'>
                            <span className='text-xl font-bold'>{totalItem}</span>
                            <span className='text-xl font-bold'>₹{totalPrice.toFixed(1)}</span>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <Link to={'/order'} className='cursor-pointer bg-green-500 px-4 py-2 rounded-md flex items-center justify-center'>Place Order</Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CartItem