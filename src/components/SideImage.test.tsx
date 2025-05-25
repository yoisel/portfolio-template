import { render, screen } from '@testing-library/react';
import { SideImage } from './SideImage';

test('renders SideImage component', () => {
  const { container } = render(<SideImage backgroundImage="test-image.jpg" backgroundColor="red" />);
  expect(container.firstChild).toHaveStyle(`background-image: url(test-image.jpg)`);  
  expect(container.firstChild).toHaveStyle(`background-color: red`);
});
