import React, { Component } from 'react';
import { uploadImage } from '../../actions/Image';
import store from '../../store/store';

class ImageUploader extends Component {

  imageUpload = ({file , name }) => {
    getBase64(file).then(async(base64) => {
      localStorage.setItem(name, base64);                   
      console.debug("File stored", base64);
    });
  };
}

const upload = async (file)=>{
  const user = store.getState().auth.user;
  const userId = user._id;
  const image = await uploadImage(file, userId);
  return image;
}

const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
    reader.readAsDataURL(file);
  });
};








export default ImageUploader;


