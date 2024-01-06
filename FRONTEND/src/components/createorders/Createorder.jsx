import React from 'react'
import {Link,NavLink} from 'react-router-dom'
function Createorder() {
    return (

        <div className='bg-blue-200 w-full h-180 '>
        
        <div>
        <h1 className=' font-bold mt-8 ml-7  text-blue-600 font-cerebriSans text-3xle-900 co text-5xl'>Create Order</h1>
        <p className='ml-8 mt-1  text-gray-600 '>Place Order and Enjoy </p>
        </div>

        <div className='flex'>

            <Link to = '/login'>
            <img className='h-50 ml-10 mt-10 w-60 rounded-2xl' src="https://imgs.search.brave.com/vHvrOc1rkgfrPI8xa4Zi8_AD5cNlqAnWl0F_TqQ7D7k/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2JhL2Ey/L2ZkL2JhYTJmZDhi/MTE5ZDFhYTc4OGI5/MDIwZDk0NDU4Y2Q1/LmpwZw" alt="" />
            </Link>

            <Link to = '/login'>
            <img className='h-50 ml-10 mt-10 w-60 rounded-2xl' src="https://imgs.search.brave.com/vHvrOc1rkgfrPI8xa4Zi8_AD5cNlqAnWl0F_TqQ7D7k/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2JhL2Ey/L2ZkL2JhYTJmZDhi/MTE5ZDFhYTc4OGI5/MDIwZDk0NDU4Y2Q1/LmpwZw" alt="" />
            </Link>

            <Link to = '/login'>
            <img className='h-50 ml-10 mt-10 w-60 rounded-2xl' src="https://imgs.search.brave.com/vHvrOc1rkgfrPI8xa4Zi8_AD5cNlqAnWl0F_TqQ7D7k/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2JhL2Ey/L2ZkL2JhYTJmZDhi/MTE5ZDFhYTc4OGI5/MDIwZDk0NDU4Y2Q1/LmpwZw" alt="" />
            </Link>
            
            <Link to = '/login'>
            <img className='h-50 ml-10 mt-10 w-60 rounded-2xl' src="https://imgs.search.brave.com/vHvrOc1rkgfrPI8xa4Zi8_AD5cNlqAnWl0F_TqQ7D7k/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2JhL2Ey/L2ZkL2JhYTJmZDhi/MTE5ZDFhYTc4OGI5/MDIwZDk0NDU4Y2Q1/LmpwZw" alt="" />
            </Link>
            
        </div>

        <div className='h-18 w-full ml-20 flex mt-40'> 
        <div className='w-[50%] h-6 flex justify-between'><button className='ml-8 rounded-2xl p-2 w-[50%] h-7 bg-white hover:bg-blue-600 hover:text-white border-gray-600 border-2 '><div className=' -mt-2'>Delete Item</div></button></div>
        <div className='w-[50%] h-6 flex justify-between'><button className='ml-8 rounded-2xl p-2 w-[50%] h-7 bg-white hover:bg-blue-600 hover:text-white border-gray-600 border-2 '><div className=' -mt-2'>Buy Item</div></button></div>
        </div>
     
        </div>

          )
}

export default Createorder