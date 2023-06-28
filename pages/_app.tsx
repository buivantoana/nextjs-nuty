import "@/styles/globals.css";
import axios from "../axios/axios";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../ultil/theme";
import createEmotionCache from "../ultil/create_emotion_cache";

const clientSideEmotionCache = createEmotionCache();
export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <SWRConfig
            value={{
              fetcher: (url) => axios.get(url),
              shouldRetryOnError: false,
            }}>
            <Component {...pageProps} />
          </SWRConfig>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}
