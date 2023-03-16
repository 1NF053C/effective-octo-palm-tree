import { Box, Flex } from "@chakra-ui/react";

export function AboutMeCard() {
  return (
    <Flex
      w={{ base: "300px", md: "600px" }}
      height="500px"
      bg="white"
      justify="center"
      flexWrap="wrap"
    >
      <Box w="300px" h="100%" bg="gray.400" />
      <Flex width="300px" height="500px">
        <Box w="150px" h="100%" bg="gray.500" />
        <Box w="150px" h="100%" bg="gray.600" />
      </Flex>
    </Flex>
  );
}
