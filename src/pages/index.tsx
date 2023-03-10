import Head from "next/head";
import { Input, mergeClasses } from "@fluentui/react-components";
import { Card } from "@fluentui/react-components/unstable";
import { makeStyles, shorthands } from "@fluentui/react-components";
import Image from "next/image";

const useStyles = makeStyles({
  main: {
    backgroundImage: 'url("/website-background.png")',
    backgroundSize: "cover",
  },
  card: {
    ...shorthands.margin("48px"),
    ...shorthands.borderRadius("0px"),
    height: "600px",
    width: "350px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  welcomeMessage: {},
  welcomeMessageText: {
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
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Card className={mergeClasses(styles.card, "ms-Grid")}>
          <div className="ms-Grid-row">
            <WelcomeMessage />
          </div>
          <div className="ms-Grid-row">
            <Navigation />
          </div>
          <div className="ms-Grid-row">
            <Search />
          </div>
        </Card>
      </main>
    </>
  );
}

function WelcomeMessage() {
  const styles = useStyles();
  return (
    <div className={styles.welcomeMessage}>
      <span className="ms-Grid-col ms-sm2"></span>
      <span
        className={mergeClasses(
          styles.welcomeMessageText,
          "ms-Grid-col ms-sm8",
          "ms-font-su ms-fontColor-themePrimary"
        )}
      >
        Welcome
      </span>
      <span className="ms-Grid-col ms-sm2"></span>
    </div>
  );
}

function Navigation() {
  const styles = useStyles();
  return (
    <div className={styles.navigationList}>
      <span className="ms-Grid-col ms-sm3"></span>
      <span className="ms-Grid-col ms-sm6">
        {[
          {
            image: {
              alt: "a developer drinking coffee, pixel art",
              url: "/dev-pixel-art-1.png",
            },
            url: "https://github.com/1NF053C",
          },
          {
            image: {
              url: "/honey-pot.png",
              alt: "a pot of honey",
            },
            url: "coming soon",
          },
          {
            image: {
              alt: "a developer drinking coffee, pixel art",
              url: "/dev-pixel-art-1.png",
            },
            url: "https://github.com/1NF053C",
          },
          {
            image: {
              url: "/honey-pot.png",
              alt: "a pot of honey",
            },
            url: "coming soon",
          },
        ].map((link) => (
          <div
            className={mergeClasses(styles.navigationListItem, "ms-Grid-col")}
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
      </span>
      <span className="ms-Grid-col ms-sm3"></span>
    </div>
  );
}

function Search() {
  const styles = useStyles();
  return (
    <div className={styles.search}>
      <span className="ms-Grid-col ms-sm2"></span>
      <Input
        className="ms-Grid-col ms-sm8"
        type="search"
        placeholder="Search"
      />
      <span className="ms-Grid-col ms-sm2"></span>
    </div>
  );
}
