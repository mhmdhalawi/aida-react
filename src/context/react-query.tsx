import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface Props extends React.PropsWithChildren {}

export const ReactQueryProvider = ({ children }: Props) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        throwOnError(error, query) {
          console.log("Query Error:", { error, query });
          return false;
        },
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
