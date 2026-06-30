import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/main.scss';
import AppRouter from './routers/AppRouter';

const root = createRoot(document.getElementById('root'));
root.render(<AppRouter />);
