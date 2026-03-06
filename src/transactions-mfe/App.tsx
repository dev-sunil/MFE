import React, { useState } from 'react';

type Tx = {
  id: string;
  date: string;
  description: string;
  category: string;
  type: 'credit' | 'debit';
  amount: number;
  balance_after: number;
};

const DUMMY: Tx[] = [
  { id: 't1', date: '2026-02-25', description: 'Paycheck', category: 'Income', type: 'credit', amount: 2500, balance_after: 2543.21 },
  { id: 't2', date: '2026-02-26', description: 'Coffee', category: 'Food', type: 'debit', amount: 4.5, balance_after: 2538.71 },
  { id: 't3', date: '2026-02-27', description: 'Electric Bill', category: 'Utilities', type: 'debit', amount: 120.4, balance_after: 2418.31 }
];

export default function TransactionsApp() {
  const [filter, setFilter] = useState<'all'|'credit'|'debit'>('all');
  const rows = DUMMY.filter(r => filter === 'all' ? true : r.type === filter);

  return (
    <div className="tx">
      <div className="controls">
        <label>Filter: </label>
        <select value={filter} onChange={e => setFilter(e.target.value as any)}>
          <option value="all">All</option>
          <option value="credit">Credits</option>
          <option value="debit">Debits</option>
        </select>
      </div>
      <table className="tx-table">
        <thead>
          <tr><th>Date</th><th>Description</th><th>Category</th><th>Amount</th><th>Balance</th></tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.id}>
              <td>{r.date}</td>
              <td>{r.description}</td>
              <td><span className="badge">{r.category}</span></td>
              <td className={r.type === 'credit' ? 'credit' : 'debit'}>{r.type === 'credit' ? '+' : '-'}${Math.abs(r.amount).toFixed(2)}</td>
              <td>{r.balance_after.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
