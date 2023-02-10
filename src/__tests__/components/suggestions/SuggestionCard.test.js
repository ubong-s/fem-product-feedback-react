import { screen, render } from '../../../test-utils';
import SuggestionCard from '../../../components/suggestions/SuggestionCard';
import user from '@testing-library/user-event';

describe('SuggestionCard', () => {
  const sampleSuggestion = {
    id: 1,
    title: 'Add tags for solutions',
    category: 'enhancement',
    upvotes: 112,
    upvoted: false,
    status: 'suggestion',
    description: 'Easier to search for solutions based on a specific stack.',
    comments: [
      {
        id: 1,
        content:
          'Awesome idea! Trying to find framework-specific projects within the hubs can be tedious',
        user: {
          image: '/assets/user-images/image-suzanne.jpg',
          name: 'Suzanne Chang',
          username: 'upbeat1811',
        },
      },
      {
        id: 2,
        content:
          'Please use fun, color-coded labels to easily identify them at a glance',
        user: {
          image: '/assets/user-images/image-thomas.jpg',
          name: 'Thomas Hood',
          username: 'brawnybrave',
        },
      },
    ],
  };
  test('should render correctly', () => {
    render(<SuggestionCard {...sampleSuggestion} />);

    const headingElement = screen.getByRole('heading', {
      name: sampleSuggestion.title,
    });
    const descriptionElement = screen.getByText(sampleSuggestion.description);
    const upvoteMobileElement = screen.getByTitle('upvote-mobile');
    const upvoteDesktopElement = screen.getByTitle('upvote-desk');
    const categoryElement = screen.getByTitle('category');
    const commentsElement = screen.getByTitle(
      `comments-count-${sampleSuggestion.id}`
    );

    expect(headingElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(upvoteMobileElement).toHaveTextContent(sampleSuggestion.upvotes);
    expect(upvoteDesktopElement).toHaveTextContent(sampleSuggestion.upvotes);
    expect(categoryElement).toHaveTextContent(sampleSuggestion.category);
    expect(commentsElement).toHaveTextContent(sampleSuggestion.comments.length);
  });
});
