import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { darkTheme } from "./src/themes/theme";
import Navigation from "./src/navigation";

import { QueryClient, QueryClientProvider, setLogger } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      suspense: true,
      retry: false,
    },
    mutations: {
      useErrorBoundary: false,
      suspense: false,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={darkTheme}>
        <Navigation />
      </PaperProvider>
    </QueryClientProvider>
  );
}
