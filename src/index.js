import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CategoryProvider, CountriesProvider } from './Helpers/context.js'

ReactDOM.render(
  <React.StrictMode>
    <CategoryProvider>
      <CountriesProvider>
        <Router>
          <App />
        </Router>
      </CountriesProvider>
    </CategoryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
