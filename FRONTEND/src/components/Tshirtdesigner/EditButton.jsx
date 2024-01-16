import React from 'react';
import { NavLink } from 'react-router-dom';

const EditButton = ({ to, onClick, children ,className = ""}) => {
  return (
    <NavLink to={to}>
      <button
        className="hover:bg-blue-600 hover:text-white p-1 border-solid border-2 px-8 rounded-2xl ml-2 mt-2 font-semibold"
        onClick={onClick}
      >
        {children}
      </button>
    </NavLink>
  );
};

export default EditButton;
