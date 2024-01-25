import { AppPropsWithLayout } from '@/types';
import { v4 as uuidv4 } from 'uuid'; // UUID 생성을 위한 라이브러리 사용

// function App({ Component, pageProps }: AppPropsWithLayout) {
//   const getLayout = Component.getLayout || (page => page);
//   const { title } = pageProps;

//   // return (
//   //   <QueryClientProvider client={queryClient}>
//   //     <Hydrate state={pageProps.dehydratedState}>
//   //       <NextNProgress
//   //         color={'#00C851'}
//   //         startPosition={0.3}
//   //         stopDelayMs={200}
//   //         height={1}
//   //         showOnShallow={true}
//   //         options={{ showSpinner: false }}
//   //       />
//   //         {getLayout(<Component {...pageProps} />)}
//   //       {/* <RootLayout title={title}> */}
//   //       {/* </RootLayout> */}
//   //     </Hydrate>
//   //     <ReactQueryDevtools />
//   //   </QueryClientProvider>
//   // );
// }
function App({ Component, pageProps }: AppPropsWithLayout) {
  const requestId = uuidv4(); // 요청 ID 생성
  console.log(`Next.js: [${requestId}] Load`);
  return <Component {...pageProps} />;
}

export default App;
