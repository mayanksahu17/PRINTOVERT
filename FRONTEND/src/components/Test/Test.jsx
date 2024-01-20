import React from 'react'
import Tshirt from '../../assets/Tshirt.png';

function Test({}) {


  return (
    <div className="bg-blue-200 h-[800px] w-[98%]">
       
    <div id="tshirt-div" className="relative W-[450px] h-548 ml-20 mt-10 bg-blue-200">
        <div className="bg-white w-[450px]">
          <img id="tshirt-backgroundpicture" src={Tshirt} alt="Tshirt Background" />
        </div>
        <div className="absolute top-14 left-[120px] z-10 h-[450px]  ">
          <div className="relative  h-400 ">
            <canvas id="tshirt-canvas" width="200" height="400"></canvas>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Test