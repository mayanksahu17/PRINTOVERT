import React, { useEffect } from 'react';
import EditButton from './EditButton';

function Preview() {
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
          container.innerHTML = ''; // Clear the container's content
        }
      });
    };
  }, [retrievedImageData, retrievedImageData2, retrievedImageData3, retrievedImageData4]);

  return (
    <div className="bg-blue-200 h-[800px] w-[98%]">
      <div className="flex mt-10">
        <EditButton to="/tshirt-designer" children="Back to Designer" className="mt-10" />
        <EditButton onClick={deleteStorage} children="Delete All" className="ml-4 hover:bg-red-600" to={"/tshirt-designer"} />
        
        <h1 className="text-2xl font-bold ml-60">Preview Product Image</h1>
      </div>
      <div className='flex flex-wrap'>
      <div id="image-container" className="ml-10 mt-4 w-[400px] "></div>
      <div id="image-container2" className="ml-10 mt-4  w-[400px] "></div>
      <div id="image-container3" className="ml-10 mt-4  w-[400px] "></div>
      <div id="image-container4" className="ml-10 mt-4  w-[400px] "></div>
      </div>
   
    </div>
  );
}

export default Preview;
