import React, { useState, useEffect } from 'react';
import { ImSearch } from 'react-icons/im';
import Button from '../../button/Button';
import { useNavigate } from 'react-router-dom';
import { getAllUsers } from '../actions/login.js';
import Users from './Users.jsx';
function Home() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      

      try {
        const userData = await getAllUsers();
        console.log(userData.data);
        setUsers(userData.data  );
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      <div className='bg-blue-200 w-[100%] h-[800px] flex-grow overflow-y-auto'>
        <div className='bg-blue-200 w-full h-180'>
          <div>
            <h1 className='font-bold mt-8 ml-8 text-blufont-cerebriSans text-blue-900 co text-5xl'>All Users</h1>
            <h5 className='text-black ml-7'>Let's have a Tour to the Users</h5>
          </div>
        </div>

        <div className='mt-16 ml-10 font-semibold'>
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

            <Button children={"Search"} className='rounded-lg p-1 ml-12 w-[90%] ' />
          </div>
          <div className='mt-10'>
            <hr />
          </div>
        </div>

        <div className='w-full mt-10'>
          <div className='flex font-semibold text-2xl justify-evenly mr-5 bg-blue-600 text-white h-10 ml-10 rounded-xl'>
            <div>Customer Name</div>
            <div>Email</div>
            <div>Spent</div>
            <div>Amount</div>
          </div>

          <div className='h-[100px]  ml-10 rounded-xl mt-3 mr-5'>
          <Users users={users} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
