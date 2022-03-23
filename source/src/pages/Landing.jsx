import React, { useRef, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChakraProvider, Box, Stack, theme } from "@chakra-ui/react";
import { WithBackgroundImage } from "../components/Landing/WithBackgroundImage";
import StatsGridWithImage from "../components/Middle/StatsGridWithImage";
import SmallWithSocial from "../components/Footer/SmallWithSocial";
import { Heading, Text } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import Formulario from "../components/Formulario/Formulario";
import comoLlegarVideo from "../videos/comoLlegar.mp4";

const StatsText = ({ children }) => (
  <Text as={"span"} fontWeight={700} color={"gray.600"}>
    {children}
  </Text>
);

const cronograma = [
  {
    title: "19:00 Hs.",
    content: (
      <>
        <StatsText>Casamiento por Iglesia</StatsText> por la tarde en la Iglesia
        de Fátima
      </>
    ),
  },
  {
    title: "20:00 Hs.",
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
    title: "¿Barbijo / Carnet?",
    content: (
      <>
        Se pedira{" "}
        <StatsText>carnet sanitario (imagen en el celular alcanza)</StatsText> y
        además deberan <StatsText>llegar con el barbijo puesto</StatsText>, en
        la entrada se tomará la temperatura, se ofrecerá sanitizante y{" "}
        <StatsText>si no tienen fiebre</StatsText> podrán{" "}
        <StatsText>ingresar sin barbijo</StatsText>
      </>
    ),
  },
];

const Landing = () => {
  const [searchParams] = useSearchParams();
  const [idInvitacion, setIdInvitacion] = useState(null);
  const refDonde = useRef(null);
  const refVoy = useRef(null);

  useEffect(() => {
    setIdInvitacion(searchParams.get("idInvitacion"));
  }, [searchParams]);

  const handleClickDonde = () => refDonde.current.scrollIntoView();
  const handleClickVoy = () => refVoy.current.scrollIntoView();
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Stack>
          <WithBackgroundImage
            handleDondeAction={handleClickDonde}
            handleVoyAction={idInvitacion ? handleClickVoy : null}
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
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{ height: "600px" }}>
              <ReactPlayer
                url={comoLlegarVideo}
                width="100%"
                height="100%"
                controls={true}
              />
            </div>
          </div>
          <div style={{ marginTop: "25px" }}>
            <Heading
              color={"gray.700"}
              mb={5}
              fontSize={{ base: "3xl", md: "5xl" }}
            >
              Hacé click 👉
              <Link href="https://maps.app.goo.gl/aiUfRg6HppvDzHWQA" isExternal>
                ACÁ
              </Link>
              👈 para ver indicaciones de como llegar al salón en google maps
            </Heading>
          </div>
          <div style={{ marginTop: "25px" }}>
            <Heading
              color={"gray.700"}
              mb={5}
              fontSize={{ base: "3xl", md: "5xl" }}
            >
              Hacé click 👉
              <Link href="https://goo.gl/maps/yRmHPpSoJXETfS2BA" isExternal>
                ACÁ
              </Link>
              👈 para ver indicaciones de como llegar a la iglesa en google maps
            </Heading>
          </div>
          <div ref={refVoy}></div>
          {idInvitacion && <Formulario idInvitacion={idInvitacion} />}
        </Stack>
      </Box>
      <SmallWithSocial />
    </ChakraProvider>
  );
};

export default Landing;
