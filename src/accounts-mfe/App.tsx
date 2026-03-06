import React from 'react';

type Account = {
  id: string;
  account_type: string;
  account_number: string;
  balance: number;
  currency: string;
};

const DUMMY: Account[] = [
  { id: '1', account_type: 'Checking', account_number: '•••• 1234', balance: 2543.21, currency: 'USD' },
  { id: '2', account_type: 'Savings', account_number: '•••• 5678', balance: 10250.5, currency: 'USD' },
  { id: '3', account_type: 'Credit', account_number: '•••• 9012', balance: -320.75, currency: 'USD' }
];

function formatCurrency(amount: number, currency = 'USD') {
  return amount.toLocaleString(undefined, { style: 'currency', currency });
}

export default function AccountsApp() {
  const total = DUMMY.reduce((s, a) => s + a.balance, 0);
  return (
    <div className="accounts">
      <div className="cards">
        {DUMMY.map((a) => (
          <div key={a.id} className="card">
            <div className="type">{a.account_type}</div>
            <div className="number">{a.account_number}</div>
            <div className="balance">{formatCurrency(a.balance, a.currency)}</div>
          </div>
        ))}
      </div>
      <div className="total">Total: {formatCurrency(total)}</div>
    </div>
  );
}
