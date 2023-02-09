import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import HeaderIntro from '../../../components/suggestions/HeaderIntro';

test('renders correcty', () => {
  render(<HeaderIntro />);
});

test('renders Header content', () => {
  render(<HeaderIntro />);

  const heading = screen.getByRole('heading', 'Frontend Mentor');
  const paragraghtext = screen.getByText('Feedback board');

  expect(heading).toBeInTheDocument();
  expect(paragraghtext).toBeInTheDocument();
});

test('toggle menu', () => {
  const toggleMenu = jest.fn();

  render(<HeaderIntro menuOpen={false} toggleMenu={toggleMenu} />);

  const button = screen.getByRole('button');

  // click button
  fireEvent.click(button);

  expect(toggleMenu).toBeCalled();
});
