import React from 'react';
import { render, screen } from '@testing-library/react';
import { AppContents } from './AppContents';

describe('AppContents', () => {
  const props = {
    sections: [
      {
        id: 'section1',
        title: 'Section 1',
        description: 'Description 1',
        backgroundImage: 'background1.jpg',
        portfolioPageItems: [
          {
            backgroundColor: '#fff',
            image: 'image1.jpg',
            title: 'Item 1',
            subTitle1: 'SubTitle 1',
            subTitle2: 'SubTitle 2',
            contents: ['Content 1', 'Content 2'],
            link: 'https://example.com',
            linkText: 'Example Link'
          }
        ]
      }
    ],
    title: ''
  };

  it('renders sections and portfolio pages', () => {
    render(<AppContents {...props} />);
    expect(screen.getByText('Section 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('SubTitle 1')).toBeInTheDocument();
    expect(screen.getByText('SubTitle 2')).toBeInTheDocument();
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.getByText('Content 2')).toBeInTheDocument();
    expect(screen.getByText('Example Link')).toBeInTheDocument();
  });
});
