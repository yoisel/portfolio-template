import React from 'react';
import { render, screen } from '@testing-library/react';
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
    render(<PortfolioPage {...props} />);
    expect(screen.getByText('Section Title')).toBeInTheDocument();
    expect(screen.getByText('Section Description')).toBeInTheDocument();
  });

  it('renders portfolio page items', () => {
    render(<PortfolioPage {...props} />);
    expect(screen.getByText('Item Title')).toBeInTheDocument();
    expect(screen.getByText('SubTitle 1')).toBeInTheDocument();
    expect(screen.getByText('SubTitle 2')).toBeInTheDocument();
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.getByText('Content 2')).toBeInTheDocument();
    expect(screen.getByText('Example Link')).toBeInTheDocument();
  });
});
