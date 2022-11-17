import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './components/Router';
import GlobalStyle from './styles/globalStyles';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </>
  );
}

export default App;
