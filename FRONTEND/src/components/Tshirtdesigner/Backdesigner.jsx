import { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import html2canvas from 'html2canvas';
import { NavLink } from 'react-router-dom';
import Tshirt from '../../assets/Tshirt.png';
import Sizes from './Sizes';
import store from '../../store/store.js';
import EditButton from './EditButton';
import Colorbox from './Colorbox'
import { useSelector, useDispatch } from 'react-redux';
import ImageUploader from './Base64.js'
import { uploadImage } from '../../actions/Image.js';
import { setback } from '../../store/productimage.js';


const Backdesigner = () => {
  const [canvas, setCanvas] = useState(null);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const stateImage = useSelector((state) => state.images.selectedImage);
  const dispatch = useDispatch()



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




  const upload = async (dataURL) => {
    try {
      const user = store.getState().auth.user;
      const userId = user._id;
  
      // Convert data URL to Blob
      const blob = await (await fetch(dataURL)).blob();
  
      // Create a file from Blob
      const file = new File([blob], "image.png");
  
      // Upload the file
      const response = await uploadImage(file, userId);

      const image = response.data.imageURL

      console.log(typeof(image));

      dispatch(setback({ URL: image }));

      console.log("Image uploaded:", image);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  


  const handleSave = async () => {

      html2canvas(document.getElementById('tshirt-div')).then((canvas) => {
        canvas.toBlob((blob) => {
          if (blob) {
            const imageUploader = new ImageUploader();
            imageUploader.imageUpload({
              file: blob,
              name: 'backimage',
            });

          }
        }, 'image/png');
      });
      const canvas = await html2canvas(document.getElementById("tshirt-div"));
      const canvasDataURL = canvas.toDataURL('image/png');
      await upload(canvasDataURL);

  }
  





  const stateColor = useSelector((state) => state.product.color);
  useEffect(() => {
    const tshirtColor = document.getElementById('tshirt-backgroundpicture');
    if (tshirtColor) {
      tshirtColor.style.backgroundColor = stateColor;
    }
  }, [stateColor]);

  

  

  return (
    <div className="bg-blue-200 h-[800px] w-[98%]">
   
      <div className='flex'>
        <div>
        <h1 className='  font-bold mt-8 ml-7  text-blufont-cerebriSans text-blue-900 co text-5xl'>Desgin product </h1>
    <p className=' ml-12 mt-1'>Add you'r image</p>
    
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
          <div>
             
            <div className="ml-20 h-[60px] w-full ">
            
                <EditButton to='/tshirt-designer'className='mt-11   h-10 w-24 rounded-3xl text-white ml-12 border bg-blue-700  hover:bg-blue-400 hover:text-white  font-bold  '>
                  Front
                </EditButton>
                <EditButton to="/back-edit"className='mt-11   h-10 w-24 rounded-3xl text-white ml-12 border bg-blue-700  hover:bg-blue-400 hover:text-white  font-bold  '>
                  Back
                </EditButton>
                <EditButton to="/right-side-edit"className='mt-11   h-10 w-24 rounded-3xl text-white ml-12 border bg-blue-700  hover:bg-blue-400 hover:text-white  font-bold  '>
                  Right
                </EditButton>
                <EditButton to="/left-side-edit"className='mt-11   h-10 w-24 rounded-3xl text-white ml-12 border bg-blue-700  hover:bg-blue-400 hover:text-white  font-bold  '>
                  Left
                </EditButton>
           
            </div>
          </div>
        </div>
        <div>
        
          
            <EditButton to="/design-product" className='mt-11   h-10 w-24 rounded-3xl text-white ml-12 border bg-blue-700  hover:bg-blue-400 hover:text-white  font-bold  ' >
                Back
              </EditButton>

              <EditButton   to={"/preview"} children={"Preview"} className='ml-80     mt-11   h-10 w-30 rounded-3xl text-white  border bg-blue-700  hover:bg-blue-400 hover:text-white  font-bold ' />
          

            
          <div className="absolute top-16 left-[1000px]">
           
            <div className=''>
           
              <div className='flex'>
                
              </div>

              <div>
                
             

            <h1 className='font-bold mt-20     text-blufont-cerebriSans text-blue-900 co text-4xl'>Editing Canves </h1>
              </div>
             <p className=' mt-1'>Maximum print area (W x H)-15.60 in x19.60</p>
            
            </div>
            {/* <p>Maximum print area (W x H)-15.60 in x19.60</p> */}
            <div className='mt-5'>
              
              
            </div> 
            <p className="text-2xl">colors</p>
            <br />
            <div className="flex">
              <Colorbox />
            </div> <br /> 
            <p className="text-2xl">Size</p>
            <br />
            <div className="flex">
              <Sizes />
            </div>
            <br />
           
            <p className="text-2xl ">Total Price: <span className="text-blue-500">100</span> {"  "}(Taxes Apply)</p>
            <br />
            <EditButton onClick={toggleUploadForm} className='  mt-11   h-10 w-30 rounded-3xl text-white  border bg-blue-700  hover:bg-blue-400 hover:text-white  font-bold' >
              Upload
            </EditButton>
            <EditButton onClick={handleSave}  className='ml-6  mt-11   h-10 w-30 rounded-3xl text-white  border bg-blue-700  hover:bg-blue-400 hover:text-white  font-bold' >
              {' '}
              Save
            </EditButton>
            {showUploadForm && (
              <form className="uploadDiving h-12   w-72   border-2 rounded-2xl border-blue-500/100 ml-42 mt-5 bg-transparent hover:bg-white">
                <label htmlFor="imageInput" className="drop-container" id="dropcontainer">
                  {/* <span className="drop-title text-3xl font-bold ml-24 text-blue-500 ">Drop files here</span>
                  <h1 className="mr-18 w-fulll h-8 font-bold text-center mt-4 text-blue-500 ">Or</h1> */}
                  <div className="flex">
                    <input type="file" id="imageInput" accept="image/*" className="w-42 mt-2  ml-8" onChange={handleCustomPicture} required />
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

export default Backdesigner;
