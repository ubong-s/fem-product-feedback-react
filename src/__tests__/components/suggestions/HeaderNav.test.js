import { render, screen } from '../../../test-utils';
import HeaderNav from '../../../components/suggestions/HeaderNav';
import { categories } from '../../../data/formSelect';
import user from '@testing-library/user-event';

describe('HeaderNav', () => {
  test('Renders component', () => {
    render(<HeaderNav />);

    const allBtns = screen.getAllByRole('button');
    expect(allBtns).toHaveLength(categories.length);
  });

  test('should render all filter buttons', () => {
    render(<HeaderNav />);

    const allBtnElement = screen.getByRole('button', {
      name: 'All',
    });
    const uiBtnElement = screen.getByRole('button', {
      name: 'UI',
    });
    const uxBtnElement = screen.getByRole('button', {
      name: 'UX',
    });
    const enhancementBtnElement = screen.getByRole('button', {
      name: 'Enhancement',
    });
    const featureBtnElement = screen.getByRole('button', {
      name: 'Feature',
    });
    const bugBtnElement = screen.getByRole('button', {
      name: 'Bug',
    });

    expect(allBtnElement).toBeInTheDocument();
    expect(uiBtnElement).toBeInTheDocument();
    expect(uxBtnElement).toBeInTheDocument();
    expect(enhancementBtnElement).toBeInTheDocument();
    expect(featureBtnElement).toBeInTheDocument();
    expect(bugBtnElement).toBeInTheDocument();
  });

  test('should if category button can be called', async () => {
    render(<HeaderNav />);

    const uiBtnElement = screen.getByRole('button', {
      name: 'UI',
    });
    expect(uiBtnElement).not.toHaveClass('active');

    await user.click(uiBtnElement);

    expect(uiBtnElement).toHaveClass('active');
  });

  test('wrapper should have class "active" if menuOpen is true', async () => {
    render(<HeaderNav menuOpen={true} />);

    const headernavWrapper = screen.getByTestId('header-nav');
    expect(headernavWrapper).toBeInTheDocument();
    expect(headernavWrapper).toHaveClass('active');
  });

  test('Should render roadmap and its respective items', () => {
    render(<HeaderNav />);
    const headingElement = screen.getByRole('heading', {
      name: 'Roadmap',
    });
    const plannedElement = screen.getByText('Planned');
    const inProgressElement = screen.getByText('In-Progress');
    const liveElement = screen.getByText('Live');

    expect(headingElement).toBeInTheDocument();
    expect(plannedElement).toBeInTheDocument();
    expect(inProgressElement).toBeInTheDocument();
    expect(liveElement).toBeInTheDocument();
  });
});
