import { render, screen } from '@testing-library/react';
import { StyledSection } from './StyledSection';

test('renders StyledSection component', () => {
  render(<StyledSection backgroundImage='test-image.jpg' data-testid='styled-section' />);
  const styledSection = screen.getByTestId('styled-section');
  expect(styledSection).toHaveStyle(
    'background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8) ), url(test-image.jpg)'
  );
});
