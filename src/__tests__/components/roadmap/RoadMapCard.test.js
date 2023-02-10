import RoadmapCard from '../../../components/roadmap/RoadmapCard';
import { colors } from '../../../styles';
import { render, screen } from '../../../test-utils';

describe('RoadmapCard', () => {
  const plannedSample = {
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
  const liveSample = {
    id: 7,
    title: 'More comprehensive reports',
    category: 'feature',
    upvotes: 123,
    upvoted: false,
    status: 'live',
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
  const inProgressSample = {
    id: 7,
    title: 'More comprehensive reports',
    category: 'feature',
    upvotes: 123,
    upvoted: false,
    status: 'in-progress',
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
    render(<RoadmapCard {...plannedSample} />);

    const titleElement = screen.getByRole('heading');
    expect(titleElement).toHaveTextContent(plannedSample.title);

    const descriptionElement = screen.getByTestId('description');
    expect(descriptionElement).toHaveTextContent(plannedSample.description);

    const statusElement = screen.getByTestId('status');
    expect(statusElement).toHaveTextContent(plannedSample.status);

    const upvotesElement = screen.getByTitle('upvotes');
    expect(upvotesElement).toHaveTextContent(plannedSample.upvotes);

    const commentsElement = screen.getByTitle('comments');
    expect(commentsElement).toHaveTextContent(plannedSample.comments.length);

    const categoryElement = screen.getByTitle('category');
    expect(categoryElement).toHaveTextContent(plannedSample.category);
  });

  test('should render correct color for planned card', () => {
    render(<RoadmapCard {...plannedSample} />);

    const cardElement = screen.getByRole('article');
    expect(cardElement).toHaveStyle({
      'border-top': `8px solid ${colors.orange}`,
    });
  });

  test('should render correct color for live card', () => {
    render(<RoadmapCard {...liveSample} />);

    const cardElement = screen.getByRole('article');
    expect(cardElement).toHaveStyle({
      'border-top': `8px solid ${colors.blue}`,
    });
  });

  test('should render correct color for in-progress card', () => {
    render(<RoadmapCard {...inProgressSample} />);

    const cardElement = screen.getByRole('article');
    expect(cardElement).toHaveStyle({
      'border-top': `8px solid ${colors.purple}`,
    });
  });
});
