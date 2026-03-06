import React from 'react';
import './navigation.css';

export default function Navigation() {
  return (
    <nav className="nav">
      <div className="brand">Banking Dashboard</div>
      <div className="links">Shell · Accounts · Transactions · Profile</div>
    </nav>
  );
}
