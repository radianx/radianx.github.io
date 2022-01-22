import React, { useRef } from 'react';
import { ChakraProvider, Box, Stack, theme } from '@chakra-ui/react';
import { WithBackgroundImage } from './components/Landing/WithBackgroundImage';
import StatsGridWithImage from './components/Middle/StatsGridWithImage';
import SmallWithSocial from './components/Footer/SmallWithSocial';
import { SimpleMap } from './components/SimpleMap/SimpleMap';
import { Heading, Text } from '@chakra-ui/layout';
import { Link } from '@chakra-ui/react';
import ReactPlayer from 'react-player';
import CardWithIllustration from './components/Formulario/CardWithIllustration';
import comoLlegarVideo from './videos/comoLlegar.mp4';

const StatsText = ({ children }) => (
  <Text as={'span'} fontWeight={700} color={'gray.600'}>
    {children}
  </Text>
);

const cronograma = [
  {
    title: '19:00 Hs.',
    content: (
      <>
        <StatsText>Casamiento por Iglesia</StatsText> por la tarde en la Iglesia
        de Fátima
      </>
    ),
  },
  {
    title: '20:00 Hs.',
    content: (
      <>
        <StatsText>Fiesta de casamiento</StatsText> en el Salón de eventos
        Allaité.
      </>
    ),
  },
];

const protocolo = [
  {
    title: '¿Barbijo / Carnet?',
    content: (
      <>
        Se pedira{' '}
        <StatsText>carnet sanitario (en el celular alcanza)</StatsText> y además
        deberan <StatsText>llegar con el barbijo puesto</StatsText>, en la
        entrada se tomará la temperatura, se ofrecerá sanitizante y{' '}
        <StatsText>si no tienen fiebre</StatsText> podrán{' '}
        <StatsText>ingresar sin barbijo</StatsText>
      </>
    ),
  },
  {
    title: '¿Y si tengo temperatura alta (37,5° o más) justo en la entrada?',
    content: (
      <>
        Si sucede eso, <StatsText>no podrán ingresar</StatsText>, lo sentimos
        mucho. 😔
      </>
    ),
  },
];

function App() {
  const refDonde = useRef(null);
  const refVoy = useRef(null);

  const handleClickDonde = () => refDonde.current.scrollIntoView();
  const handleClickVoy = () => refVoy.current.scrollIntoView();

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Stack>
          <WithBackgroundImage
            handleDondeAction={handleClickDonde}
            handleVoyAction={handleClickVoy}
          />
          <div ref={refDonde}></div>

          <StatsGridWithImage
            title="Cronograma"
            subtitle="El Sábado 16 de Julio del 2022"
            stats={cronograma}
          />

          <StatsGridWithImage
            title="Protocolo Covid-19"
            subtitle="Consideraciones a tener en cuenta"
            stats={protocolo}
            secondary
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div style={{ height: '600px' }}>
              <ReactPlayer
                url={comoLlegarVideo}
                width="100%"
                height="100%"
                controls={true}
              />
            </div>
          </div>
          <div style={{ marginTop: '25px' }}>
            <Heading
              color={'gray.700'}
              mb={5}
              fontSize={{ base: '3xl', md: '5xl' }}
            >
              Hacé click 👉
              <Link href="https://maps.app.goo.gl/aiUfRg6HppvDzHWQA" isExternal>
                ACÁ
              </Link>
              👈 para ver indicaciones en google maps
              <br />
              Sino abajo te dejamos un mapa con la ubicación 👇
            </Heading>
          </div>
          <SimpleMap />
          <div ref={refVoy}></div>
          <CardWithIllustration />
        </Stack>
      </Box>
      <SmallWithSocial />
    </ChakraProvider>
  );
}

export default App;
