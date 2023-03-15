import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

import type { AppProps } from "next/app";
import {
  createDOMRenderer,
  FluentProvider,
  webLightTheme,
  GriffelRenderer,
  SSRProvider,
  RendererProvider,
} from "@fluentui/react-components";

type EnhancedAppProps = AppProps & { renderer?: GriffelRenderer };

export default function App({
  Component,
  pageProps,
  renderer,
}: EnhancedAppProps) {
  return (
    <RendererProvider renderer={renderer || createDOMRenderer()}>
      <SSRProvider>
        <FluentProvider theme={webLightTheme}>
          <Component {...pageProps} />
        </FluentProvider>
      </SSRProvider>
    </RendererProvider>
  );
}
