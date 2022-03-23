import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

export default function SmallWithSocial() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={4} centerContent>
        <Text>
          Si querés podes darnos un 👉 <Link href="/regalito">Regalo</Link>
        </Text>
        <Text>
          Página construida con amor ❤️. ¡Los esperamos! | Si tenes dudas
          escribinos al{" "}
          <a
            style={{ fontWeight: "bold", color: "blue" }}
            href="https://wa.link/ui1fcj"
            target="_blank"
            rel="noreferrer"
          >
            +543764149377
          </a>
        </Text>
      </Container>
    </Box>
  );
}
