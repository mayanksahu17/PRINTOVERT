import React, { useEffect, useState } from 'react';
import ActiveProducts from './ActiveProducts.jsx';
import { getAllActiveOrders, updateProduct } from '../actions/products.js';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ActiveOrders() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [refreshFlag, setRefreshFlag] = useState(false);
  
  const isAuthenticated = useSelector(state => state.auth.user);
  const navigate = useNavigate();
  const activeProduct = async (productId) => {
    try {
      setLoading(true);
      const response = await updateProduct(productId, { ordered: true, delivered: true, shipped: true });
      console.log(response);
      console.log("Order status updated to active");
      setRefreshFlag(!refreshFlag); // Toggle refresh flag to trigger component remount
    } catch (error) {
      setError('Error updating product status');
      console.error('Error updating product status:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const rejectProduct = async (productId) => {
    try {
      setLoading(true);
      const response = await updateProduct(productId, { ordered: false, delivered: false, shipped: false });
      if (response) {
        console.log(response);
      }
      setRefreshFlag(!refreshFlag); // Toggle refresh flag to trigger component remount
    } catch (error) {
      setError('Error updating product status');
      console.error('Error updating product status:', error);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    if (!isAuthenticated) {
      // navigate("/admin/admin-login")
      getAllOrderedProducts();
    } else {
    }
  }, [refreshFlag, isAuthenticated, navigate]); 

  const getAllOrderedProducts = async () => {
    try {
      setLoading(true);
      const response = await getAllActiveOrders();
      setProducts(response.data); // Update the products state with the fetched data
      console.log(response.data);
    } catch (error) {
      setError('Error fetching products');
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };  

  return (
    <div className="h-full w-full bg-blue-200 flex-grow overflow-y-auto">
      <div>
        <h1 className="font-bold mt-8 ml-8 text-blue font-cerebriSans text-blue-900 co text-5xl">
          Customer Order Pending
        </h1>
        <h5 className="text-black ml-10">This product is Pending</h5>
      </div>
      <div className="mt-4">
        <hr />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && products.length > 0 && (
        <div>
          {products.map((product) => (
            <ActiveProducts
              key={product._id}
              product={product}
              handleActive={() => activeProduct(product._id)}
              handleReject={() => rejectProduct(product._id)}
            />
          ))}
        </div>
      )}
      {!loading && !error && products.length === 0 && <p>No products found</p>}
    </div>
  );
}

export default ActiveOrders;
