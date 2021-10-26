import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './component/App';
import reportWebVitals from './reportWebVitals';
import 'kth-style/dist/css/kth-bootstrap.css';
ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>,
document.getElementById('root')
);



reportWebVitals();
