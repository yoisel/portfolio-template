import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { PortfolioPage } from './PortfolioPage';
import { PortfolioSection } from '../model/AppData.interface';

describe('PortfolioPage', () => {
  const props: PortfolioSection = {
    id: 'section1',
    title: 'Section Title',
    description: 'Section Description',
    backgroundImage: 'background.jpg',
    portfolioPageItems: [
      {
        backgroundColor: '#fff',
        image: 'image.jpg',
        title: 'Item Title',
        subTitle1: 'SubTitle 1',
        subTitle2: 'SubTitle 2',
        contents: ['Content 1', 'Content 2'],
        link: 'https://example.com',
        linkText: 'Example Link'
      }
    ]
  };

  it('renders the section title and description', () => {
    const { getByText }: RenderResult = render(<PortfolioPage {...props} />);
    expect(getByText('Section Title')).toBeInTheDocument();
    expect(getByText('Section Description')).toBeInTheDocument();
  });

  it('renders portfolio page items', () => {
    const { getByText }: RenderResult = render(<PortfolioPage {...props} />);
    expect(getByText('Item Title')).toBeInTheDocument();
    expect(getByText('SubTitle 1')).toBeInTheDocument();
    expect(getByText('SubTitle 2')).toBeInTheDocument();
    expect(getByText('Content 1')).toBeInTheDocument();
    expect(getByText('Content 2')).toBeInTheDocument();
    expect(getByText('Example Link')).toBeInTheDocument();
  });
});
