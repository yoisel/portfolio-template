import { render, screen } from '@testing-library/react';
import { SideImage } from './SideImage';

test('renders SideImage component', () => {
  render(<SideImage backgroundImage='test-image.jpg' backgroundColor='red' data-testid='side-image' />);
  const sideImage = screen.getByTestId('side-image');
  expect(sideImage).toHaveStyle(`background-image: url(test-image.jpg)`);
  expect(sideImage).toHaveStyle(`background-color: red`);
});
