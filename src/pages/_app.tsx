import { QueryClientProvider, Hydrate } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from '@/lib/react-query';
import { AppPropsWithLayout } from '@/types';
import { RootLayout } from '@/layouts';
import NextNProgress from 'nextjs-progressbar';
import '@/styles/globals.css';

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || (page => page);
  const { title } = pageProps;

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <NextNProgress
          color={'#00C851'}
          startPosition={0.3}
          stopDelayMs={200}
          height={5}
          showOnShallow={true}
          options={{ showSpinner: false }}
        />
        <RootLayout title={title}>
          {getLayout(<Component {...pageProps} />)}
        </RootLayout>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
