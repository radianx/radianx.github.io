import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function SmallWithSocial() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={4} centerContent>
        <Text>
          Página construida con amor ❤️. ¡Los esperamos! | Si querés ayudarnos
          económicamente mandános un whatsapp al +543764149377
        </Text>
      </Container>
    </Box>
  );
}
