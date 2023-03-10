import Head from "next/head";
import { Card } from "@fluentui/react-components/unstable";
import { makeStyles, shorthands } from "@fluentui/react-components";
import { StackItem, Stack } from "@/components/stack";

const useStyles = makeStyles({
  card: {
    ...shorthands.margin("48px"),
    ...shorthands.borderRadius("4px"),
    height: "600px",
  },
  leftPanel: {
    width: "200px",
  },
  main: {
    backgroundImage: 'url("/website-background.png")',
  },
});

export default function Home() {
  const styles = useStyles();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Card className={styles.card}>
          <Stack
            overrideStyles={{ flexDirection: 'row' }}
            overrideItemStyles={{ margin: '10px' }}>
            <StackItem>Hello</StackItem>
            <StackItem>World</StackItem>
          </Stack>
        </Card>
      </main>
    </>
  );
}
