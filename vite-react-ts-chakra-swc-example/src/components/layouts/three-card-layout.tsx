import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import { TINY_VIEWPORT_MQ } from "../../utils/tiny-viewport-mq";

const TINY_WIDTH = "90vw";
const BASE_WIDTH = "330px";
const HALF_BASE_WIDTH = parseInt(BASE_WIDTH) / 2 + "px";
const FULL_WIDTH = parseInt(BASE_WIDTH) * 2 + "px";
const ROW_HEIGHT = "500px";
const COL_HEIGHT = "100%";

type ThreeCardLayoutProps = {
  first: JSX.Element;
  second: JSX.Element;
  third: JSX.Element;
};

export function ThreeCardLayout({
  first,
  second,
  third,
}: ThreeCardLayoutProps) {
  const [isViewportTiny] = useMediaQuery(TINY_VIEWPORT_MQ);
  return (
    <Flex
      className="three-card-layout"
      w={isViewportTiny ? TINY_WIDTH : { base: BASE_WIDTH, md: FULL_WIDTH }}
      height={ROW_HEIGHT}
      bg="white"
      justify="center"
      flexWrap="wrap"
    >
      <Box
        w={isViewportTiny ? TINY_WIDTH : { base: BASE_WIDTH }}
        h={COL_HEIGHT}
      >
        {first}
      </Box>
      <Flex
        w={isViewportTiny ? TINY_WIDTH : { base: BASE_WIDTH }}
        height={ROW_HEIGHT}
      >
        <Box w={HALF_BASE_WIDTH} h={COL_HEIGHT}>
          {second}
        </Box>
        <Box w={HALF_BASE_WIDTH} h={COL_HEIGHT}>
          {third}
        </Box>
      </Flex>
    </Flex>
  );
}
