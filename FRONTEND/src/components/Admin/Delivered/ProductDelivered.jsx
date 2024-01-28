import React from 'react';

  // Reusable Card Component
  const ProducDelivered = ({ product  }) => {

 const createdAt = new Date(product.createdAt);
 const formattedDate = `${createdAt.getDate()}/${createdAt.getMonth() + 1}/${createdAt.getFullYear()}`;
    
    return (
      <div className="card flex w-[1150px]  mt-5 ml-10 h-96 bg-gray-100 rounded-xl">
        <div className='flex'>
          <div className='ml-4'>
            <img src={product.image0} alt={product.name} className="product-image h-[170px] w-56 mt-4 rounded-lg" />
            <img src={product.image1} alt={product.name} className="product-image h-[170px] w-56 mt-4 rounded-lg" />
          </div>
          <div className='ml-2'>
            <img src={product.image2} alt={product.name} className="product-image h-[170px] w-56 ml-3 mt-4 rounded-lg" />
            <img src={product.image3} alt={product.name} className="product-image h-[170px] w-56 ml-3 mt-4 rounded-lg" />
          </div>
        </div>



        <div className="card-body bg-gray-100 p-4 rounded-lg ">

  <div className='flex'>

<div className='ml-20'>
  <p className="product-name   mb-2">Name: {product?.name}</p>
  <p className="product-description text-gray-700 mb-2">Description: {product?.description}</p>
  <p className="product-price   mb-2">Price: ${product?.price}</p>
  <p className="product-brand text-gray-700 mb-2">Brand: {product?.brand}</p>
  <p className="product-category text-gray-700 mb-2">Category: {product?.category}</p>
 
</div>
 
  <div className=' ml-52'>
  <p className="product-description text-gray-700 mb-2">Description: {product?.description}</p>
  <p className="product-stock text-gray-700 mb-2">Stock: {product?.stock}</p>
  <p className="product-shipped text-gray-700 mb-2">Shipped: {product?.shipped ? 'Yes' : 'No'}</p>
  <p className="product-delivered text-gray-700 mb-2">Delivered: {product?.delivered ? 'Yes' : 'No'}</p>
  <p className="product-ordered text-gray-700 mb-2">Ordered: {product?.ordered ? 'Yes' : 'No'}</p>
  </div>
 
</div>

<div className='mt-[90px]'>


<p className="product-created-at text-gray-700 mb-0 ml-[450px]">User Id : {product.userid}</p>
<p className="product-created-at text-gray-700 mb-0 ml-[450px]">Created At: {formattedDate}</p>
</div>
</div>

      </div>
    );
  };

  export default ProducDelivered;
