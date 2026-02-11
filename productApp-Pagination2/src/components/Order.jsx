import React, { useEffect, useState } from 'react'
import { ProgressBar } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
import { useProduct } from '../context/ProductProvider';

const Order = () => {
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate()
    const { clearCart } = useProduct();

    useEffect(() => {


        const timer1 = setTimeout(() => {
            setSuccess(true)
        }, 3000)

        const timer2 = setTimeout(() => {
            navigate('/')
            clearCart();
        }, 4000)

        return () => {
            clearTimeout(timer1); 
            clearTimeout(timer2);
        }


    }, [navigate, clearCart])

    return (
        <>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                {!success ? (
                    <ProgressBar
                        visible={true}
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="progress-bar-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                ) : (
                    <h1 className='text-2xl font-bold'>Order Placed Successfully</h1>
                )}
            </div>



        </>
    )
}

export default Order