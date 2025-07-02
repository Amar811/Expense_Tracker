import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  return (
    <>
      <div className="my-4">
        <h3 className="text-xl font-semibold mb-2">Transaction History</h3>
        <ul className="space-y-2">
          {transactions.length === 0 && (
            <li className="text-gray-500">No transaction yet.</li>
          )}
          {transactions.map((txn) => (
            <li
              key={txn.id}
              className={`relative px-3 py-2 border-l-4 rounded shadow bg-white ${
                txn.amount < 0 ? "border-red-500" : "border-green-500"
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{txn.text}</p>
                  {txn.text && (
                    <p className="text-sm text-gray-500">{txn.text}</p>
                  )}
                </div>
                <div>
                  <span>
                    {txn.amount < 0 ? "-" : "+"}₹{Math.abs(txn.amount)}
                  </span>
                </div>
              </div>
              <button
                onClick={() => deleteTransaction(txn.id)}
                className="absolute top-2 right-2 text-red-500 text-xl"
              >
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TransactionList;
