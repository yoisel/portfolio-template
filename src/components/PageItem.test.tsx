import { render, screen } from '@testing-library/react';
import { PageItem } from './PageItem';
import { PortfolioPageItem } from '../model/AppData.interface';

const mockData: PortfolioPageItem = {
  title: 'Item Title',
  subTitle1: 'Item Subtitle 1',
  subTitle2: 'Item Subtitle 2',
  contents: 'Item Contents',
  image: 'item-image.jpg',
  link: 'https://example.com',
  linkText: 'Example Link'
};

test('renders PageItem component', () => {
  render(<PageItem {...mockData} />);
  expect(screen.getByText('Item Title')).toBeInTheDocument();
  expect(screen.getByText('Item Subtitle 1')).toBeInTheDocument();
  expect(screen.getByText('Item Subtitle 2')).toBeInTheDocument();
  expect(screen.getByText('Example Link')).toBeInTheDocument();
});
