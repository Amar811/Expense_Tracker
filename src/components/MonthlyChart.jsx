import React, { useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { GlobalContext } from '../context/GlobalContext';

const MonthlyChart = () => {
  const { transactions } = useContext(GlobalContext);

  // Group transactions by month
  const monthlyData = {};

  transactions.forEach(txn => {
    const date = new Date(txn.id); // using id as timestamp
    const month = date.toLocaleString('default', { month: 'short' });

    if (!monthlyData[month]) {
      monthlyData[month] = { month, income: 0, expense: 0 };
    }

    if (txn.amount > 0) {
      monthlyData[month].income += txn.amount;
    } else {
      monthlyData[month].expense += Math.abs(txn.amount);
    }
  });

  const chartData = Object.values(monthlyData);

  return (
    <div className="my-6">
      <h3 className="text-xl font-semibold mb-2 text-center">Monthly Overview</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="income" fill="#4ade80" />
          <Bar dataKey="expense" fill="#f87171" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyChart;
