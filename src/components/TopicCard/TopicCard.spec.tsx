import { render, screen } from '@testing-library/react';

import TopicCard from '.';
import { postMock } from './mock';

describe('TopicCard component', () => {
  it('should be able to render correctly', () => {
    render(<TopicCard post={postMock} />);

    expect(screen.getByText('Example of post')).toBeInTheDocument();
    expect(screen.getByText('00/00/0000')).toBeInTheDocument();
    expect(screen.getByText('This is just a test')).toBeInTheDocument();
    expect(screen.getByText('posttest')).toBeInTheDocument();
  });
});
