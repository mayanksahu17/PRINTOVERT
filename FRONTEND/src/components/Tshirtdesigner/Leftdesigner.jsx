import React from 'react'
import { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import html2canvas from 'html2canvas';
import { NavLink } from 'react-router-dom';
import Tshirt from '../../assets/Tshirt.png';
import Sizes from './Sizes';
import leftsleeve1 from '../../assets/New folder/leftsleeve1.png'
import EditButton from './EditButton';
import Colorbox from './Colorbox'
import ImageUploader from './Base64.js'
import { useSelector, useDispatch } from 'react-redux';
import { Editleftimage } from '../../store/productSlice';
const Leftdesigner = () =>
 {
  const [canvas, setCanvas] = useState(null);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const dispatch = useDispatch()
  const stateImage = useSelector((state) => state.images.selectedImage);

  
  const toggleUploadForm = () => {
    setShowUploadForm(!showUploadForm);
  };

  useEffect(() => {
    const fabricCanvas = new fabric.Canvas('tshirt-canvas');
    setCanvas(fabricCanvas);

    return () => {
      fabricCanvas.dispose();
    };
  }, []);

  const updateTshirtImage = (imageURL) => {
    fabric.Image.fromURL(imageURL, (img) => {
      img.scaleToHeight(300);
      img.scaleToWidth(300);
      canvas.centerObject(img);
      canvas.add(img);
      canvas.renderAll();
    });
  };

  const handleDesignChange = (e) => {
    updateTshirtImage(e.target.value);
  };

  const handleCustomPicture = (e) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const imgObj = new Image();
      imgObj.src = event.target.result;

      imgObj.onload = () => {
        const fabricImg = new fabric.Image(imgObj);

        fabricImg.scaleToHeight(300);
        fabricImg.scaleToWidth(300);

        if (canvas) {
          canvas.add(fabricImg);
          canvas.renderAll();
        }
      };
    };

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 46) {
      console.log('Removing selected element on Fabric.js on DELETE key!');
      canvas.remove(canvas.getActiveObject());
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false);

    return () => {
      document.removeEventListener('keydown', handleKeyDown, false);
    };
  }, [canvas]);

  const handleSave = () => {
    html2canvas(document.getElementById('tshirt-div')).then((canvas) => {
      canvas.toBlob((blob) => {
        if (blob) {
          const imageUploader = new ImageUploader();
          imageUploader.imageUpload({
            file: blob,
            name: 'leftimage',
            method: Editleftimage,
            dispatch: dispatch,
          });
          console.log('Image saved');
        }
      }, 'image/png');
    });
  };
  

  const stateColor = useSelector((state) => state.product.color);
  useEffect(() => {
    const tshirtColor = document.getElementById('tshirt-backgroundpicture');
    if (tshirtColor) {
      tshirtColor.style.backgroundColor = stateColor;
    }
  }, [stateColor]);


  
  useEffect(() => {
    // Load the image into the canvas when the page mounts
    if (stateImage) {
      loadImageIntoCanvas(stateImage, canvas);
    }
  }, [stateImage, canvas]);

  const loadImageIntoCanvas = (imageUrl, canvas) => {
    const imgObj = new Image();
    imgObj.crossOrigin = 'anonymous'; // Set this if loading images from a different domain

    imgObj.onload = () => {
      const fabricImg = new fabric.Image(imgObj);

      fabricImg.scaleToHeight(300);
      fabricImg.scaleToWidth(300);

      if (canvas) {
        canvas.add(fabricImg);
        canvas.renderAll();
      }
    };

    imgObj.src = imageUrl;
  };

  
  const handleBackImageEditing = () => {
    // Implement functionality for editing the back image
    console.log('Editing the back image');
  };


  return (
    <div className="bg-blue-200 h-[800px] w-[98%]">
      {/* <p className="text-5xl ml-20 mt-10 font-bold text-blue-900  ">Design Product</p> */}


    <div className='flex'>

    <div> <div className='flex'>

<h1 className='font-bold mt-8 ml-7  text-blufont-cerebriSans text-blue-900 co text-5xl'>Design Product</h1>
<EditButton className='  h-10 w-32'  to="/design-product" >
        Back
      </EditButton>
  </div>
      


    <div id="tshirt-div" className="relative h-548 ml-20 mt-10 bg-blue-200">
  <div className="bg-white w-[450px]">
    <img
      id="tshirt-backgroundpicture"
      src={leftsleeve1}
      alt="Tshirt Background"
      className="w-[450px] h-[550px]"
    />
  </div>
  <div className="absolute top-[140px] left-[200px] z-10 w-[190px] h-[3 00px] border-2 border-red-800 border-solid">
    <div className="relative w-[180px] h-[280px]">
      <canvas id="tshirt-canvas" width={180} height={280}></canvas>
    </div>
  </div>    
</div>

      <div className=" mb-4">
        
        

        
<div className="ml-12 h-[60px] w-full ">
              <div className='mb-14 h-full w-full '>
                 <EditButton className='h-10 w-24 ' to='/tshirt-designer'>
                  Front
                  </EditButton>
                  <EditButton className='h-10 w-24' to="/back-edit">
                  Back
                 </EditButton>
                 <EditButton  className='h-10 w-24 ' to="/right-side-edit">
                  Right
                 </EditButton>
                 <EditButton  className='h-10 w-24 ' to="/left-side-edit">
                  Left
                </EditButton>
              </div>
            </div>
      </div>


    </div>


    <div>
    <br />
 
 <br />
 

    <div className="absolute top-20 left-[1000px]">
    <div className='flex'>
    <h1 className='font-bold mt-8   text-blufont-cerebriSans text-blue-900 co text-4xl'>Editing Canves</h1>
              <EditButton  to={"/preview"} children={"Preview"} className='h-8 w-24 ml-28' />
            
      
      </div>
      <p>Maximum print area (W x H)-15.60 in x19.60</p>
      <div className='mt-5'>
        
      
      </div>
      {/* <br />
      <br /> */}
      <p className="text-2xl">colors</p>
      <br />
      <div className="flex">
      <Colorbox  />  </div>
      <br />
    
      <p className="text-2xl">Size</p>
      <br />
      <div className="flex">
      <Sizes />
      </div>

      <br />
     

      <p className="text-2xl ">Total Price: <span className="text-blue-500">100</span> {"  "}(Taxes Apply)</p>

    
   
      <EditButton  className='h-10 w-32'onClick={toggleUploadForm}  > 
              Upload
            </EditButton>
            <EditButton className='h-10 w-32' onClick={handleSave} >
              {' '}
              Save
            </EditButton>
      {showUploadForm && (
        <form className="uploadDiving h-12  w-80 border-2 rounded-2xl border-blue-500/100 ml-42 mt-5 eqhover:bg-white">
        <label htmlFor="imageInput" className="drop-container" id="dropcontainer">
          {/* <span className="drop-title text-3xl font-bold ml-24 text-blue-500 ">Drop files here</span>
          <h1 className="mr-18 w-fulll h-8 font-bold text-center mt-4 text-blue-500 ">Or</h1> */}
          <div className="flex">
            <input type="file" id="imageInput" accept="image/*" className="w-60 mt-2 ml-20" onChange={handleCustomPicture} required />
            <div className="btn-collectioninput-fs16 ">
                
              </div>
            </div>
          </label>
        </form>
      )}

      <br />
      <br />
      
    </div>

    </div>
    </div>
   













     

      
    </div>
  );
};

export default Leftdesigner