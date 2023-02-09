import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../redux/store';
import { Theme } from '../styles';
import { GlobalStyle } from '../styles/globalStyle';

export const AllProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <Theme>
        <GlobalStyle />
        <Router>{children}</Router>
      </Theme>
    </Provider>
  );
};
