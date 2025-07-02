import React from 'react'
import { GlobalProvider } from './context/GlobalContext'
import AddTransaction from './components/AddTransaction'
import Balance from './components/Balance'
import TransactionList from './components/TransactionList'
import IncomeExpense from './components/IncomeExpense'
import MonthlyChart from './components/MonthlyChart'

const App = () => {
  return (
   <GlobalProvider>
      <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">Expense Tracker</h1>
        <AddTransaction />
        <Balance/>
        <TransactionList/>
        <IncomeExpense/>
        <MonthlyChart/>
      </div>
    </GlobalProvider>
  )
}

export default App