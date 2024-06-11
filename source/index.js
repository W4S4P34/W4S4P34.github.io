// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Self-defined Components
import App from './App';

// CSS
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
