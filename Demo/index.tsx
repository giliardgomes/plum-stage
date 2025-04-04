
import React from 'react';
import ReactDOM from 'react-dom/client';
import { LandingPage } from './LandingPage';
import '@mantine/core/styles.css';
import '../lib/components/Button/Button.module.css';
import '../lib/components/Switch/Switch.module.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>,
);

