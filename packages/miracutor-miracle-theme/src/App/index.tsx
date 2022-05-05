import React from "react";
import { connect, Head, loadable } from "frontity";
import Switch from "@frontity/components/switch";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { ThemeProvider } from "@mui/material/styles";

import MobileProvider from "../Context/MobileProvider";
import Footer from "../Footer";
import Loading from "../Loading";
import Sidebar from "../Sidebar";
import theme from "../theme";
import Header from "../Header";
import NavbarItem from "../Header/NavbarItem";

// Guttenberg block library 12.2.0
import gutenbergStyle from "../../styles/style.min.css";
import gutenbergTheme from "../../styles/theme.min.css";

// Roboto fonts for Material UI
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Global, css } from "@emotion/react";
import ScrollToTop from "./ScrollToTop";
import { NavbarSettingsItem } from "../Header/types";

const Archive = loadable(() => import("../Content/Archive"));
const Post = loadable(() => import("../Content/Post"));
const Error404 = loadable(() => import("../Error/Error404"));

const App = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <Global styles={css(gutenbergStyle)} />
      <Global styles={css(gutenbergTheme)} />
      <Head>
        <title>{state.frontity.title}</title>
        <meta name="description" content={state.frontity.description} />
        <meta name="google-site-verification" content=${{ env.GOOGLE_SEARCH_CONSOLE }} />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <MobileProvider>
          <Container maxWidth="lg">
            <Header
              title={state.frontity.title}
              tagline={state.frontity.description}
              userAgent={state.theme.userAgent}
              listItems={state.theme.menu.map((it: NavbarSettingsItem) =>
                NavbarItem.changeToItem(it)
              )}
            />
            <main>
              <Grid container spacing={5} mt={-1.5}>
                <Grid item xs={12} md={8}>
                  <Switch>
                    {/* <Loading when={data.isFetching} type={"PAGE"} /> */}
                    <Archive
                      when={data.isArchive}
                      fallback={<Loading type={"ARCHIVE"} />}
                    />
                    <Post
                      when={data.isPost || data.isPage}
                      fallback={
                        <Loading type={data.isPage ? "PAGE" : "POST"} />
                      }
                    />
                    <Error404
                      when={data.isError}
                      fallback={<Loading type={"PAGE"} />}
                    />
                  </Switch>
                </Grid>
                <Sidebar />
              </Grid>
            </main>
          </Container>
        </MobileProvider>
        <ScrollToTop />
        <Footer
          title="Miracle Executors!"
          description="A blog where Miracutor excutes miracles...🤣"
        />
      </ThemeProvider>
    </>
  );
};

export default connect(App);
