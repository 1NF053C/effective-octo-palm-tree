import Head from "next/head";
import {
  Input,
  mergeClasses,
  makeStyles,
  shorthands,
  Persona,
  CompoundButton,
} from "@fluentui/react-components";
import { News24Regular } from "@fluentui/react-icons";

import { Card } from "@fluentui/react-components/unstable";
import Image from "next/image";
import Clock from "react-live-clock";
import { ListCard } from '../components/list-card';

// breakpoint dimensions:
// https://getbootstrap.com/docs/5.0/layout/breakpoints/

const XS = "@media only screen and (max-width: 576px)";

const useStyles = makeStyles({
  main: {
    position: "fixed",
    zIndex: 1,
  },
  imageContainer: {
    position: "fixed",
    height: "100%",
    width: "100%",
    left: "0",
    top: "0",
    pointerEvents: "none",
    zIndex: -1,
  },
  content: {
    paddingTop: "48px",
    paddingBottom: "48px",
    [XS]: {
      paddingTop: "20px",
      paddingBottom: "20px"
    },
  },
  leftCard: {
    ...shorthands.borderRadius("0px"),
    minHeight: "600px",
    width: "560px",
    [XS]: {
      width: "80vw",
    },
  },
  midCard: {
    ...shorthands.borderRadius("0px"),
    height: "600px",
    width: "280px",
    [XS]: {
      width: "40vw",
    },
  },
  endCard: {
    ...shorthands.borderRadius("0px"),
    ...shorthands.padding("0px"),
    height: "600px",
    width: "280px",
    [XS]: {
      width: "40vw",
    },
  },
  shortCard: {
    position: "relative",
    ...shorthands.borderRadius("0px"),
    height: "300px",
    width: "280px",
    [XS]: {
      maxWidth: "40vw",
    },
  },
  welcomeMessage: {
    display: "grid",
    "place-items": "center",
  },
  welcomeMessageText: {
    fontSize: "36px",
    [XS]: {
      fontSize: "24px",
    },
    lineHeight: "36px",
  },
  profileInfo: {
    display: "grid",
    "place-content": "center",
  },
  navigationList: {
    marginLeft: "25%",
    marginRight: "25%",
    display: "grid",
    "place-content": "center",
    gridGap: "1rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(50px, 1fr))",
  },
  navigationListItem: {
    textAlign: "center",
  },
  search: {
    display: "grid",
    "place-items": "center",
    paddingBottom: "20px",
  },
});

export default function Home() {
  const styles = useStyles();
  return (
    <>
      <Head>
        <title>Chris - Software Developer</title>
        <meta name="description" content="Chris's personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <main className={mergeClasses(styles.main, "container-fluid")}>
        <div className={styles.imageContainer}>
          <Image
            fill
            style={{ objectFit: "cover", zIndex: -1 }}
            src="/website-background.webp"
            alt=""
          />
        </div>
        <div
          className={mergeClasses(
            "row g-0 justify-content-center",
            styles.content
          )}
        >
          <div className="col-auto">
            <div className="row g-0 justify-content-center">
              <div className="col-auto">
                <LeftCard />
              </div>
              <div className="col-auto">
                <div className="row g-0">
                  <div className="col-auto">
                    <MidCard />
                  </div>
                  <div className="col-auto">
                    <EndCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

function LeftCard() {
  const styles = useStyles();
  return (
    <>
      <Card className={styles.leftCard}>
        <WelcomeMessage />
        <ProfileInfo />
        <Navigation />
        <Search />
      </Card>
    </>
  );
}

function MidCard() {
  const styles = useStyles();
  return (
    <>
      <Card
        className={styles.midCard}
        style={{
          backgroundImage: 'url("/castle-background.webp")',
          backgroundSize: "cover",
          backgroundPositionX: "-250px",
        }}
      ></Card>
    </>
  );
}

function EndCard() {
  const styles = useStyles();
  return (
    <>
      <div className={styles.endCard}>
        <div className={styles.shortCard}>
          <Image
            fill
            src="/fantasy-landscape.webp"
            alt="mountain landscape"
            style={{ zIndex: 1 }}
          />
          <div
            style={{
              textShadow: "1px 1px 10px #fff, 1px 1px 10px #fff",
              color: "#fff",
              display: "grid",
              placeContent: "center",
              height: "100%",
            }}
          >
            <h1 style={{ position: "relative", zIndex: "1", fontSize: "16px" }}>
              US/Pacific:
            </h1>
            <h1 style={{ position: "relative", zIndex: "1", fontSize: "16px" }}>
              <Clock
                format="HH:mm:ss"
                interval={1000}
                ticking={true}
                timezone={"US/Pacific"}
              />
            </h1>
            <br />
            <h1 style={{ position: "relative", zIndex: "1", fontSize: "16px" }}>
              US/Central:
            </h1>
            <h1 style={{ position: "relative", zIndex: "1", fontSize: "16px" }}>
              <Clock
                format="HH:mm:ss"
                interval={1000}
                ticking={true}
                timezone={"US/Central"}
              />
            </h1>
            <br />
            <h1 style={{ position: "relative", zIndex: "1", fontSize: "16px" }}>
              US/Eastern:
            </h1>
            <h1 style={{ position: "relative", zIndex: "1", fontSize: "16px" }}>
              <Clock
                format="HH:mm:ss"
                interval={1000}
                ticking={true}
                timezone={"US/Eastern"}
              />
            </h1>
          </div>
        </div>
        <div
          className={styles.shortCard}
          style={{
            backgroundColor: "#fff",
          }}
        >
          <ListCard />
        </div>
      </div>
    </>
  );
}

function WelcomeMessage() {
  const styles = useStyles();
  return (
    <div className={styles.welcomeMessage}>
      <div className={mergeClasses(styles.welcomeMessageText, "col")}>
        Hello, I&apos;m Chris. <br /> I'm interested in Cybersecurity, Site Reliability Engineering, and Software Development.
      </div>
    </div>
  );
}

function ProfileInfo() {
  const styles = useStyles();
  return (
    <Persona
      className={styles.profileInfo}
      name="Chris"
      secondaryText="Software Developer"
      tertiaryText="Available for work"
      presence={{ status: "available" }}
      size="huge"
      avatar={{
        image: {
          src: "/profile-pic.webp",
        },
      }}
    />
  );
}

function Navigation() {
  const styles = useStyles();
  return (
    <div className={styles.navigationList}>
      {[
        {
          id: "1",
          image: {
            alt: "github logo",
            url: "/github-mark.webp",
          },
          url: "https://github.com/1NF053C",
          text: "Github",
        },
        {
          id: "2",
          image: {
            url: "/linkedin.webp",
            alt: "linkedin logo",
          },
          url: "https://linkedin.com/in/chris-d7",
          text: "Linkedin",
        },
      ].map((link) => (
        <div key={link.id} className={mergeClasses(styles.navigationListItem)}>
          <a rel="noopener noreferrer" target="_blank" href={link.url}>
            <Image
              style={{
                marginLeft: "2px",
                marginRight: "2px",
              }}
              height="48"
              width="48"
              quality="100"
              src={link.image.url}
              alt={link.image.alt}
            />
          </a>
          <div>{link.text}</div>
        </div>
      ))}
    </div>
  );
}

function BlogLink() {
  <CompoundButton icon={<News24Regular />} secondaryContent="Browse">
    Example
  </CompoundButton>;
}

function Search() {
  const styles = useStyles();
  return (
    <div className={styles.search}>
      <div style={{ width: "80%" }}>
        <Input
          disabled={true}
          style={{ width: "100%" }}
          className="col"
          type="search"
          placeholder="Search"
        />
      </div>
    </div>
  );
}
