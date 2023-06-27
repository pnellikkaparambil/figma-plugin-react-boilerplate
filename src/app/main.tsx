import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('app-plugin');
  const root = createRoot(container);
  root.render(<App />);
});
