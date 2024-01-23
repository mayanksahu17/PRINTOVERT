import React from 'react'

function Tickets({ticket}) {
    const { _id, subject, image, status, callBackNumber, response, description, createdAt, updatedAt } = ticket;
  
    return (
      <div className='bg-white h-11 w-50 ml-6 mr-6 ' key={_id}>
        <li className='flex  text-Black  text-center p-2 '>

          <ul className='ml-0'>{_id}</ul>
          <ul className='ml-16'>{subject}</ul>
          <ul className='ml-14'>{new Date(createdAt).toLocaleDateString()}</ul>
          <ul className='ml-[80px]'>{description}</ul>
          <ul className='ml-[96px]'>{callBackNumber} </ul>
          <ul className='ml-[110px]'> {status}</ul>
          <ul className='ml-[96px]'>{response}</ul>
         
        </li>
      </div>
    );
  }

export default Tickets