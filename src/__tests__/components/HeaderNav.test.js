import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import HeaderNav from '../../components/suggestions/HeaderNav';
import { store } from '../../redux/store';
import { BrowserRouter as Router } from 'react-router-dom';

test('Renders component', () => {
  render(
    <Provider store={store}>
      <Router>
        <HeaderNav />
      </Router>
    </Provider>
  );
});
