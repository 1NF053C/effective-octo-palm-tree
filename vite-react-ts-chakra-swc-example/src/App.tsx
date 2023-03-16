import "./App.css";
import { Flex, Image, useMediaQuery } from "@chakra-ui/react";
import { TINY_VIEWPORT_MQ } from "./utils/tiny-viewport-mq";
import { AboutMeCard } from "./components/about-me-card";

export function App() {
  const [isViewportTiny] = useMediaQuery(TINY_VIEWPORT_MQ);
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
      <Flex p={isViewportTiny ? "5px" : "48px"} justify="center">
        <AboutMeCard />
      </Flex>
    </div>
  );
}
