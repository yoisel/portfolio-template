import { render } from '@testing-library/react';
import { StyledSection } from './StyledSection';

test('renders StyledSection component', () => {
  const { container } = render(<StyledSection backgroundImage="test-image.jpg" />);
  expect(container.firstChild).toHaveStyle('background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8) ), url(test-image.jpg)');
});
