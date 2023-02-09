import { screen, render } from '@testing-library/react';
import NavBtn from '../../../components/suggestions/NavBtn';

describe('NavBtn', () => {
  test('should render correctly', () => {
    render(<NavBtn category={{ text: 'Bug', type: 'bug' }} />);

    const buttonElement = screen.getByRole('button', {
      name: 'Bug',
    });
    expect(buttonElement).toBeInTheDocument();
  });
});
