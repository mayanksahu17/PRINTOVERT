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
    
      <h1 className='font-bold mt-8 ml-7  text-blufont-cerebriSans text-blue-900 co text-5xl'>Design your product</h1>
      <h4 className=' ml-12 text-gray-600 mt-1'>Choose your Design</h4>
         <div className=''> </div>

    <div className='ml-60'>
    <h2 className=' text-black font-serif     underline underline-offset-2  text-3xl mt-10 ml-72 font-semibold '>Select the varient</h2>
    </div>
  </div> 


<div className='flex mt-10'>


</div>

<div className='flex flex-wrap'>

<Product image = {fullsleeve} name={"Full sleeve"}/>

<Product image = {Hoodie} name={"Hoodie"}  />

<Product image = {oversizedtishirt} name={"oversizedtishirt"} />
<Product image = {Regular}  name={"Regular"}/>
<Product image = {Sweatshirt} name={"Sweatshirt"}/>

  
</div>


</div>





  )
}

export default Designproduct