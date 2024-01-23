import React, { useEffect , useState} from 'react';
import { useSelector } from 'react-redux';
import EditButton from './EditButton';
import store from '../../store/store';
import { nanoid } from '@reduxjs/toolkit';
import {uploadProduct} from '../../actions/Product.js';

function Preview() {
  const [message , setMessage] = useState("")
  const [name , setname] = useState("")
  const retrievedImageData = localStorage.getItem('frontimage');
  const retrievedImageData2 = localStorage.getItem('backimage');
  const retrievedImageData3 = localStorage.getItem('rightimage');
  const retrievedImageData4 = localStorage.getItem('leftimage');
  const deleteStorage = () => {
    console.log('Clearing local storage');
    localStorage.clear();
  };
  const user = store.getState().auth.user; 
  const userId = user?._id
 
  useEffect(() => {
    // Create an image element and append it to the container
    const addImageToContainer = (imageData, containerId) => {
      if (imageData) {
        const imgElement = new Image();
        imgElement.src = imageData;
        const container = document.getElementById(containerId);
        if (container) {
          container.appendChild(imgElement);
        }
      }
    };

    addImageToContainer(retrievedImageData, 'image-container');
    addImageToContainer(retrievedImageData2, 'image-container2');
    addImageToContainer(retrievedImageData3, 'image-container3');
    addImageToContainer(retrievedImageData4, 'image-container4');

    // Clean up the image elements when the component unmounts
    return () => {
      const containers = ['image-container', 'image-container2', 'image-container3', 'image-container4'];
      containers.forEach(containerId => {
        const container = document.getElementById(containerId);
        if (container) {
          container.innerHTML = '';
        }
      });
    };
  }, [retrievedImageData, retrievedImageData2, retrievedImageData3, retrievedImageData4]);
  const backimage = store.getState().productimage.backimage;
  const frontimage = store.getState().productimage.frontimage;
  const leftimage = store.getState().productimage.leftimage;
  const rightimage = store.getState().productimage.rightimage;
  const color = store.getState().product.color;
  const size = store.getState().product.size;
  const delivered = store.getState().product.delivered;
  const name1 = store.getState().product.name;
  const ordered = store.getState().product.ordered;
  const rating = store.getState().product.rating;
  const brand = store.getState().product.brand;
  const shipped = store.getState().product.shipped;
  const stock = store.getState().product.stock;
  const category = store.getState().product.category;
  const price = store.getState().product.price

  const saveProduct = async () => {
    try {
      const backimage = store.getState().productimage.backimage;
      const frontimage = store.getState().productimage.frontimage;
      const leftimage = store.getState().productimage.leftimage;
      const rightimage = store.getState().productimage.rightimage;
      const color = store.getState().product.color;
      const size = store.getState().product.size;
      const delivered = store.getState().product.delivered;
      const name1 = store.getState().product.name;
      const ordered = store.getState().product.ordered;
      const rating = store.getState().product.rating;
      const brand = store.getState().product.brand;
      const shipped = store.getState().product.shipped;
      const stock = store.getState().product.stock;
      const category = store.getState().product.category;
      const productData = {
        image0: backimage,
        image1: frontimage,
        image2: leftimage,
        image3: rightimage,
        name: nanoid(),
        color: color,
        size: size,
        price: store.getState().product.price,
        stock: stock,
        rating: rating,
        shipped: shipped,
        delivered: delivered,
        ordered: ordered,
        brand: brand,
        category: category,
      };
      
      console.log(productData);
      const response = await uploadProduct(userId,productData);
    
      if (response) {
        setMessage("Product Saved");
        deleteStorage()

      } else {
        setMessage(`Error: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error saving product:', error);
      setMessage('Error saving product. Please try again.');
    }
  };
  




  return (
    <div className="bg-blue-200 h-[800px] w-[98%]">
      <div className="flex ">
        <div>
        <div className='flex'>
    <h1 className='font-bold mt-8 ml-7  text-blufont-cerebriSans text-blue-900 co text-5xl'>Peview product</h1>

    <EditButton to="/tshirt-designer" children="Back to Designer"className='h-10 w-58  rounded-3xl text-white mt-[40px] ml-[30px]  border bg-blue-700  hover:bg-blue-500 hover:text-white  font-semibold'/>
  
  </div>
     
      <br/> <br/>
          {/* <EditButton to="/tshirt-designer" children="Back to Designer" className="mt-10" /> */}


        </div>


      </div>
      <div className='flex flex-wrap mt-10'>
        <div id="image-container" className="ml-10 mt-4 w-[200px] "></div>
        <div id="image-container2" className="ml-10 mt-4  w-[200px] "></div>
        <div id="image-container3" className="ml-10 mt-4  w-[200px] "></div>
        <div id="image-container4" className="ml-10 mt-4  w-[200px] "></div>
      </div>

      <div className='flex'>

        <div className='mt-10 ml-10 w-[50%]'>
          <div className='font-semibold text-2xl '>
            Name : <input type="text" placeholder='Enter the name of product' className='text-sm' value={name} onChange={(e) => setname(e.target.value)}/>
          </div>
          <div className='font-bold text-2xl mt-6'>
            Size : {size}
          </div>
          <div className='font-bold text-2xl mt-6'>
            Color :{color}
          </div>
          <div className='font-bold text-2xl mt-6'>
            Price : {price}
          </div>
          <div className='font-bold text-2xl mt-6'>
            Brand : {brand} 
          </div>
        </div>
        <div className='w-72'>
            <p className=" ">{message}</p>
          <EditButton onClick={saveProduct} children="Save Product" className=" mt-[90%] w-44 h-12 "  />
          <EditButton onClick={deleteStorage} children="Delete All" className="ml-2 w-44 h-12  hover:bg-red-600" to={"/tshirt-designer"} />
        </div>

      </div>



    </div>
  );
}

export default Preview;
