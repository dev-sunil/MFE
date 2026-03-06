import React, { useState } from 'react';

export default function ProfileApp() {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState('Jane Doe');
  const [email, setEmail] = useState('jane@example.com');

  const initials = name.split(' ').map(n => n[0]).join('').slice(0,2).toUpperCase();

  return (
    <div className="profile">
      <div className="header">
        <div className="avatar">{initials}</div>
        <div>
          <div className="name">{name}</div>
          <div className="member">Member since Feb 2022</div>
        </div>
      </div>

      {editing ? (
        <div className="form">
          <label>Name</label>
          <input value={name} onChange={e => setName(e.target.value)} />
          <label>Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} />
          <div style={{ marginTop: 8 }}>
            <button onClick={() => setEditing(false)}>Save</button>
          </div>
        </div>
      ) : (
        <div className="details">
          <div><strong>Email:</strong> {email}</div>
          <button onClick={() => setEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}
