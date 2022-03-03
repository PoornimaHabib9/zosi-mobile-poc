import React from 'react';
import PropTypes from 'prop-types';
import { QueryClient, QueryClientProvider, setLogger } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      suspense: true,
    },
    mutations: {
      useErrorBoundary: false,
    },
  },
});

setLogger({
  error: () => {},
});

const AppReactQueryProvider = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);

AppReactQueryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppReactQueryProvider;
