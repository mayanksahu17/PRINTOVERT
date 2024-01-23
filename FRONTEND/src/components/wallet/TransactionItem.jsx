// TransactionItem.js

import React from 'react';

const TransactionItem = ({ transaction, index }) => {
  return (
    <div key={transaction._id} className="bg-white h-11 w-50 ml-6 mr-6">
      <li className="flex justify-evenly text-black px-10 text-center p-2">
        <ul>{index + 1}</ul>
        <ul>{transaction.amount}</ul>
        <ul>{new Date(transaction.createdAt).toLocaleDateString()}</ul>
        <ul>{transaction.response}</ul>
        <ul>{transaction._id}</ul>
        <ul>{transaction.deliveryCompany}</ul>
      </li>
    </div>
  );
};

export default TransactionItem;
