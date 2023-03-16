import "./App.css";
import { Flex, Image } from "@chakra-ui/react";
import { AboutMeCard } from "./components/about-me-card/about-me-card";

export function App() {
  return (
    <div className="bg-image-container">
      <Image
        src="/images/website-background.webp"
        backgroundRepeat="no-repeat"
        objectFit="cover"
        backgroundPosition="center center"
        overflowX="hidden"
        height="100%"
        width="100vw"
        zIndex="-1"
        position="absolute"
      />
      <Flex p="48px" justify="center">
        <AboutMeCard />
      </Flex>
    </div>
  );
}
