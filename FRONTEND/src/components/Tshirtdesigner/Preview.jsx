import React, { useEffect , useState} from 'react';
import { useSelector } from 'react-redux';
import EditButton from './EditButton';
import store from '../../store/store';
import uploadProduct from '../../actions/Product';
function Preview() {
  const [message , setMessage] = useState("")
  const retrievedImageData = localStorage.getItem('frontimage');
  const retrievedImageData2 = localStorage.getItem('backimage');
  const retrievedImageData3 = localStorage.getItem('rightimage');
  const retrievedImageData4 = localStorage.getItem('leftimage');
  const deleteStorage = () => {
    console.log('Clearing local storage');
    localStorage.clear();
  };

 
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
        // name: "name2",
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
  
      const response = await uploadProduct(productData);
  
      if (response.ok) {
        setMessage("Product Saved");
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
      <div className="flex mt-10">
        <div>
          <h1 className="text-2xl font-bold ml-96">Preview Product Image</h1>
          <EditButton to="/tshirt-designer" children="Back to Designer" className="mt-10" />

          <EditButton onClick={deleteStorage} children="Delete All" className="ml-4 hover:bg-red-600" to={"/tshirt-designer"} />

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
          <div className='font-bold text-2xl '>
            Name : x
          </div>
          <div className='font-bold text-2xl mt-6'>
            Size : x
          </div>
          <div className='font-bold text-2xl mt-6'>
            Color : x
          </div>
          <div className='font-bold text-2xl mt-6'>
            Price : x
          </div>
          <div className='font-bold text-2xl mt-6'>
            Brand : x
          </div>
        </div>
        <div className='w-72'>
            <p className=" ">{message}</p>
          <EditButton onClick={saveProduct} children="Save Product" className=" mt-[90%]" />
        </div>

      </div>



    </div>
  );
}

export default Preview;
