import React, { useState, useEffect } from 'react';
import { getAllOrderedProducts } from '../../actions/Product.js';
import store from '../../store/store.js';
import { NavLink, useNavigate } from 'react-router-dom';

function Orders() {
  const [orderedProducts, setOrderedProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  const user = store.getState().auth.user;
  const userId = user?._id;
  const navigate = useNavigate()

 

  useEffect(() => {
    if (!user) {
      navigate("/login");
  }
    const fetchData = async () => {
      try {
        const response = await getAllOrderedProducts(userId);
        setOrderedProducts(response.data);
      } catch (error) {
        console.error('Error fetching ordered products:', error);
      } finally {
        setLoading(false); // Set loading to false when data fetching completes (success or failure)
      }
    };

    fetchData();
  }, []);

  return (
    <div className='w-full flex-grow overflow-y-auto p-4 bg-blue-200'>
      <h1 className='font-bold mt-8 ml-7 text-blufont-cerebriSans text-blue-900 co text-5xl'>All Orders</h1>
      <p className='ml-12 mt-1'>Check your Orders</p>
      <div className='bg-blue-700 h-11 w-full ml-6 mr-6 rounded-t-xl mt-4'>
        <li className='flex justify-evenly text-white px-10 text-center p-2'>
          <ul>QTY</ul>
          <ul>Order Date</ul>
          <ul>Product Detail</ul>
          <ul>Amount</ul>
          <ul>Status</ul>
          <ul>Tracking ID</ul>
          <ul>Delivery Company</ul>
        </li>
      </div>
      {loading ? ( // Show loading indicator while data is being fetched
        <p>Loading...</p>
      ) : (
        orderedProducts.map((product) => (
          <div key={product._id} className='bg-white h-11 w-full ml-6 mr-6'>
            <li className='flex justify-evenly text-Black px-10 text-center p-2'>
              <ul>{product.quantity}</ul>
              <ul>{new Date(product.createdAt).toLocaleDateString()}</ul>
              <ul>{product.description}</ul>
              <ul>{product.price * product.quantity}</ul>
              <ul>{product.price}</ul>
              <ul>{product.active ? 'Active' : 'Inactive'}</ul>
              <ul>{product._id}</ul>
              <ul>{product.deliveryCompany}</ul>
            </li>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;
