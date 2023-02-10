import RoadmapTabs from '../../../components/roadmap/RoadmapTabs';
import { colors } from '../../../styles';
import { render, screen } from '../../../test-utils';
import user from '@testing-library/user-event';

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
  test('should check if active have the right styles', async () => {
    render(<RoadmapTabs />);

    const plannedButton = screen.getByRole('button', {
      name: /planned/i,
    });
    const liveButton = screen.getByRole('button', {
      name: /live/i,
    });
    const inProgressButton = screen.getByRole('button', {
      name: /in-progress/i,
    });

    expect(plannedButton).toHaveStyle({
      'border-bottom': `4px solid ${colors.orange}`,
    });
    expect(plannedButton).toHaveClass('active');
    expect(liveButton).not.toHaveClass('active');
    expect(inProgressButton).not.toHaveClass('active');

    await user.click(liveButton);
    expect(liveButton).toHaveStyle({
      'border-bottom': `4px solid ${colors.blue}`,
    });
    expect(liveButton).toHaveClass('active');
    expect(plannedButton).not.toHaveClass('active');
    expect(inProgressButton).not.toHaveClass('active');

    await user.click(inProgressButton);
    expect(inProgressButton).toHaveStyle({
      'border-bottom': `4px solid ${colors.purple}`,
    });
    expect(inProgressButton).toHaveClass('active');
    expect(liveButton).not.toHaveClass('active');
    expect(plannedButton).not.toHaveClass('active');
  });
});
