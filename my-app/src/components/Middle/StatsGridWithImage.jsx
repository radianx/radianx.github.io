import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';
import LandingTwo from '../../images/landing2.jpg';

export default function StatsGridWithImage() {
  return (
    <Box bg={'orange.200'} position={'relative'}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: 'none', lg: 'flex' }}
        backgroundImage={LandingTwo}
        backgroundSize={'cover'}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={'absolute'}
        width={'50%'}
        insetY={0}
        right={0}
      >
        <Flex
          bgGradient={'linear(to-r, orange.200 10%, transparent)'}
          w={'full'}
          h={'full'}
        />
      </Flex>
      <Container maxW={'7xl'} zIndex={10} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            flex={1}
            color={'gray.500'}
            justify={{ lg: 'center' }}
            py={{ base: 4, md: 20, xl: 60 }}
          >
            <Box mb={{ base: 8, md: 20 }}>
              <Heading
                color={'gray.700'}
                mb={5}
                fontSize={{ base: '3xl', md: '5xl' }}
              >
                Eventos
              </Heading>
              <Text fontSize={'xl'} color={'gray.600'}>
                Todo sucederá en Garupá
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
              {stats.map(stat => (
                <Box key={stat.title}>
                  <Text
                    fontFamily={'heading'}
                    fontSize={'3xl'}
                    color={'gray.700'}
                    mb={3}
                  >
                    {stat.title}
                  </Text>
                  <Text fontSize={'xl'} color={'gray.600'}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  );
}

const StatsText = ({ children }) => (
  <Text as={'span'} fontWeight={700} color={'gray.600'}>
    {children}
  </Text>
);

const stats = [
  {
    title: '15 de Julio',
    content: (
      <>
        <StatsText>Casamiento por Civil</StatsText> por la mañana, luego una
        juntada familiera en Candelaria
      </>
    ),
  },
  {
    title: '16 de Julio',
    content: (
      <>
        <StatsText>Casamiento por Iglesia</StatsText> por la tarde en la Iglesia
        de Fátima
      </>
    ),
  },
  {
    title: '16 de Julio',
    content: (
      <>
        <StatsText>Fiesta de casamiento</StatsText> después de la Iglesia, a
        partir de las 20:00 Hs. en el Salón de eventos Allaité
      </>
    ),
  },
];
