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
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export function AboutMeCard() {
  return (
    <div className="three-card-layout">
      <ThreeCardLayout
        first={<div className="stretch"></div>}
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
              <BackgroundImage
                src="/images/fantasy-landscape.webp"
                alt="decorative castle background"
                objectPosition="-56px 50%"
              />
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
