import { uploadImage } from './Image.js';



const makePayment = async (userIdamount, imageFile) => {

console.log(userId);
const apiUrl = `http://localhost:8000/api/v1/users/${userId}/wallet/request`;
  try {
    if (!(amount||imageFile)) {
        console.log("amount or imagefile is required ");
    }
    const response = await uploadImage(imageFile, userId);
    console.log(response);
    const imageUrl = response.data.imageURL;
   
 const data  = {
    amount : amount,
    image : imageUrl
  }
  
    const paymentResponse = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      
      },
      body: JSON.stringify(data)
    });

    
    if (!paymentResponse.ok) {
     
      const errorMessage = await paymentResponse.text();
      throw new Error(`Payment request failed: ${errorMessage}`);
    }

    // Payment request was successful
    const paymentResult = await paymentResponse.json();
    console.log('Payment successful:', paymentResult);

   return paymentResult
  } catch (error) {
    console.error('Error:', error.message);
  
  }
};

export { makePayment}
