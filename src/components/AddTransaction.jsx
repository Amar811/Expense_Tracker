import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext';

const AddTransaction = () => {
    const [text,setText] = useState('');
    const [amount,setAmount] = useState('');
    const {addTransaction} = useContext(GlobalContext);

    const onSubmit =(e)=>{
        e.preventDefault();
        if(text.trim()===''||amount === '') return;

        const newTransaction={
            id:Date.now(),
            text,
            amount:+amount,
        };
        addTransaction(newTransaction);
        setText('');
        setAmount('');
    };
  return (
<>
<div className='my-4'>
    <h3 className='text-xl font-semibold mb-2'>Add new transaction</h3>
    <form onSubmit={onSubmit}>
        <div className='mb-2'>
            <input
            type="text"
            value={text}
            onChange={(e)=>setText(e.target.value)}
            placeholder='Enter description'
            className='border px-3 py-2 w-full rounded'
            />
        </div>
        <div className='mb-2'>
            <input
            type="number"
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}
            placeholder='Enter amount (+income,-expense)'
            className='border px-3 py-2 w-full rounded '
            />
        </div>
        <button type="submit" className='bg-blue-600 text-white px-4 py-2 rounded'>
          Add Transaction
        </button>
    </form>
</div>
</>
  )
}

export default AddTransaction