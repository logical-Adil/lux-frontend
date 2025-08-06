import React from 'react';
import { transactionsData } from '@/constants';
import { Table } from '@mantine/core';

const TransactionsTable = () => {
  return (
    <div>
      <Table horizontalSpacing="sm" verticalSpacing="sm" withRowBorders>
        <thead>
          <tr>
            <th className="px-4 pb-5 text-left">Date / Time</th>
            <th className="px-4 pb-5 text-left">Balance</th>
            <th className="px-4 pb-5 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {transactionsData.map((card) => (
            <tr key={card.id} className="border-b ">
              <td className="px-4 py-2">{card.timestamp}</td>
              <td className="px-4 py-2">{card.balance}</td>
              <td className="px-4 py-2">{card.action}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TransactionsTable;
