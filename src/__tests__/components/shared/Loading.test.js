import Loading from '../../../components/shared/Loading';
import { render, screen } from '@testing-library/react';

describe('Loading', () => {
  test('should render correctly', () => {
    render(<Loading />);
    const imageElement = screen.getByRole('img');
    expect(imageElement).toBeInTheDocument();
  });
});
