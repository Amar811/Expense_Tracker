import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const IncomeExpense = () => {
    const {transactions} = useContext(GlobalContext);

    const income = transactions
    .filter(txn=>txn.amount > 0)
    .reduce((acc,txn)=>acc + txn.amount,0);

    const expense = transactions
    .filter(txn=>txn.amount < 0)
    .reduce((acc,txn)=>acc+txn.amount,0);
  return (
   <>
   <div className='flex justify-between bg-gray-100 p-4 rounded my-4 shadow'>
    <div className="text-center">
        <h4 className="text-green-600 font-semibold">Income</h4>
        <p className="text-green-700 font-bold">₹{income}</p>
      </div>
      <div className="text-center">
        <h4 className="text-red-600 font-semibold">Expense</h4>
        <p className="text-red-700 font-bold">₹{Math.abs(expense)}</p>
      </div>
   </div>
   </>
  )
}

export default IncomeExpense