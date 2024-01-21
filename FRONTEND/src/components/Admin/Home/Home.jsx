import React from 'react';
import { ImSearch } from 'react-icons/im';

function Home() {
  return (
    <>
      <div className='bg-blue-200 w-[100%] h-[800px]'>
      <div className='bg-blue-200 w-full h-180'> 
      <h1 className='font-bold mt-8 ml-7  text-blufont-cerebriSans text-blue-900 co text-5xl'>All client</h1>
      <p className='ml-12 mt-1 font-bold'>here is all clint information</p>
    
    
                </div>

        <div className='mt-16 ml-10 font-semibold '>
          <div className='flex '>
            <div className='relative'>
              <input
                className='rounded-lg p-2 w-[300px] pl-8 focus:outline-none'
                type='text'
                placeholder='Search profile by name'
              />
              <div className='absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none'>
                <ImSearch />
              </div>
            </div>
            <input className='rounded-lg p-2 ml-10 w-[20%]' type='text' placeholder='Filter' />
            <input
              className='rounded-lg mr-5 p-2 ml-20 w-[20%]'
              type='text'
              placeholder='April 11 - April '
            />
          </div>
          <div className='mt-10'>
            <hr />
          </div>
        </div>

        <div className='w-full mt-10'>
          <div className='flex font-semibold text-2xl justify-evenly mr-5 bg-blue-600 text-white h-10 ml-10 rounded-xl'>
            <div>Customer Name</div>
            <div>Date</div>
            <div>Amount</div>
          </div>

          <div className='h-[100px] bg-white ml-10 rounded-xl mt-3 mr-5'>
            <div className='flex font-semibold text-xl justify-evenly bg-slate-200 h-10 mt-10 rounded-xl'>
              <div>Shree Ram</div>
              <div>April</div>
              <div>30321</div>
            </div>
            <div className='flex font-semibold text-xl justify-evenly bg-slate-200 h-10 mt-10 rounded-xl'>
              <div>Shree Ram</div>
              <div>April</div>
              <div>30321</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
