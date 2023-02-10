import Seo from '../../../components/shared/Seo';
import { render, screen } from '@testing-library/react';

describe('Seo', () => {
  test('should render correctly', () => {
    render(<Seo />);
  });
});
