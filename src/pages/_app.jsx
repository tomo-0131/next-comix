import { ChakraProvider } from '@chakra-ui/react';
import TheHeader from '../components/TheHeader';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <TheHeader />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
