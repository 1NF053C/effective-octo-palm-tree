import { ExternalLinkIcon } from "@chakra-ui/icons";
import { ThreeCardLayout } from "./layouts/three-card-layout";
import { BackgroundImage } from "./background-image";
import Clock from "react-live-clock";
import "./about-me-card.css";
import {
  Box,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Avatar,
  Badge,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
} from "@chakra-ui/react";

import { FaCode } from "react-icons/fa";

export function AboutMeCard() {
  return (
    <div className="three-card-layout">
      <ThreeCardLayout
        first={
          <Flex h="100%" justifyContent="center" direction="column">
            <SoftwareEngineerCandidateCard
              name="Chris"
              title="Frontend Developer"
              avatarSrc="/images/profile-pic.webp"
              isLookingForJob={true}
              skills="JavaScript, React, HTML, CSS, TypeScript, Node.js, Amazon Web Services, ...and more"
            />
          </Flex>
        }
        second={
          <div className="stretch" style={{ position: "relative" }}>
            <BackgroundImage
              src="/images/castle-background.webp"
              alt="decorative castle background"
              objectPosition="-235px 50%"
            />
          </div>
        }
        third={
          <Flex h="100%" direction={"column"} justifyContent="center">
            <Box h="50%" bg="gray.500" position="relative">
              <TimeZoneClocks />
            </Box>
            <Box bg="white" h="50%" overflowY="hidden">
              <LinkTable />
            </Box>
          </Flex>
        }
      />
    </div>
  );
}

function SoftwareEngineerCandidateCard(props: any) {
  const { name, title, avatarSrc, isLookingForJob, skills } = props;

  return (
    <>
      <Flex
        direction={["column", "row"]}
        alignItems={["center", "flex-start"]}
        justifyContent="space-between"
        p={4}
        bg="white"
        rounded="md"
      >
        <Stack spacing={10} w="100%" ml={[0, 4]}>
          <Box>
            <Avatar src={avatarSrc} />
          </Box>
          <Box ml="3">
            <Text fontWeight="bold">{name}</Text>
            <Text fontSize="sm">Software Developer</Text>
            <Badge ml="1" colorScheme="green">
              Open to Work
            </Badge>
          </Box>
          <Box>
            <Text fontWeight="bold">Skills:</Text>
          </Box>
          <Box>
            {skills.split(", ").map((skill: string) => (
              <Tag
                key={skill}
                size="sm"
                variant="solid"
                colorScheme="purple"
                m="2px"
              >
                <TagLeftIcon as={FaCode} />
                <TagLabel>{skill}</TagLabel>
              </Tag>
            ))}
          </Box>
        </Stack>
      </Flex>
    </>
  );
}

function TimeZoneClocks() {
  return (
    <div
      style={{
        textShadow: "1px 1px 10px #fff, 1px 1px 10px #fff",
        color: "#fff",
        display: "grid",
        placeContent: "center",
        height: "100%",
      }}
    >
      <h1
        style={{
          position: "relative",
          zIndex: "1",
          fontSize: "16px",
        }}
      >
        US/Pacific:
      </h1>
      <h1
        style={{
          position: "relative",
          zIndex: "1",
          fontSize: "16px",
        }}
      >
        <Clock
          format="HH:mm:ss"
          interval={1000}
          ticking={true}
          timezone={"US/Pacific"}
        />
      </h1>
      <br />
      <h1
        style={{
          position: "relative",
          zIndex: "1",
          fontSize: "16px",
        }}
      >
        US/Central:
      </h1>
      <h1
        style={{
          position: "relative",
          zIndex: "1",
          fontSize: "16px",
        }}
      >
        <Clock
          format="HH:mm:ss"
          interval={1000}
          ticking={true}
          timezone={"US/Central"}
        />
      </h1>
      <br />
      <h1
        style={{
          position: "relative",
          zIndex: "1",
          fontSize: "16px",
        }}
      >
        US/Eastern:
      </h1>
      <h1
        style={{
          position: "relative",
          zIndex: "1",
          fontSize: "16px",
        }}
      >
        <Clock
          format="HH:mm:ss"
          interval={1000}
          ticking={true}
          timezone={"US/Eastern"}
        />
      </h1>
    </div>
  );
}

function LinkTable() {
  return (
    <TableContainer style={{ fontSize: "12px" }}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th style={{ fontSize: "9px" }}>Bookmarks</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td display="flex" justifyContent="space-between">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://aws.amazon.com/blogs/"
              >
                AWS Blogs
              </a>
              <ExternalLinkIcon style={{ alignSelf: "center" }} />
            </Td>
            <Td display="flex" justifyContent="space-between">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://devblogs.microsoft.com/"
              >
                MSFT Dev Blogs
              </a>
              <ExternalLinkIcon style={{ alignSelf: "center" }} />
            </Td>
            <Td display="flex" justifyContent="space-between">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://blog.cloudflare.com/"
              >
                Cloudflare Blogs
              </a>
              <ExternalLinkIcon style={{ alignSelf: "center" }} />
            </Td>
            <Td display="flex" justifyContent="space-between">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://cloud.google.com/blog"
              >
                GCP Blog
              </a>
              <ExternalLinkIcon style={{ alignSelf: "center" }} />
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
