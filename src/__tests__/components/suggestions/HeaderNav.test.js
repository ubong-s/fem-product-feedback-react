import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../../test-utils';
import HeaderNav from '../../../components/suggestions/HeaderNav';

test('Renders component', () => {
  render(<HeaderNav />);
});
