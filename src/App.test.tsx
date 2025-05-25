import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);

  await waitFor(() => {
    const headingElements = screen.getAllByRole('heading');
    expect(headingElements[0]).toBeInTheDocument();
  });
});
