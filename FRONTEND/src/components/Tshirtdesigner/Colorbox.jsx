import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Editcolor } from '../../store/productSlice';
const ColorSelector = () => {
 
  const dispatch = useDispatch()

  const handleColorChange = (e)=>{
   
    dispatch(Editcolor({color : e.target.value}))

  }


  const colors = [
    { id: 'black', value: 'black' },
    { id: 'red', value: 'red' },
    { id: 'blue', value: 'blue' },
    { id: 'pink', value: 'pink' },
    { id: 'green', value: 'green' },
    { id: 'yellow', value: 'yellow' },
  ];

  return (
    <div className="flex">
      {colors.map((color) => (
        <div
          key={color.id}
          onClick={() => handleColorChange({ target: { value: color.value } })}
          id={color.id}
          style={{ backgroundColor: color.value }}
          className="rounded-full h-[50px] ml-[20px] w-[50px]"
        ></div>
      ))}
    </div>
  );
};

export default ColorSelector;
