import type { AppProps } from "next/app";
import "@eivindml/shared/dist/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
