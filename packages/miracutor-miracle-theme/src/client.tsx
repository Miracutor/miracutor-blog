import App from "./App";
import image from "@frontity/html2react/processors/image";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "./createEmotionCache";
import { muiLink } from "./processors";

const cache = createEmotionCache();

const AppRoot = () => (
  <CacheProvider value={cache}>
    <App />
  </CacheProvider>
);

export default {
  name: "miracutor-miracle-theme",
  roots: {
    theme: AppRoot,
  },
  state: {
    theme: {
      menu: [],
      userAgent: "",
    },
  },
  actions: {
    theme: {},
  },
  libraries: {
    html2react: {
      processors: [muiLink, image],
    },
  },
};
