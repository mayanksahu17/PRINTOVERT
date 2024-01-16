import React from 'react';

function Coloricon({ sizes }) {
  return (
    <div className="flex">
      {sizes?.map((item, index) => (
        <div
          key={index}
          className="h-[50px] ml-[20px] w-[50px] border-solid border-2 rounded-xl border-blue-400 hover:bg-blue-700 flex justify-center items-center hover:text-white text-blue-600"
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default Coloricon;
