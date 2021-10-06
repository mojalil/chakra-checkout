import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

const App = ({ Component, pageProps } : AppProps ) => {
    return (<ChakraProvider>
        <Component {...pageProps}></Component>
    </ChakraProvider>)
}

export default App;