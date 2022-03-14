import AppRoot from "./App";
import ReactDOMServer from "react-dom/server";
import image from "@frontity/html2react/processors/image";
import { ServerStyleSheets } from "@mui/styles";
import Link from "@mui/material/Link";

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
      beforeSSR: ({ state, libraries }) => async ({ ctx }) => {
        const userAgent = ctx.header["user-agent"];
        state.theme.userAgent = userAgent;

        libraries.frontity.render = ({ App }) => {
          const sheets = new ServerStyleSheets();

          const html = ReactDOMServer.renderToString(sheets.collect(<App />));

          // Return the `html` and the `css` collected.
          return {
            html,
            css: sheets.toString(),
          };
        };

        const template = libraries.frontity.template;
        libraries.frontity.template = ({ head, result, ...rest }) => {
          const { html, css } = result;

          // Push the `css` in the head tags
          head.push(`<style id="jss-server-side">${css}</style>`);

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
