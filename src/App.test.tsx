import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders user name', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/김도현/i);
  expect(await linkElement).toBeInTheDocument();
});
