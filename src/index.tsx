import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/ui/styles/index.css';
import App from './pages/App';
import '../src/ui/styles/style.scss';
import './ui/components/Form/Form.style.scss';
import './ui/components/Button/Button.style.scss';
import './ui/components/List/List.style.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
