import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import Product from './Product';
import fullsleeve from '../../assets/images/fullsleeve.jpeg'
import Hoodie from '../../assets/images/Hoodie.jpeg'
import oversizedtishirt from '../../assets/images/oversizedtishirt.jpeg'
import Regular from '../../assets/images/Regular.jpeg'
import Sweatshirt from '../../assets/images/Sweatshirt.jpeg'



function Designproduct() {
  return (


    <div className='bg-blue-200 w-full'> 

    <div className='w-full'>
    <h2 className='font-semibold text-blue-900 text-5xl mt-10 ml-10 flex '>
         <div className='w-10 h-10 bg-blue-900 text-center text-5xl rounded-lg mr-3 mt-2'> <FaArrowRight className='text-3xl mt-2 ml-1 mb-3  text-white font-bold'/></div>
Design your product</h2>
    <div className='ml-60'>
    <h2 className=' text-black-800 text-2xl mt-10 ml-72 font-semibold '>Select the varient</h2>
    </div>
  </div> 


<div className='flex mt-10'>


</div>

<div className='flex flex-wrap'>

<Product image = {fullsleeve} name={"Full sleeve"}/>
<Product image = {Hoodie} name={"Hoodie"} />
<Product image = {oversizedtishirt} name={"oversizedtishirt"} />
<Product image = {Regular}  name={"Regular"}/>
<Product image = {Sweatshirt} name={"Sweatshirt"} />

  
</div>


</div>





  )
}

export default Designproduct