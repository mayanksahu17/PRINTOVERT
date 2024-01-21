import Editfrontimage from '../../store/productSlice.js';   
import { useDispatch, useSelector } from 'react-redux';
import store from '../../store/store.js';



const dispatch = useDispatch();
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

     
      dispatch(Editfrontimage({ image: image }));
        
      console.log("Image uploaded:", image);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  
  export default upload