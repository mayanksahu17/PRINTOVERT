import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { getAllProducts, updateProduct } from '../actions/products.js';
import store from '../../../store/store.js';
import { useNavigate } from 'react-router-dom';

function AdOrders() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const navigate = useNavigate();
  const isAuthenticated = store.getState().auth.user;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/admin-login');
    } else {
      fetchProducts();
    }
  }, [refreshFlag, isAuthenticated, navigate]); 

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getAllProducts();
      setProducts(response.data);
    } catch (error) {
      setError('Error fetching products');
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateProductStatus = async (productId, updates) => {
    setLoading(true);
    setError(null);
    try {
      await updateProduct(productId, updates); // Pass productId along with updates
      setRefreshFlag(!refreshFlag);
    } catch (error) {
      setError('Error updating product status');
      console.error('Error updating product status:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleActive = (productId) => {
    const product = products.find((p) => p._id === productId);
    if (product) {
      const updates = {ordered : true,   delivered: false, shipped: false, active: true, rejected: false };
      updateProductStatus(productId, updates);
    } else {
      console.error('Product not found');
    }
  };

  const handleReject = (productId) => {
    const product = products.find((p) => p._id === productId);
    if (product) {
      const updates = {ordered : false,  delivered: false, shipped: false, active: false, rejected: true };
      updateProductStatus(productId, updates);
    } else {
      console.error('Product not found');
    }
  };

  return (
    <div className="h-full w-full bg-blue-200 flex-grow overflow-y-auto">
      <div>
        <h1 className="font-bold mt-8 ml-8 text-blue font-cerebriSans text-blue-900 co text-5xl">Customer Order Pending</h1>
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
            <ProductCard
              key={product._id}
              product={product}
              handleActive={() => handleActive(product._id)}
              handleReject={() => handleReject(product._id)}
            />
          ))}
        </div>
      )}
      {!loading && !error && products.length === 0 && <p>No products found</p>}
    </div>
  );
}

export default AdOrders;
