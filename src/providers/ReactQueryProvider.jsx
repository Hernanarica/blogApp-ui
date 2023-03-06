import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export function ReactQueryProvider({ children }) {
  return (
    <QueryClientProvider client={ queryClient }>
      <ReactQueryDevtools />
      { children }
    </QueryClientProvider>
  );
}