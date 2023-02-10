import RoadmapHeader from '../../../components/roadmap/RoadmapHeader';
import { render, screen } from '../../../test-utils';

describe('RoadmapHeader', () => {
  test('should render correctly', () => {
    render(<RoadmapHeader />);

    const linkElement = screen.getByRole('link', {
      name: 'Go Back',
    });
    expect(linkElement).toBeInTheDocument();

    const headingElement = screen.getByRole('heading', {
      name: 'Roadmap',
    });
    expect(headingElement).toBeInTheDocument();

    const buttonElement = screen.getByRole('button', {
      name: '+ add Feedback',
    });
    expect(buttonElement).toBeInTheDocument();
  });
});
