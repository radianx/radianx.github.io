import React from "react";
import { ChakraProvider, Box, Button, theme, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Pagos = () => {
  let navigate = useNavigate();

  return (
    <ChakraProvider theme={theme}>
      <Button
        onClick={() => navigate("/")}
        bg={"orange.200"}
        rounded={"full"}
        color={"grey.700"}
        _hover={{ bg: "orange.300" }}
        margin={"1rem"}
      >
        ↖ Volver
      </Button>
      <Box textAlign="center" fontSize="xl">
        <Text>
          Pueden hacernos una donación única via mercado pago con los siguientes
          links:
        </Text>
        <Button
          onClick={() => window.location.replace("https://mpago.la/1v5vgb6")}
          bg={"orange.200"}
          rounded={"full"}
          color={"grey.700"}
          _hover={{ bg: "orange.300" }}
          margin={"1rem"}
        >
          $500
        </Button>
        <Button
          onClick={() => window.location.replace("https://mpago.la/2EeoLuy")}
          bg={"orange.200"}
          rounded={"full"}
          color={"grey.700"}
          _hover={{ bg: "orange.300" }}
          margin={"1rem"}
        >
          $1000
        </Button>
        <Button
          onClick={() => window.location.replace("https://mpago.la/1mJTmJW")}
          bg={"orange.200"}
          rounded={"full"}
          color={"grey.700"}
          _hover={{ bg: "orange.300" }}
          margin={"1rem"}
        >
          $2500
        </Button>
        <Button
          onClick={() => window.location.replace("https://mpago.la/2LWa54V")}
          bg={"orange.200"}
          rounded={"full"}
          color={"grey.700"}
          _hover={{ bg: "orange.300" }}
          margin={"1rem"}
        >
          $5000
        </Button>
        <Button
          onClick={() => window.location.replace("https://mpago.la/22h7w8L")}
          bg={"orange.200"}
          rounded={"full"}
          color={"grey.700"}
          _hover={{ bg: "orange.300" }}
          margin={"1rem"}
        >
          $10000
        </Button>
        <Button
          onClick={() => window.location.replace("https://mpago.la/1PAHSGy")}
          bg={"orange.200"}
          rounded={"full"}
          color={"grey.700"}
          _hover={{ bg: "orange.300" }}
          margin={"1rem"}
        >
          $50000
        </Button>
        <Text>
          O por paypal a{" "}
          <Text style={{ fontWeight: "bold" }}>sbardemadrian@gmail.com</Text>
          <br />
        </Text>
        <Text>
          O bien el monto que quieras por transferencia al{" "}
          <Text style={{ fontWeight: "bold" }}>
            CVU: 0000003100076463430968
          </Text>{" "}
          o alias{" "}
          <Text style={{ fontWeight: "bold" }}>boda.julieta.adrian</Text>
        </Text>
        <br />
        <Text style={{ fontSize: "11px" }}>
          (por las dudas, no es necesario que nos mandes dinero, aceptamos otros
          regalos)
        </Text>
      </Box>
    </ChakraProvider>
  );
};

export default Pagos;
