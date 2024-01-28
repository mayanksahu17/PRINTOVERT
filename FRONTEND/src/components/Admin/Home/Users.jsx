import React from 'react';

function Users({ users}) {
  return (
    <div>
      {users?.map((user) => (
        <div key={user._id} className='flex font-semibold text-xl justify-evenly bg-slate-200 h-10 mt-10 rounded-xl'>
          <div>{user.fullName}</div>
          <div>{user.email}</div>
          <div>{user.spent}</div>
          <div>{user.walletBalance}</div>
        </div>
      ))}
    </div>
  );
}

export default Users;
