import React, { useEffect, useState } from 'react';
import { RiCustomerService2Fill } from "react-icons/ri";
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../store/authSlice';
import Cookies from 'js-cookie';
import Product from '../Design product/Product.jsx';
import Hoodie from '../../assets/images/Hoodie.jpeg';
import oversizedtishirt from '../../assets/images/oversizedtishirt.jpeg';
import fullsleeve from '../../assets/images/fullsleeve.jpeg';

function Dashboard() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const dispatch = useDispatch();
    const [error, setError] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            navigate("/login");
            return;
        }

        fetch('https://printovert-backend.onrender.com/api/v1/users/current-user', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to verify user');
            }
            return response.json();
        })
        .then(data => {
            dispatch(login({ user: data.data, token: token }));
            setUser(data.data);
        })
        .catch(error => {
            localStorage.setItem('accessToken',"");
            console.error('Error verifying user:', error);
            console.log("Somthing went wrong plaese login ");
            navigate("/login");
        });
    }, [dispatch, navigate]);


    
    if (!user  ) {
        return (
            <div className='text-black bg-blue-200 font-semibold text-xl h-full w-full'>
                <p className='mt-28 ml-7'>Loading ...</p>
            </div>
        );
    }

    const { spent = 0, orders = [], walletBalance = 0, totalOrders = 0 } = user;
    return (
        <>
            <div className='bg-blue-200 w-full h-full flex-grow overflow-y-auto p-4'>
                <h1 className='font-bold mt-8 ml-7 text-blufont-cerebriSans text-blue-900 co text-5xl'>Dashboard</h1>
                <p className='ml-12 mt-1'>Let's have a Tour to the Dashboard</p>

                <div className='flex flex-wrap'>
                    <div className=' bg-white h-28 ml-7 mt-10 rounded-2xl w-64'>
                        <h3 className='ml-5 text-gray-500 p-1 font-base text-xl font-semibold'>Spent</h3>
                        <br /> <h2 className='text-4xl font-sans font-semibold ml-5 mb-4 '>${spent}</h2>
                    </div>

                    <div className=' bg-white h-28 w-64 ml-7 mt-10 rounded-2xl'>
                        <h3 className='ml-5 text-gray-500 p-1 font-base text-xl font-semibold'>Total orders</h3>
                        <br /> <h2 className='text-4xl font-sans font-semibold ml-5 mb-4 '>{totalOrders}</h2>
                    </div>

                    <div className=' bg-white h-28 w-64 ml-7 mt-10 rounded-2xl'>
                        <h3 className='ml-5 text-gray-500 p-1 font-base text-xl font-semibold'>Wallet Balance</h3>
                        <br /> <h2 className='text-4xl font-sans font-semibold ml-5 mb-4 '>${walletBalance}</h2>
                    </div>

                    <div className=' bg-white h-28 w-64 ml-7 mt-10 rounded-2xl'>
                        <h3 className='ml-5 text-gray-500 p-1 font-base text-xl font-semibold'>Active Orders</h3>
                        <br /> <h2 className='text-4xl font-sans font-semibold ml-5 mb-4 '>0</h2>
                    </div>

                    <div className=' bg-white h-32   w-80 ml-7 mt-5 rounded-2xl'>
                        <h3 className='ml-5 text-black-500 p-1 font-base text-xl font-bold'>Wallet Balance</h3>
                        <h4 className='ml-6 text-lg'>${walletBalance}</h4>
                        <NavLink to="/wallet">
                            <button className='h-10 w-28 rounded-3xl text-black mt-3 ml-6 border bg-white font-bold hover:bg-blue-500 hover:text-white'>View History</button>
                        </NavLink>
                        <NavLink to="/payment">
                            <button className='h-10 w-28 rounded-3xl text-black mt-3 ml-8 border bg-white font-bold hover:bg-blue-500 hover:text-white'>Add Amount</button>
                        </NavLink>
                    </div>

                    <div className=' bg-white h-32   w-80 ml-7 mt-5 rounded-2xl'>
                        <h3 className='ml-5 text-black-500 p-1 font-base text-xl font-bold'>Create a new Order</h3>
                        <NavLink to="/create-orders">
                            <button className='h-10 w-44 rounded-3xl text-black mt-10 ml-6 border bg-white font-bold hover:bg-blue-500 hover:text-white'>Create a new Order</button>
                        </NavLink>
                    </div>

                    <div className=' bg-white h-32   w-80 ml-7 mt-5 rounded-2xl'>
                        <h3 className='ml-5 text-black-500 p-1 font-base text-xl font-bold'>My Orders</h3>
                        <NavLink to="/orders">
                            <button className='h-10 w-44 rounded-3xl text-black mt-10 ml-6 border bg-white font-bold hover:bg-blue-500 hover:text-white'>View all Orders</button>
                        </NavLink>
                    </div>

                    <div className=' bg-white h-80 w-80 ml-7 mt-5 rounded-2xl'>
                        <h3 className='ml-5 text-black-500 p-1 font-base text-xl font-bold'>Contact Support</h3>
                        <div className='text-9xl ml-24 mt-6'> <RiCustomerService2Fill /></div>
                        <NavLink to="/contact-us">
                            <button className='h-10 w-44 rounded-3xl text-black mt-20 ml-5 border bg-white font-bold hover:bg-blue-500 hover:text-white'>Contact Us</button>
                        </NavLink>
                    </div>

                    <Product image={fullsleeve} name={"Full sleeve"} />
                    <Product image={Hoodie} name={"Hoodie"} />
                    <Product image={oversizedtishirt} name={"oversizedtishirt"} />
                </div>
            </div>
        </>
    )
}

export default Dashboard