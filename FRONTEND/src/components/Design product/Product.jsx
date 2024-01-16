import React from 'react';
import { NavLink } from 'react-router-dom';

function Product({ image , name }) {
  return (
    <div className=''>
      <NavLink to="/tshirt-designer">
        <div className='bg-slate-100 h-72  w-52 rounded-3xl ml-8 hover:shadow-2xl mt-5  '> 
          <img className=' h-60 ml-2 w-48 rounded-2xl top-3' src={image} alt="" />
          <div>
            <h3 className='text-xl font-semibold mt-2 ml-4'>{name}</h3>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default Product;
