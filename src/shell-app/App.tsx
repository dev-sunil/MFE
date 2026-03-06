import React, { Suspense } from 'react';
import Navigation from './components/Navigation';

const AccountsApp = React.lazy(() => import('accounts/AccountsApp'));
const TransactionsApp = React.lazy(() => import('transactions/TransactionsApp'));
const ProfileApp = React.lazy(() => import('profile/ProfileApp'));

export default function App() {
  return (
    <div className="shell">
      <Navigation />
      <main>
        <Suspense fallback={<div>Loading Accounts...</div>}>
          <section style={{ padding: 12 }}>
            <h2>Accounts</h2>
            <AccountsApp />
          </section>
        </Suspense>

        <Suspense fallback={<div>Loading Transactions...</div>}>
          <section style={{ padding: 12 }}>
            <h2>Transactions</h2>
            <TransactionsApp />
          </section>
        </Suspense>

        <Suspense fallback={<div>Loading Profile...</div>}>
          <section style={{ padding: 12 }}>
            <h2>Profile</h2>
            <ProfileApp />
          </section>
        </Suspense>
      </main>
    </div>
  );
}
