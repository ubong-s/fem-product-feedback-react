import RoadmapTabs from '../../../components/roadmap/RoadmapTabs';
import { render, screen } from '../../../test-utils';

describe('RoadmapTabs', () => {
  test('should render correctly', () => {
    render(<RoadmapTabs />);

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(3);
  });
  test('should check if individual buttons are present', () => {
    render(<RoadmapTabs />);

    const plannedButton = screen.getByRole('button', {
      name: /planned/i,
    });
    expect(plannedButton).toBeInTheDocument();

    const liveButton = screen.getByRole('button', {
      name: /live/i,
    });
    expect(liveButton).toBeInTheDocument();

    const inProgressButton = screen.getByRole('button', {
      name: /in-progress/i,
    });
    expect(inProgressButton).toBeInTheDocument();
  });
});
