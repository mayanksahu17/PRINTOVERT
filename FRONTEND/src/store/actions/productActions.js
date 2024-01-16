// productActions.js
import { Editfontimage } from '../productSlice';

export const saveImageAndEdit = (imageData) => {
  return async (dispatch) => {
    try {
     
      const savedData = imageData;

     
      dispatch(Editfontimage({ imageFile: savedData }));

      
    } catch (error) {
    
      console.error('Error saving image data:', error);
    }
  };
};
