import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

// Only mount if running as a standalone app (has a root element in HTML)
const rootElement = document.getElementById('root');
if (rootElement && rootElement.children.length === 0) {
  const root = createRoot(rootElement);
  root.render(<App />);
}

export default App;

