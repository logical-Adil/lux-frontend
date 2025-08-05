'use client';

import { balanceCardData, recentTransactionsData, quarterlyExpenditureData } from '@/constants';
import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, PieLabelRenderProps } from 'recharts';

// ✅ Custom label inside pie slices
const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, index }: PieLabelRenderProps) => {
  if (cx === undefined || cy === undefined || midAngle === undefined || innerRadius === undefined || outerRadius === undefined || index === undefined) {
    return null;
  }

  const RADIAN = Math.PI / 180;
  const radius = Number(innerRadius) + (Number(outerRadius) - Number(innerRadius)) / 2;
  const x = Number(cx) + radius * Math.cos(-Number(midAngle) * RADIAN);
  const y = Number(cy) + radius * Math.sin(-Number(midAngle) * RADIAN);

  return (
    <text x={x} y={y} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight="bold">
      {/* Value and USD in one line */}
      <tspan fill="#0E0E0E">${quarterlyExpenditureData[index].amount} USD</tspan>
      {/* Date below */}
      <tspan x={x} dy="1.2em" fill="#464646" fontSize={12}>
        {quarterlyExpenditureData[index].quarter}
      </tspan>
    </text>
  );
};

const OverviewCard = () => {
  // Pie chart data
  const pieChartData = quarterlyExpenditureData.map((quarter) => ({
    name: quarter.quarter,
    value: quarter.value,
    fill: quarter.fill,
    amount: quarter.amount,
  }));

  const COLORS = quarterlyExpenditureData.map((quarter) => quarter.fill);

  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-6 max-w-7xl mx-auto">
        {/* Balance Card Section */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-900">{balanceCardData.title}</h2>
            <span className="text-blue-600 text-sm font-medium cursor-pointer hover:text-blue-700">More &gt;</span>
          </div>

          <div className="bg-white rounded-lg p-5 flex items-center justify-between" style={{ boxShadow: '0px 20px 25px 0px #4C67641A' }}>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{balanceCardData.title}</p>
                <p className="text-xs text-gray-500">{balanceCardData.description}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-900 text-sm">${balanceCardData.amount}</p>
              <p className="text-xs text-gray-500">{balanceCardData.date}</p>
            </div>
          </div>
        </div>

        {/* Recent Transaction Section */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-900">Recent Transaction</h2>
            <span className="text-blue-600 text-sm font-medium cursor-pointer hover:text-blue-700">More &gt;</span>
          </div>

          <div className="bg-white p-4 rounded-lg space-y-3" style={{ boxShadow: '0px 20px 25px 0px #4C67641A' }}>
            {recentTransactionsData.map((transaction, index) => (
              <div key={transaction.id} className={`p-4 flex items-center justify-between ${index !== recentTransactionsData.length - 1 ? 'border-b-2' : ''}`}>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center text-sm">{transaction.icon}</div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{transaction.title}</p>
                    <p className="text-xs text-gray-500">{transaction.subtitle}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900 text-sm">${transaction.amount}</p>
                  <p className="text-xs text-gray-500">{transaction.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quarterly Expenditure Section */}
        <div className=" p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-900">Quarterly Expenditure</h2>
            <span className="text-blue-600 text-sm font-medium cursor-pointer hover:text-blue-700">More &gt;</span>
          </div>

          <div className="bg-white rounded-lg p-6 flex flex-col items-center" style={{ boxShadow: '0px 20px 25px 0px #4C67641A' }}>
            {/* Pie Chart Container */}
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40} // Reduced inner radius for thicker slices
                    outerRadius={120} // Kept same outer radius
                    paddingAngle={1} // Reduced padding between slices
                    dataKey="value"
                    label={renderCustomLabel}
                    labelLine={false}
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} stroke="#fff" strokeWidth={2} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: number, name: string) => [`$${value.toLocaleString()}`, name]}
                    labelFormatter={(label: string) => `${label}`}
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
