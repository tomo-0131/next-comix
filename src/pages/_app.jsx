import { ChakraProvider } from '@chakra-ui/react';
import TheFooter from '../components/TheFooter';
import TheHeader from '../components/TheHeader';
import { AuthProvider } from '../context/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ChakraProvider>
        <TheHeader />
        <Component {...pageProps} />
        <TheFooter />
      </ChakraProvider>
    </AuthProvider>
  );
}

export default MyApp;
