import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import LandingImage from '../../images/landing.jpg';

export const WithBackgroundImage = props => {
  const { handleDondeAction, handleVoyAction } = props;

  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={LandingImage}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, orangeAlpha.200, transparent)'}
      >
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
          >
            ¡Nos Casamos!
          </Text>
          <Text
            color={'white'}
            fontWeight={400}
            fontSize={useBreakpointValue({ base: '1xl', md: '2xl' })}
          >
            Y queremos compartir la inmensa alegría de nuestra unión.
          </Text>
          <Stack direction={'row'}>
            <Button
              onClick={handleDondeAction}
              bg={'orange.200'}
              rounded={'full'}
              color={'grey.700'}
              _hover={{ bg: 'orange.300' }}
            >
              ¿Donde?
            </Button>
            <Button
              onClick={handleVoyAction}
              bg={'orangeAlpha.200'}
              rounded={'full'}
              color={'orange.200'}
              _hover={{ bg: 'orangeAlpha.400' }}
            >
              ¡Voy a ir!
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
};
