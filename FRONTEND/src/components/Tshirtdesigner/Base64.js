import React, { Component } from 'react';

class ImageUploader extends Component {

  imageUpload = ({file , name , method , dispatch}) => {
    getBase64(file).then(base64 => {
      localStorage.clear();

      localStorage.setItem(name, base64);
    //   dispatch(method({ image: base64 }));
      console.debug("File stored", base64);
    });
  };
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
