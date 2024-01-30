import React, { useEffect, useState } from 'react';
import ProductDelivered from './ProductDelivered.jsx';
import { getAllDeliveredOrders, updateProduct } from '../actions/products.js';
import store from '../../../store/store.js';
import { useNavigate } from 'react-router-dom';
function Delivered() {
  const [products, setProducts] = useState([]);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const navigate = useNavigate()
  const isAuthenticated = store.getState().auth.user


 
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/admin/admin-login")
    }else{
       getAllOrderedProducts();
     }
  }, [refreshFlag]); 

  const getAllOrderedProducts = async () => {
    try {
      
      const response = await getAllDeliveredOrders();
      setProducts(response.data); 
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <>
      <div className="h-full w-full bg-blue-200 flex-grow overflow-y-auto">
        <div>
          <h1 className="font-bold mt-8 ml-8 text-blue font-cerebriSans text-blue-900 co text-5xl">
            Delivered Products
          </h1>
          <h5 className="text-black ml-10">This product is Pending</h5>
        </div>
        <div className="mt-4">
          <hr />
        </div>

        <div className="">
          {products.map((product) => (
            <ProductDelivered
              key={product._id}
              product={product}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Delivered;
