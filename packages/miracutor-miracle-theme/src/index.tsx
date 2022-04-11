import AppRoot from "./App";
import ReactDOMServer from "react-dom/server";
import image from "@frontity/html2react/processors/image";
import Link from "@mui/material/Link";
import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import createEmotionCache from "./createEmotionCache";

const muiLink = {
  priority: 10,
  name: "muiLink",
  test: ({ node }) =>
    node.component === "a" &&
    node.props?.href &&
    !node.props?.href?.startsWith("#"),
  processor: ({ node }) => {
    node.component = Link;
    return node;
  },
};

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
    theme: {
      beforeSSR:
        ({ state, libraries }) =>
        async ({ ctx }) => {
          state.theme.userAgent = ctx.header["user-agent"];

          libraries.frontity.render = ({ App }) => {
            const cache = createEmotionCache();
            const { extractCriticalToChunks, constructStyleTagsFromChunks } =
              createEmotionServer(cache);

            const html = ReactDOMServer.renderToString(
              <CacheProvider value={cache}>
                <App />
              </CacheProvider>
            );

            // Grab the CSS from emotion
            const emotionChunks = extractCriticalToChunks(html);
            const emotionCss = constructStyleTagsFromChunks(emotionChunks);

            // Return the `html` and the `css` collected.
            return {
              html,
              css: emotionCss,
            };
          };

          const template = libraries.frontity.template;
          libraries.frontity.template = ({ head, result, ...rest }) => {
            const { html, css } = result;

            // Push the `css` in the head tags
            head.push(`${css}`);

            return template({
              ...rest,
              head,
              html,
            });
          };
        },
    },
  },
  libraries: {
    html2react: {
      processors: [muiLink, image],
    },
  },
};
