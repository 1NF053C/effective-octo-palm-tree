import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css'

import type { AppProps } from "next/app";
import {
  FluentProvider,
  teamsLightTheme,
} from "@fluentui/react-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="ms-Fabric">
      <FluentProvider
        theme={{
          ...teamsLightTheme,
        }}
      >
        <Component {...pageProps} />
      </FluentProvider>
    </div>
  );
}
