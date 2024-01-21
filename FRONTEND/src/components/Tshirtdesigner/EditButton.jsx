import React from 'react';
import { NavLink } from 'react-router-dom';

const EditButton = ({ to, onClick, children ,className = ""}) => {
  return (
    <NavLink to={to}>
      <button
        className={`${className}  rounded-3xl text-white mt-10 ml-7  bg-blue-700  hover:bg-blue-500 hover:text-white  font-bold`}
        onClick={onClick}
      >
        {children}
      </button>
    </NavLink>
  );
};

export default EditButton;
