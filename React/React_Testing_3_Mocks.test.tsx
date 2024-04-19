import { render, screen } from '@testing-library/react';
import Blog from './Blog';

describe('Blog', () => {
  it('should correctly display the fetch data', async () => {
    const mockJsonPromise = (data: object) => Promise.resolve(data);
    const mockFetchPromise = (response: object) =>
      Promise.resolve({ json: () => mockJsonPromise(response) });

    jest.spyOn(global, 'fetch').mockImplementation((route) => {
      if (route.includes('todos')) {
        return mockFetchPromise({
          userId: 1,
          id: 1,
          title: 'delectus aut autem',
          completed: false,
        });
      }
      if (route.includes('posts')) {
        return mockFetchPromise({
          // Mock data for posts
        });
      }
      if (route.includes('users')) {
        return mockFetchPromise({
          id: 1,
          name: 'Leanne',
          // Other user data
        });
      }
    });

    render(<Blog />);

    const userName = await screen.findByText('Leanne');

    expect(userName).toBeInTheDocument();
  });
});
