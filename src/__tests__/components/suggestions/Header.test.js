import Header from '../../../components/suggestions/Header';
import { render, screen } from '../../../test-utils';

describe('Header', () => {
  test('renders correctly', () => {
    render(<Header />);
  });

  // test('button is clicked', () => {
  //   render(<Header />);

  //   const menuButton = screen.getByTitle('menu-button');
  //   expect(menuButton).toBeInTheDocument();

  //   const spy = jest.spyOn(Header, 'toggleMenu');
  // });
});
