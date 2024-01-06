import { useState, useEffect } from 'react';
import {fabric} from 'fabric';
import html2canvas from 'html2canvas';
import { NavLink } from 'react-router-dom';
const TShirtDesigner = () => {
  const [canvas, setCanvas] = useState(null);
  const [color , setColor] = useState("white")
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

  const handleColorChange = (e) => {
    document.getElementById('tshirt-div').style.backgroundColor = e.target.value;
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
        const img = new fabric.Image(imgObj);

        img.scaleToHeight(300);
        img.scaleToWidth(300);
        canvas.centerObject(img);
        canvas.add(img);
        canvas.renderAll();
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
      document.body.appendChild(img);
    });
  };
 const black= ()=>{
   const tshirtColor = document.getElementById("tshirt-backgroundpicture");
      tshirtColor.style.backgroundColor="black";
 }
 const pink= ()=>{
  const tshirtColor = document.getElementById("tshirt-backgroundpicture");
       tshirtColor.style.backgroundColor="pink";
     
    }
    const yellow= ()=>{
      const tshirtColor = document.getElementById("tshirt-backgroundpicture");
         tshirtColor.style.backgroundColor="yellow";
    }
    const green= ()=>{
     const tshirtColor = document.getElementById("tshirt-backgroundpicture");
          tshirtColor.style.backgroundColor="green";
        
       }
       const red= ()=>{
        const tshirtColor = document.getElementById("tshirt-backgroundpicture");
           tshirtColor.style.backgroundColor="red";
      }
      const blue= ()=>{
       const tshirtColor = document.getElementById("tshirt-backgroundpicture");
            tshirtColor.style.backgroundColor="blue";
          
         }    

     
    
          
  return (
    <div className=" bg-blue-200 h-full w-[98%]">
      <p className='text-5xl ml-20 mt-10 font-bold text-blue-900  '>Create Order</p>
      <div id="tshirt-div" className="relative  h-548 ml-20 mt-10 bg-blue-200" >
      <div class="bg-blue-200">
      <img className='bg-white'
          id="tshirt-backgroundpicture" 
          src="https://ourcodeworld.com/public-media/gallery/gallery-5d5afd3f1c7d6.png"
        />
      </div>
        <div className="absolute top-14 left-[120px] z-10 w-200 h-[450px] border-2 border-red-800 border-solid  ">
          <div className="relative w-200 h-400 ">
            <canvas id="tshirt-canvas" width="200"  height="450" ></canvas>
          </div>
        </div>
      </div>

    

      <br />

      <br />
      <br />
      
    <div  className='absolute top-14 left-[1000px]'>
    <p className='text-3xl'>Add your image</p>
      <p>Maximum print area (W x H)-15.60 in x19.60</p>
      <br />
      <p className='text-2xl'>colors</p>
      <br />
     <div className='flex'>
      <div onClick={black} id='black' className="rounded-full h-[50px] ml-[20px] w-[50px] bg-black"></div>
      <div onClick={red} id='red' className="rounded-full h-[50px] ml-[20px] w-[50px] bg-red-500"></div>
      <div onClick={blue} id='blue' className="rounded-full h-[50px] ml-[20px] w-[50px] bg-blue-500"></div>
      <div onClick={pink} id='pink' className="rounded-full h-[50px] ml-[20px] w-[50px] bg-pink-500"></div>
      <div onClick={green} id='green' className="rounded-full h-[50px] ml-[20px] w-[50px] bg-green-500"></div>
      <div onClick={yellow} id='yellow' className="rounded-full h-[50px] ml-[20px] w-[50px] bg-yellow-500"></div>
     </div>
     <br />
  <br />
  <p>Size</p>
  <br />
  <div className='flex'>
      <div  className=" h-[50px] ml-[20px] w-[50px] border-solid border-2 rounded-xl border-blue-400 hover:bg-blue-400 flex justify-center items-center hover:text-white text-blue-600 ">S</div>
      <div className=" h-[50px] ml-[20px] w-[50px] border-solid border-2 rounded-xl border-blue-400 hover:bg-blue-400 flex justify-center items-center hover:text-white text-blue-600 ">M</div>
      <div className=" h-[50px] ml-[20px] w-[50px] border-solid border-2 rounded-xl border-blue-400 hover:bg-blue-400 flex justify-center items-center hover:text-white text-blue-600 ">L</div>
      <div className=" h-[50px] ml-[20px] w-[50px] border-solid border-2 rounded-xl border-blue-400 hover:bg-blue-400 flex justify-center items-center hover:text-white text-blue-600 ">XL</div>
      <div className=" h-[50px] ml-[20px] w-[50px] border-solid border-2 rounded-xl border-blue-400 hover:bg-blue-400 flex justify-center items-center hover:text-white text-blue-600 ">XXL</div>
      <div className=" h-[50px] ml-[20px] w-[50px] border-solid border-2 rounded-xl border-blue-400 hover:bg-blue-400 flex justify-center items-center hover:text-white text-blue-600 ">XXXl</div>
     </div>

      <br />
      <br />
      
      <p className='text-2xl '>plain</p>
<br /> 
      <button onClick={handleSave} className='hover:bg-blue-600 hover:text-white p-4 border-solid border-2 px-8 rounded-2xl'>Upload Design</button>
    <NavLink to = "/design-library"> <button className='hover:bg-blue-600 hover:text-white p-4 border-solid border-2 px-8 rounded-2xl ml-12' > Design library</button> </NavLink> 
      <br /><br />
      <p className=' text-2xl'>Total Price: <span className='text-blue-500'>100</span>(Taxes Apply)</p>
  <br /> 
      <button  className='hover:bg-blue-600 hover:text-white p-4 border-solid border-2 px-8 rounded-2xl'>cancel</button>
      <button className='hover:bg-blue-600 hover:text-white p-4 border-solid border-2 px-8 rounded-2xl ml-12' > save</button>
      
      
    </div>
 
    </div>
  );
};

export default TShirtDesigner;