import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const Balance = () => {
    const {transactions} = useContext(GlobalContext);

    const total = transactions.reduce((acc,txn)=>
    acc+txn.amount,0);
  return (
   <div className="my-4 text-center">
      <h4 className="text-gray-600">Your Balance</h4>
      <h1 className="text-3xl font-bold text-black">₹{total}</h1>
    </div>
  )
}

export default Balance