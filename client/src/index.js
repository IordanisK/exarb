import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { StateContextProvider } from './components/googleSearch/contexts/StateContextProvider';
import './index.css';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
		<BrowserRouter>
			<StateContextProvider>
				<App />
			</StateContextProvider>
		</BrowserRouter>
	</React.StrictMode>, 
    document.getElementById('root')
);