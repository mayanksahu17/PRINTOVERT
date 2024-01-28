import React, { useEffect, useState } from 'react';
import ActiveProducts from './ActiveProducts.jsx';
import { getAllProducts, updateProduct } from '../actions/products.js';
import store from '../../../store/store.js';
import { useNavigate } from 'react-router-dom';
function Activeorders() {
  const [products, setProducts] = useState([]);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const navigate = useNavigate()
  const isAuthenticated = store.getState().auth.user
  const activeProduct = async ({ ordered, delivered, shipped, productId }) => {
    const response = await updateProduct({ ordered, delivered, shipped, productId });
    console.log(response);
    console.log("Order status updated to active");
    setRefreshFlag(!refreshFlag); // Toggle refresh flag to trigger component remount
  };

  const rejectProduct = async ({ ordered, delivered, shipped, productId }) => {
    const response = await updateProduct({ ordered, delivered, shipped, productId });
    if (response) {
      console.log(response);
    }
    setRefreshFlag(!refreshFlag); // Toggle refresh flag to trigger component remount
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/admin/admin-login")
     }
    getAllOrderedProducts();
  }, [refreshFlag]); // Include refreshFlag in dependency array to remount when it changes

  const getAllOrderedProducts = async () => {
    try {
      // Fetch product data from your API or wherever it's stored
      const response = await getAllProducts();
      setProducts(response.data); // Update the products state with the fetched data
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
            Customer Order Pending
          </h1>
          <h5 className="text-black ml-10">This product is Pending</h5>
        </div>
        <div className="mt-4">
          <hr />
        </div>

        <div className="">
          {products.map((product) => (
            <ActiveProducts
              key={product._id}
              product={product}
              handleActive={() => activeProduct({
                ordered: true,
                delivered: false,
                shipped: false,
                productId: product._id
              })}
              handleReject={() => rejectProduct({
                ordered: false,
                delivered: false,
                shipped: false,
                productId: product._id
              })}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Activeorders;
