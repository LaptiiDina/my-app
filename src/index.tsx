import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import { store } from './configStore/store';
import './index.css';
import reportWebVitals from './reportWebVitals';
const Global = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:console;
 
}
#root{
  margin:0 auto
}

`
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Global />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
