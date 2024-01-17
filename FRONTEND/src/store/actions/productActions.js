// productActions.js
import { Editfrontimage } from '../productSlice';

export const saveImageAndEdit = (imageData) => {
  return async (dispatch) => {
    try {
     
      const savedData = imageData;

     
      dispatch(Editfrontimage({ imageFile: savedData }));

      
    } catch (error) {
    
      console.error('Error saving image data:', error);
    }
  };
};
