import { render, screen, fireEvent, RenderResult } from '@testing-library/react';
import { AppHeader } from './AppHeader';
import { AppHeaderConfig } from '../model/AppData.interface';

describe('AppHeader', () => {
  const props: AppHeaderConfig = {
    avatarImage: 'avatar.jpg',
    title: 'App Title',
    social: {
      stackoverflow: 'https://stackoverflow.com',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      facebook: 'https://facebook.com'
    },
    sections: [
      { id: 'section1', title: 'Section 1' },
      { id: 'section2', title: 'Section 2' }
    ]
  };

  it('renders the app title and avatar', () => {
    const { getByText, getByAltText }: RenderResult = render(<AppHeader {...props} />);
    expect(getByText('App Title')).toBeInTheDocument();
    expect(getByAltText('Picture of Fulano de Tal')).toBeInTheDocument();
  });

  it('renders social icons', () => {
    render(<AppHeader {...props} />);
    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveAttribute('href', 'https://stackoverflow.com');
    expect(links[1]).toHaveAttribute('href', 'https://github.com');
    expect(links[2]).toHaveAttribute('href', 'https://linkedin.com');
    expect(links[3]).toHaveAttribute('href', 'https://facebook.com');
  });

  it('renders section buttons and handles click', () => {
    const { getByText }: RenderResult = render(<AppHeader {...props} />);
    const sectionButton: HTMLElement = getByText('Section 1');
    expect(sectionButton).toBeInTheDocument();
    fireEvent.click(sectionButton);
    // Add assertions for scroll behavior if necessary
  });
});
