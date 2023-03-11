import Head from "next/head";
import {
  Input,
  mergeClasses,
  makeStyles,
  shorthands,
} from "@fluentui/react-components";
import { Card } from "@fluentui/react-components/unstable";
import Image from "next/image";

// breakpoint dimensions:
// https://getbootstrap.com/docs/5.0/layout/breakpoints/

const useStyles = makeStyles({
  main: {
    backgroundImage: 'url("/website-background.png")',
    backgroundSize: "cover",
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },
  leftCard: {
    ...shorthands.borderRadius("0px"),
    height: "600px",
    width: "500px",
    "@media only screen (max-width: 576px)": {
      width: "400px",
    },
  },
  midCard: {
    ...shorthands.borderRadius("0px"),
    height: "600px",
    width: "250px",
    "@media only screen (max-width: 576px)": {
      maxWidth: "200px",
    },
  },
  endCard: {
    ...shorthands.borderRadius("0px"),
    ...shorthands.padding("0px"),
    height: "600px",
    width: "250px",
    "@media only screen (max-width: 576px)": {
      maxWidth: "200px",
    },
  },
  shortCard: {
    ...shorthands.borderRadius("0px"),
    height: "300px",
    width: "250px",
    "@media only screen (max-width: 576px)": {
      maxWidth: "200px",
    },
  },
  welcomeMessage: {},
  welcomeMessageText: {
    textAlign: "center",
    fontSize: "48px",
    lineHeight: "48px",
  },
  navigationList: {},
  navigationListItem: {},
  search: {
    bottom: "0px",
  },
});

export default function Home() {
  const styles = useStyles();
  return (
    <>
      <Head>
        <title>Welcome</title>
        <meta name="description" content="Chris's personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={mergeClasses(styles.main, "container-fluid")}>
        <div className="row g-0 justify-content-center">
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
        <div className="row">
          <WelcomeMessage />
        </div>
        <div className="row">
          <Navigation />
        </div>
        <div className="row">
          <Search />
        </div>
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
          backgroundImage: 'url("/castle-background.png")',
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
        <div
          className={styles.shortCard}
          style={{
            backgroundColor: "#222",
          }}
        ></div>
        <div
          className={styles.shortCard}
          style={{
            backgroundColor: "#444",
          }}
        ></div>
      </div>
    </>
  );
}

function WelcomeMessage() {
  const styles = useStyles();
  return (
    <div className={styles.welcomeMessage}>
      <div className={mergeClasses(styles.welcomeMessageText, "col")}>
        Welcome
      </div>
    </div>
  );
}

function Navigation() {
  const styles = useStyles();
  return (
    <div className={styles.navigationList}>
      <div className="col">
        {[
          {
            id: "1",
            image: {
              alt: "a developer drinking coffee, pixel art",
              url: "/dev-pixel-art-1.png",
            },
            url: "https://github.com/1NF053C",
            text: "Github",
          },
          {
            id: "2",
            image: {
              url: "/honey-pot.png",
              alt: "a pot of honey",
            },
            url: "#",
            text: "coming soon",
          },
          {
            id: "3",
            image: {
              alt: "a developer drinking coffee, pixel art",
              url: "/dev-pixel-art-1.png",
            },
            url: "https://github.com/1NF053C",
            text: "Github",
          },
          {
            id: "4",
            image: {
              url: "/honey-pot.png",
              alt: "a pot of honey",
            },
            url: "#",
            text: "coming soon",
          },
        ].map((link) => (
          <div
            key={link.id}
            className={mergeClasses(styles.navigationListItem, "col")}
          >
            <a rel="noopener noreferrer" target="_blank" href={link.url}>
              <Image
                style={{ border: "1px solid #ccc" }}
                height="48"
                width="48"
                src={link.image.url}
                alt={link.image.alt}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

function Search() {
  const styles = useStyles();
  return (
    <div className={styles.search}>
      <Input className="col" type="search" placeholder="Search" />
    </div>
  );
}
