import React, { useState } from 'react';
import { HiArrowNarrowLeft } from "react-icons/hi";
import Button from '../button/Button';
import { makePayment } from '../../actions/payment.js';  // Update the path
import { NavLink } from 'react-router-dom';
import store from '../../store/store.js';
import { useNavigate } from 'react-router-dom';

function Paymentpage() {
    const [amount, setAmount] = useState('');
    const [screenshot, setScreenshot] = useState(null);
    const [message, setMessage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate()
    const user = store?.getState()?.auth?.user;
    const userId = user?._id;

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleScreenshotChange = (e) => {
        setScreenshot(e.target.files[0]);
    };

    const handleConfirm = async () => {
        if (!amount || !screenshot) {
            // Handle validation or show a message
            setError("Please fill out all fields");
            return;
        }

        setLoading(true);
        try {
            if (userId) {
                await makePayment(userId, amount, screenshot);
                setAmount("");
                setScreenshot(undefined);
                setMessage(true);
            }
            // Optionally, you can perform additional actions after successful payment
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className={`bg-blue-200 w-full h-180  ${loading ? " pointer-events-none" : " "}`}>
                <div className='flex'>
                    <h1 className='font-bold mt-8 ml-8 text-blufont-cerebriSans text-blue-900 co text-5xl'>Payment</h1>
                    <Button className='h-10 w-40 rounded-3xl text-white mt-[40px] ml-[40px] border bg-blue-700  hover:bg-blue-500 hover:text-white font-semibold' to={"/wallet"} children={'Back'} />
                </div>

                <div className='ml-60'>

                    <div className=' mt-5 ml-48 '>

                        <div className='text-4xl text-black font-bold ml-12'>Scan & Pay</div>
                        <div className=' text-black '>Enter your amount and Submit the Screenshot </div>
                        <div className=' w-80 bg-white h-[450px]  justify-center py-5 rounded-2xl mt-2'>
                            <div className='text-center font-bold text-2xl' >Brand Name</div>
                            <img className='w-72 h-72 p-2 mt-10 border-gray-700 border-2 border-solid ml-4' src="https://imgs.search.brave.com/meDyiZHP6-aILvxlpWUrR8L_Ua4aKjibGy8G_r1gUh4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9xci1jb2RlXzg2/OTQyMy0xMDc3Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn" alt="" />
                            <div className='text-center mt-3 font-semi  bold'>Scan the QR with any <br /> BharatQR / UPI enabled app</div>
                        </div>

                        <div className='flex'>
                            <div className='flex flex-col ml-3 '>

                                <input type="number" placeholder="Enter amount" className="w-[200px] h-8 ml-12 rounded-xl mt-5 font-semibold text-center bg-white" min="0" onChange={handleAmountChange} value={amount} />
                                <input type="file" placeholder='Enter screenshot' className='w-[300px]  rounded-xl mt-4 py-2 border-blue-700 border-4 border-solid' onChange={handleScreenshotChange} />
                                {message && <div className='text-green-600 font-bold'>Payment requested successfully!</div>}
                                {error && <div className='text-red-600 font-bold'>{error}</div>}

                            </div>

                            <div className='flex mt-14'>
                                <button className='h-10 w-20 rounded-xl text-white mt-4 ml-10 border bg-blue-700 hover:bg-red-500
                      hover:text-white font-semibold' onClick={() =>{ setAmount(''); navigate("/wallet") }}>CANCEL</button>
                                <button className='h-10 w-24 rounded-xl text-white mt-4 ml-4 border bg-blue-700 hover:bg-blue-500
                      hover:text-white font-semibold ' onClick={handleConfirm}>CONFIRM</button>
                            </div>
                        </div>



                    </div>

                </div>


            </div>
        </>

    );
}

export default Paymentpage;
