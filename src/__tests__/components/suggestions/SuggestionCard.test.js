import { screen, render } from '../../../test-utils';
import SuggestionCard from '../../../components/suggestions/SuggestionCard';
import user from '@testing-library/user-event';

describe('SuggestionCard', () => {
  const sampleComment = {
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
    render(<SuggestionCard {...sampleComment} />);

    const headingElement = screen.getByRole('heading', {
      name: sampleComment.title,
    });
    const descriptionElement = screen.getByText(sampleComment.description);
    const upvoteMobileElement = screen.getByTitle('upvote-mobile');
    const upvoteDesktopElement = screen.getByTitle('upvote-desk');
    const categoryElement = screen.getByTitle('category');
    const commentsElement = screen.getByTitle(
      `comments-count-${sampleComment.id}`
    );

    expect(headingElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(upvoteMobileElement).toHaveTextContent(sampleComment.upvotes);
    expect(upvoteDesktopElement).toHaveTextContent(sampleComment.upvotes);
    expect(categoryElement).toHaveTextContent(sampleComment.category);
    expect(commentsElement).toHaveTextContent(sampleComment.comments.length);
  });
});
