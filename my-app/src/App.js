import React, { useRef } from 'react';
import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import { WithBackgroundImage } from './components/Landing/WithBackgroundImage';
import StatsGridWithImage from './components/Middle/StatsGridWithImage';
import SmallWithSocial from './components/Footer/SmallWithSocial';
import { SimpleMap } from './components/SimpleMap/SimpleMap';
import { Heading, Text } from '@chakra-ui/layout';
import CardWithIllustration from './components/Formulario/CardWithIllustration';

function App() {
  const refDonde = useRef(null);
  const refVoy = useRef(null);

  const handleClickDonde = () => refDonde.current.scrollIntoView();
  const handleClickVoy = () => refVoy.current.scrollIntoView();

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <WithBackgroundImage
            handleDondeAction={handleClickDonde}
            handleVoyAction={handleClickVoy}
          />
          <div ref={refDonde}></div>
          <StatsGridWithImage />
          <Box mb={{ base: 8, md: 20 }} />
          <Box mb={{ base: 8, md: 20 }}>
            <Heading
              color={'gray.700'}
              mb={5}
              fontSize={{ base: '3xl', md: '5xl' }}
            >
              ¿Y como se llega?
            </Heading>
            <Text fontSize={'xl'} color={'gray.600'}>
              Que no te asuste el nombre del salón, ¡No es muy lejos!
            </Text>
          </Box>
          <SimpleMap />
          <div ref={refVoy}></div>
          <CardWithIllustration />
        </Grid>
      </Box>
      <SmallWithSocial />
    </ChakraProvider>
  );
}

export default App;
