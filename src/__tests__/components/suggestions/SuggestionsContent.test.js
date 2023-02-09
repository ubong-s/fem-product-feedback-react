import SuggestionsContent from '../../../components/suggestions/SuggestionsContent';
import { render, screen } from '../../../test-utils';
import user from '@testing-library/user-event';
import { sortBtns } from '../../../data/formSelect';

describe('SuggestionsContent', () => {
  test('renders correctly', () => {
    render(<SuggestionsContent />);
  });

  test('sort button has classname of active when clicked', async () => {
    render(<SuggestionsContent />);

    const sortButton = screen.getByTitle('sort-button');
    expect(sortButton).toBeInTheDocument();
    expect(sortButton).not.toHaveClass('active');

    await user.click(sortButton);

    expect(sortButton).toHaveClass('active');
  });

  test('sort dropdown toggles when sort btn is clicked', async () => {
    render(<SuggestionsContent />);

    const sortButton = screen.getByTitle('sort-button');
    const sortDropdown = screen.getByTitle('sort-dropdown');

    expect(sortButton).toBeInTheDocument();
    expect(sortDropdown).toBeInTheDocument();
    expect(sortDropdown).toHaveClass('options');
    expect(sortDropdown).not.toHaveClass('active');

    await user.click(sortButton);
    expect(sortDropdown).toHaveClass('active');

    await user.click(sortButton);
    expect(sortDropdown).not.toHaveClass('active');
  });

  test('sort dropdown returns correct value on click', async () => {
    render(<SuggestionsContent />);

    const sortButton = screen.getByTitle('sort-button');
    const sortDropdown = screen.getByTitle('sort-dropdown');
    const sortValue = screen.getByTestId('sort-value');

    expect(sortButton).toBeInTheDocument();
    expect(sortDropdown).toBeInTheDocument();
    expect(sortDropdown).toHaveClass('options');
    expect(sortDropdown).not.toHaveClass('active');

    await user.click(sortButton);
    expect(sortDropdown).toHaveClass('active');

    let sortSelected = screen.getByTitle(sortBtns[3].type);
    await user.click(sortSelected);

    expect(sortDropdown).not.toHaveClass('active');
    expect(sortValue).toHaveTextContent(sortBtns[3].type);

    await user.click(sortButton);
    expect(sortDropdown).toHaveClass('active');

    sortSelected = screen.getByTitle(sortBtns[1].type);
    await user.click(sortSelected);

    expect(sortDropdown).not.toHaveClass('active');
    expect(sortValue).toHaveTextContent(sortBtns[1].type);
  });
});
