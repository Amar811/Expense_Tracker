import React from 'react'
import { GlobalProvider } from './context/GlobalContext'
import AddTransaction from './components/AddTransaction'

const App = () => {
  return (
   <GlobalProvider>
      <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">Expense Tracker</h1>
        <AddTransaction />
      </div>
    </GlobalProvider>
  )
}

export default App