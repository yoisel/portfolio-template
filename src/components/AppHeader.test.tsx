import { render, screen, fireEvent } from '@testing-library/react';
import { AppHeader } from './AppHeader';
import { AppHeaderConfig } from '../model/AppData.interface';

describe('AppHeader', () => {
  const props: AppHeaderConfig = {
    avatarImage: 'Avatar',
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
    render(<AppHeader {...props} />);
    expect(screen.getByText('App Title')).toBeInTheDocument();
    expect(screen.getByAltText('Picture of Fulano de Tal')).toBeInTheDocument();
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
    render(<AppHeader {...props} />);
    const sectionButton: HTMLElement = screen.getByText('Section 1');
    expect(sectionButton).toBeInTheDocument();
    fireEvent.click(sectionButton);
    // Add assertions for scroll behavior if necessary
  });
});
