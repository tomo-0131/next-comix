import { ChakraProvider } from '@chakra-ui/react';
import TheFooter from '../components/TheFooter';
import TheHeader from '../components/TheHeader';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <TheHeader />
      <Component {...pageProps} />
      <TheFooter />
    </ChakraProvider>
  );
}

export default MyApp;
