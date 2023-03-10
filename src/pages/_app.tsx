import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { themeToTokensObject } from '@fluentui/react-components';

import { FluentProvider, teamsLightTheme, Theme } from "@fluentui/react-components";

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <FluentProvider
      theme={{
        ...teamsLightTheme
      }}
    >
      <Component {...pageProps} />
    </FluentProvider>
  );
}
