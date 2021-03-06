import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Theme } from './styles';
import { GlobalStyle } from './styles/globalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <>
      <Provider store={store}>
         <Theme>
            <GlobalStyle />
            <Router>
               <App />
            </Router>
         </Theme>
      </Provider>
   </>
);
