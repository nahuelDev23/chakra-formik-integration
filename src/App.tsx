import { Navigation } from './routes/Navigation';
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './extendChakraTheme';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navigation/>
    </ChakraProvider>
  );
}

export default App;
