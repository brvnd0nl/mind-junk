import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { AppContextProvider } from "../context/AppContext";
import Layout from "../sections/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </AppContextProvider>
  );
}

export default MyApp;
