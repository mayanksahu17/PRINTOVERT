import { uploadImage } from './Image.js';
import axios from 'axios';

const makePayment = async (userId, amount, imageFile) => {
  console.log(userId);
  const apiUrl = `https://printovert-backend.onrender.com/api/v1/users/${userId}/wallet/request`; // Relative path with proxy setup

  try {
    if (!(amount || imageFile)) {
      console.log('amount or imagefile is required ');
    }

    const response = await uploadImage(imageFile, userId);
    console.log(response);
    const imageUrl = response.data.imageURL;

    const data = {
      amount: amount,
      image: imageUrl,
    };

    const paymentResponse = await axios.post(apiUrl, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!paymentResponse.data.success) {
      const errorMessage = paymentResponse.data.message;
      throw new Error(`Payment request failed: ${errorMessage}`);
    }

    // Payment request was successful
    const paymentResult = paymentResponse.data;
    console.log('Payment successful:', paymentResult);

    return paymentResult;
  } catch (error) {
    console.error('Error:', error.message);
  }
};

export { makePayment}
