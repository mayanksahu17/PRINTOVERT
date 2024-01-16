import { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import html2canvas from 'html2canvas';
import { NavLink } from 'react-router-dom';
import Tshirt from '../../assets/Tshirt.png';
import Coloricon from './Coloricon';
import leftsleeve1 from '../../assets/New folder/leftsleeve1.png'
import EditButton from './EditButton';

const Backdesigner = () => {
  const [canvas, setCanvas] = useState(null);
  const [color, setColor] = useState('white');
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [frontTshirt , setfrontTshirt] = useState(null)
  const [backTshirt , setbackTshirt] = useState(null)
  const [rightsideTshirt , setrightsideTshirt] = useState(null)
  const [leftsideTshirt , setleftsideTshirt] = useState(null)
  const [size , Setsize] = useState(null)
  const sizes = ["S", "M", "L", "XL", "XXL", "XXXL"];


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
      const imgData = canvas.toDataURL('image/png');
      const img = new Image();
      img.src = imgData;
      console.log('Image saved');

      // Uncomment the following code when you have a server endpoint to handle the POST request
      /*
      fetch('your-server-endpoint', {
        method: 'POST',
        body: JSON.stringify({ imageData: imgData }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle server response
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      */
    });
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
    const tshirtColor = document.getElementById('tshirt-backgroundpicture');
    tshirtColor.style.backgroundColor = e.target.value;
  };


  
  const handleBackImageEditing = () => {
    // Implement functionality for editing the back image
    console.log('Editing the back image');
  };

  const handleRightSleeveEditing = () => {
    TSHIRT = leftsleeve
    console.log('Editing the right sleeve image');
  };

  const handleLeftSleeveEditing = () => {
    // Implement functionality for editing the left sleeve image
    console.log('Editing the left sleeve image');
  };

  return (
    <div className="bg-blue-200 h-[800px] w-[98%]">
      <p className="text-5xl ml-20 mt-10 font-bold text-blue-900  ">Create Order</p>
      <div id="tshirt-div" className="relative  h-548 ml-20 mt-10 bg-blue-200">
        <div className="bg-white w-[450px]">
          <img id="tshirt-backgroundpicture" src={Tshirt} alt="Tshirt Background" />
        </div>
        <div className="absolute top-14 left-[120px] z-10 w-200 h-[450px] border-2 border-red-800 border-solid  ">
          <div className="relative w-200 h-400 ">
            <canvas id="tshirt-canvas" width="200" height="450"></canvas>
          </div>
        </div>
      </div>

      <div className=" mb-4">
        <br />
        <br />


        <div className="ml-20 h-[60px] w-full ">
 
 <div className='mb-24 h-full w-full '>

 <EditButton to='/tshirt-designer' onClick={handleBackImageEditing}>
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
        <p className="text-3xl">Add your image</p>
        <p>Maximum print area (W x H)-15.60 in x19.60</p>
        <div className='mt-5'>
        <EditButton to="/design-product" >
            Back 
          </EditButton>   
          <EditButton onClick={handleSave} >
        {' '}
          save
          </EditButton>   
        </div>
       
        <br />
        <p className="text-2xl">colors</p>
        <br />
        <div className="flex">
          <div onClick={() => handleColorChange({ target: { value: 'black' } })} id="black" className="rounded-full h-[50px] ml-[20px] w-[50px] bg-black"></div>
          <div onClick={() => handleColorChange({ target: { value: 'red' } })} id="red" className="rounded-full h-[50px] ml-[20px] w-[50px] bg-red-500"></div>
          <div onClick={() => handleColorChange({ target: { value: 'blue' } })} id="blue" className="rounded-full h-[50px] ml-[20px] w-[50px] bg-blue-500"></div>
          <div onClick={() => handleColorChange({ target: { value: 'pink' } })} id="pink" className="rounded-full h-[50px] ml-[20px] w-[50px] bg-pink-500"></div>
          <div onClick={() => handleColorChange({ target: { value: 'green' } })} id="green" className="rounded-full h-[50px] ml-[20px] w-[50px] bg-green-500"></div>
          <div onClick={() => handleColorChange({ target: { value: 'yellow' } })} id="yellow" className="rounded-full h-[50px] ml-[20px] w-[50px] bg-yellow-500"></div>
        </div>
        <br />
        <br />
        <p className="">Size</p>
        <br />
        <div className="flex">
        <Coloricon sizes={sizes} />
        </div>

        <br />
        <br />

        <p className="text-2xl ">Total Price: <span className="text-blue-500">100</span>(Taxes Apply)</p>

      
        <br />
        <button onClick={toggleUploadForm} className="hover:bg-blue-600 hover:text-white p-4 border-solid ml-4 border-2 px-8 rounded-2xl">
          Upload Design
        </button>
        <NavLink to="/design-library">
          {' '}
          <button className="hover:bg-blue-600 hover:text-white p-4 border-solid border-2 px-8 rounded-2xl ml-12"> Design library</button>{' '}
        </NavLink>
        {showUploadForm && (
          <form className="uploadDiving h-32 w-96 border-2 rounded-2xl border-blue-500/100 ml-42 mt-5 bg-transparent hover:bg-white">
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

export default Backdesigner;
