import React, { useEffect } from 'react';
import EditButton from './EditButton';

function Preview() {
  const retrievedImageData = localStorage.getItem('frontimage');
  const deleteStorage = () => {
    console.log('Clearing local storage');
    localStorage.clear();
  };
  useEffect(() => {
    // Create an image element and append it to the container
    const imgElement = new Image();
    imgElement.src = retrievedImageData;
    const container = document.getElementById('image-container');
    if (container) {
      container.appendChild(imgElement);
    }

    // Clean up the image element when the component unmounts
    return () => {
      if (container) {
        container.removeChild(imgElement);
      }
    };
  }, [retrievedImageData , deleteStorage , localStorage]);

  

  return (
    <div className="bg-blue-200 h-[800px] w-[98%]">
      <div className="flex mt-10">
        <EditButton to="/tshirt-designer" children="Back to Designer" className="mt-10" />
        <EditButton onClick={deleteStorage} children="Delete" className="ml-4 hover:bg-red-600" />
        
        <h1 className="text-2xl font-bold ml-60">Preview Product Image</h1>
      </div>
      <div id="image-container" className="ml-10 mt-4"></div>
    </div>
  );
}

export default Preview;
