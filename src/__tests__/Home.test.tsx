import Home from '@/pages/index';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { ReactNode } from 'react';

const queryClient = new QueryClient();
const Wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('Home', () => {
  test('heading renders', () => {
    render(
      <Wrapper>
        <Home />
      </Wrapper>
    );

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();

    expect(screen.debug())
  });
});
