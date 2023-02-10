import RoadmapContent from '../../../components/roadmap/RoadmapContent';
import { render, screen } from '../../../test-utils';

describe('RoadmapContent', () => {
  test('should render correctly', () => {
    render(<RoadmapContent />);
    const contentColumns = screen.getAllByTestId('content-column');

    expect(contentColumns).toHaveLength(3);
  });
});
