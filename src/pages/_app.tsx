import { AppPropsWithLayout } from '@/types';

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || (page => page);
  const { title } = pageProps;

  return <Component {...pageProps} />;
  // return (
  //   <QueryClientProvider client={queryClient}>
  //     <Hydrate state={pageProps.dehydratedState}>
  //       <NextNProgress
  //         color={'#00C851'}
  //         startPosition={0.3}
  //         stopDelayMs={200}
  //         height={1}
  //         showOnShallow={true}
  //         options={{ showSpinner: false }}
  //       />
  //         {getLayout(<Component {...pageProps} />)}
  //       {/* <RootLayout title={title}> */}
  //       {/* </RootLayout> */}
  //     </Hydrate>
  //     <ReactQueryDevtools />
  //   </QueryClientProvider>
  // );
}

export default App;
