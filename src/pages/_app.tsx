import { generateUniqueTransactionId } from '@/constants';
import { queryClient } from '@/lib/react-query';
import { AppPropsWithLayout } from '@/types';
import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import NextNProgress from 'nextjs-progressbar';
import '@/styles/globals.css';

// function App({ Component, pageProps }: AppPropsWithLayout) {
//   const getLayout = Component.getLayout || (page => page);
//   const { title } = pageProps;

//   return (
//     <QueryClientProvider client={queryClient}>
//       <Hydrate state={pageProps.dehydratedState}>
//         <NextNProgress
//           color={'#00C851'}
//           startPosition={0.3}
//           stopDelayMs={200}
//           height={1}
//           showOnShallow={true}
//           options={{ showSpinner: false }}
//         />
//         {getLayout(<Component {...pageProps} />)}
//         {/* <RootLayout title={title}> */}
//         {/* </RootLayout> */}
//       </Hydrate>
//       <ReactQueryDevtools />
//     </QueryClientProvider>
//   );
// }
function App({ Component, pageProps }: AppPropsWithLayout) {
  return <Component {...pageProps} />;
}

export default App;
