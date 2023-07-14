import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { Global } from 'components/Global.styled';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
		<Global />
	</React.StrictMode>
);
