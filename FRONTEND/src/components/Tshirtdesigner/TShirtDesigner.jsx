import { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import html2canvas from 'html2canvas';
import Tshirt from '../../assets/Tshirt.png';
import Sizes from './Sizes.jsx';
import EditButton from './EditButton.jsx'
import { useDispatch , useSelector } from 'react-redux';
import Colorbox from './Colorbox.jsx';
import Editfrontimage from '../../store/productSlice.js'
import {saveImageAndEdit} from '../../store/actions/productActions.js'
import ImageUploader from './Base64.js'


const TShirtDesigner = () => {
  const [canvas, setCanvas] = useState(null);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [frontTshirt , setfrontTshirt] = useState(null)
  const dispatch = useDispatch()
  const stateColor = useSelector((state) => state.product.color);

 
  useEffect(() => {
    const tshirtColor = document.getElementById('tshirt-backgroundpicture');
    if (tshirtColor) {
      tshirtColor.style.backgroundColor = stateColor;
    }
  }, [stateColor]);

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
            name: 'frontimage',
            method: Editfrontimage,
            dispatch: dispatch,
          });
          console.log('Image saved');
        }
      }, 'image/png');
    });
  };
  

 

  return (
    <div className="bg-blue-200 h-[800px] w-[98%]">
      <p className="text-5xl ml-20 mt-10 font-bold text-blue-900  ">Create Order</p>
      
      <div id="tshirt-div" className="relative  h-548 ml-20 mt-10 bg-blue-200">
        <div className="bg-white w-[450px]">
          <img id="tshirt-backgroundpicture" src={Tshirt} alt="Tshirt Background"  />
        </div>
        <div className="absolute top-14 left-[120px] z-10 w-200 h-[450px] border-2 border-red-800 border-solid  ">
          <div className="relative w-200 h-400 ">
            <canvas id="tshirt-canvas" width="200" height="400"></canvas>
          </div>
        </div>
      </div>

      <div className="">   <br /> <br />


<div className="ml-20 h-[60px] w-full ">
 
 <div className='mb-24 h-full w-full '>

         <EditButton to='/tshirt-designer' >
          Front 
          </EditButton>

          <EditButton to="/back-edit" >
            Back 
          </EditButton>   
      
          <EditButton to="/right-side-edit" >
            Right 
          </EditButton>

          <EditButton to="/left-side-edit">
            Left 
          </EditButton>
 </div>     
</div>

      </div>
      <br />
      <br />
      <br />
      <div className="absolute top-20 left-[1000px]">
        <div className='flex'>
        <p className="text-3xl">Add your image</p>
        <EditButton to={"/preview"} children={"Preview"} className='ml-28' />
        </div>
        <p>Maximum print area (W x H)-15.60 in x19.60</p>
        <div className='mt-5'>
        <EditButton to="/design-product" >
            Back 
          </EditButton>   
          <EditButton onClick={handleSave} >
        {' '}
          save
          </EditButton>   
        
        </div> <br />
        <p className="text-2xl">colors</p>
        <br />
        <div className="flex">
          <Colorbox  />
        </div>  <br />  <br />
        <p className="text-2xl">Size</p>
        <br />
        <div className="flex">
        <Sizes />
        </div>

        <br />
        <br />

        <p className="text-2xl ">Total Price: <span className="text-blue-500">100</span> {"  "}(Taxes Apply)</p>
        <br />
        <EditButton   onClick={toggleUploadForm} >
        Upload 
          </EditButton>   

          <EditButton  onClick={handleSave} >
        {' '}
          save
          </EditButton> 
        {showUploadForm && (
          <form className="uploadDiving h-full   w-96 border-2 rounded-2xl border-blue-500/100 ml-42 mt-5 bg-transparent hover:bg-white">
            <label htmlFor="imageInput" className="drop-container" id="dropcontainer">
              <span className="drop-title text-3xl font-bold ml-24 text-blue-500 ">Drop files here</span>
              <h1 className="mr-18 w-fulll h-8 font-bold text-center mt-4 text-blue-500 ">Or</h1>
              <div className="flex">
                <input type="file" id="imageInput" accept="image/*" className="w-42 mt-2 ml-20" onChange={handleCustomPicture} required />
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
  );
};

export default TShirtDesigner;
