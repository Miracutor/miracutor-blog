import App from "./App";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "./createEmotionCache";
import { muiLink, image } from "./processors";

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
