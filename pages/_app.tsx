import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  console.log("Component from _app", Component);
  console.log("pageProps from _app", pageProps);
  return <Component {...pageProps} />;
}

export default MyApp;
