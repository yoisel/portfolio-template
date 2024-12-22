import { render, screen, RenderResult } from '@testing-library/react';
import { SocialIcons } from './SocialIcons';
import { SocialLinks } from '../model/AppData.interface';

describe('SocialIcons', () => {
  const props: SocialLinks = {
    stackoverflow: 'https://stackoverflow.com',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    facebook: 'https://facebook.com'
  };

  it('renders all social icons when links are provided', () => {
    const { getByRole }: RenderResult = render(<SocialIcons {...props} />);
    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveAttribute('href', 'https://stackoverflow.com');
    expect(links[1]).toHaveAttribute('href', 'https://github.com');
    expect(links[2]).toHaveAttribute('href', 'https://linkedin.com');
    expect(links[3]).toHaveAttribute('href', 'https://facebook.com');
  });
});
