import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
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

test('toggle menu', async () => {
  const toggleMenu = jest.fn();

  render(<HeaderIntro menuOpen={false} toggleMenu={toggleMenu} />);

  const button = screen.getByRole('button');

  // click button
  await user.click(button);
  expect(toggleMenu).toBeCalled();
});

test('should render the correct hamburger icons when menuOpen is false', () => {
  render(<HeaderIntro menuOpen={false} />);

  const barsIcon = screen.getByTitle('bars');
  expect(barsIcon).toBeInTheDocument();
});

test('should render the correct hamburger icons when menuOpen is true', () => {
  render(<HeaderIntro menuOpen={true} />);

  const closeIcon = screen.getByTitle('close');
  expect(closeIcon).toBeInTheDocument();
});
