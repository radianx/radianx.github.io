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

export default function StatsGridWithImage(props) {
  const { title, subtitle, stats, secondary } = props;

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
        right={secondary ? '50%' : '0'}
      >
        {secondary ? (
          <Flex
            bgGradient={'linear(to-l, orange.200 10%, transparent)'}
            w={'full'}
            h={'full'}
          />
        ) : (
          <Flex
            bgGradient={'linear(to-r, orange.200 10%, transparent)'}
            w={'full'}
            h={'full'}
          />
        )}
      </Flex>
      <Container maxW={'7xl'} zIndex={10} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          {secondary ? <Flex flex={1} /> : null}
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
                {title}
              </Heading>
              <Text fontSize={'xl'} color={'gray.600'}>
                {subtitle}
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
          {secondary ? null : <Flex flex={1} />}
        </Stack>
      </Container>
    </Box>
  );
}
