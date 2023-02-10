import RoadMapCard from '../../../components/roadmap/RoadMapCard';
import { render, screen } from '../../../test-utils';

describe('RoadMapCard', () => {
  const sample = {
    id: 7,
    title: 'More comprehensive reports',
    category: 'feature',
    upvotes: 123,
    upvoted: false,
    status: 'planned',
    description:
      'It would be great to see a more detailed breakdown of solutions.',
    comments: [
      {
        id: 10,
        content:
          'This would be awesome! It would be so helpful to see an overview of my code in a way that makes it easy to spot where things could be improved.',
        user: {
          image: '/assets/user-images/image-victoria.jpg',
          name: 'Victoria Mejia',
          username: 'arlen_the_marlin',
        },
      },
      {
        id: 11,
        content:
          "Yeah, this would be really good. I'd love to see deeper insights into my code!",
        user: {
          image: '/assets/user-images/image-jackson.jpg',
          name: 'Jackson Barker',
          username: 'countryspirit',
        },
      },
    ],
  };
  test('should render correctly', () => {
    render(<RoadMapCard {...sample} />);

    const titleElement = screen.getByRole('heading');
    expect(titleElement).toHaveTextContent(sample.title);

    const descriptionElement = screen.getByTestId('description');
    expect(descriptionElement).toHaveTextContent(sample.description);

    const statusElement = screen.getByTestId('status');
    expect(statusElement).toHaveTextContent(sample.status);

    const upvotesElement = screen.getByTitle('upvotes');
    expect(upvotesElement).toHaveTextContent(sample.upvotes);

    const commentsElement = screen.getByTitle('comments');
    expect(commentsElement).toHaveTextContent(sample.comments.length);

    const categoryElement = screen.getByTitle('category');
    expect(categoryElement).toHaveTextContent(sample.category);
  });
});
