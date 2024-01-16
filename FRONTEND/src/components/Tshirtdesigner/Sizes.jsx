import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Editsize } from '../../store/productSlice.js';

function Sizes() {
  const sizes = ["S", "M", "L", "XL", "XXL", "XXXL"];
  const dispatch = useDispatch();
  const selectedSize = useSelector((state) => state.product.size);
  
  return (
    <div className="flex">
      {sizes?.map((item, index) => (
        <div
          onClick={() => {
            dispatch(Editsize({ size: item }));
          }}
          key={index}
          className={`h-[50px] ml-[20px] w-[50px] border-solid border-2 rounded-xl border-blue-400
           hover:bg-blue-700 flex justify-center items-center hover:text-white text-blue-600 ${
             selectedSize === item ? 'bg-blue-700 text-white' : ''
           }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default Sizes;
