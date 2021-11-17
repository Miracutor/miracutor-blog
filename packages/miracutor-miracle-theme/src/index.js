import AppRoot from "./App";
import ReactDOMServer from "react-dom/server";
import { ServerStyleSheets } from "@mui/styles";
import Link from "@mui/material/Link";
import { ViewImage, WPBlockImg } from "./View/ViewImage";

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

const wpImage = {
  priority: 12,
  name: "wpImage",
  test: ({ node }) => node.component === "img",
  processor: ({ node }) => {
    if (node.parent?.component === "noscript") return null;

    if (
      node.parent.parent &&
      node.parent.parent.component === "div" &&
      node.parent.parent.className === "wp-block-image"
    ) {
      node.parent.parent.component = WPBlockImg;
    }

    if (
      node.parent.component === "figure" &&
      node.parent.className === "wp-block-image"
    ) {
      node.parent.component = WPBlockImg;
    }

    if (node.props["data-src"]) {
      node.props.src = node.props["data-src"];
    }

    if (node.props["data-srcset"]) {
      node.props.srcSet = node.props["data-srcset"];
    }

    if (node.props["alt"]) {
      node.props.alt = node.props["alt"];
    }

    if (node.props["sizes"]) {
      node.props.sizes = node.props["sizes"];
    }

    node.component = ViewImage;
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
      mobileView: false,
    },
  },
  actions: {
    theme: {
      beforeSSR: ({ libraries }) => {
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
      setResponsiveness: ({ state }) => {
        window.innerWidth < 900
          ? (state.theme.mobileView = true)
          : (state.theme.mobileView = false);
      },
    },
  },
  libraries: {
    html2react: {
      processors: [muiLink, wpImage],
    },
  },
};
