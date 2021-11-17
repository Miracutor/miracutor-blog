import React from "react";
import { connect, Head, loadable } from "frontity";
import Switch from "@frontity/components/switch";
import Container from "@mui/material/Container";
import Skeleton from "@mui/material/Skeleton";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { ThemeProvider } from "@mui/material/styles";

import Navbar from "../Navbar";
import NavItem from "../Navbar/NavItem";
import Footer from "../Footer";
import Loading from "../Loading";
// import PostList from "../PostList";
import Sidebar from "../Sidebar";
import theme from "../theme";
// import View from "../View";
// import Error404 from "../Error/Error404";

//const Navbar = loadable(() => import("../Navbar"));
//const NavItem = loadable(() => import("../Navbar/NavItem"));
//const Footer = loadable(() => import("../Footer"));
//const Loading = loadable(() => import("../Loading"));
const PostList = loadable(() => import("../PostList"));
//const Sidebar = loadable(() => import("../Sidebar"));
const View = loadable(() => import("../View"));
const Error404 = loadable(() => import("../Error/Error404"));

const App = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <Head>
        <title>{state.frontity.title}</title>
        <meta name="description" content={state.frontity.description} />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Navbar
            title={state.frontity.title}
            tagline={state.frontity.description}
            spacing={3}
          >
            <NavItem name={"Home"} link={"/"} />
            <NavItem name={"Library"} link={"/library"}>
              <NavItem
                name={"Is it Tough Being a Friend?"}
                link={"/library/is-it-tough-being-a-friend"}
              />
              <NavItem
                name={"Yumemiru Danshi wa Genjitsushugisha"}
                link={"/library/yumemiru-danshi-wa-genjitsushugisha"}
              />
            </NavItem>
            <NavItem name={"Translations"} link={"/translations"}>
              <NavItem
                name={"Gi(a)rlish Number"}
                link={"/translations/giarlish-number"}
              >
                <NavItem
                  name={"Volume 1, Chapter 2, Part 1"}
                  link={"/translations/giarlish-number/v1c2part1"}
                />
                <NavItem
                  name={"Volume 1, Chapter 2, Part 2"}
                  link={"/translations/giarlish-number/v1c2part2"}
                />
              </NavItem>
            </NavItem>
            <NavItem name={"Works"} link={"/works"}>
              <NavItem
                name={"A Certain Reincarnated Omnipotent"}
                link={"/works/a-certain-reincarnated-omnipotent"}
              />
            </NavItem>
            <NavItem name={"Contact"} link={"/contact-me"} />
            <NavItem name={"About"} link={"/about"} />
          </Navbar>
          <main>
            <Grid container spacing={5} mt={0}>
              <Grid item xs={12} md={8}>
                <Switch>
                  <Loading when={data.isFetching} />
                  <PostList when={data.isArchive} fallback={<Loading />}/>
                  <View when={data.isPost || data.isPage} fallback={<Loading />}/>
                  <Error404 when={data.isError} fallback={<Loading />}/>
                  {/* <Skeleton
                    variant="rectangular"
                    sx={{ p: 3 }}
                  /> */}
                </Switch>
              </Grid>
              <Sidebar />
            </Grid>
          </main>
        </Container>
        <Footer
          title="Miracle Executors!"
          description="A blog where Miracutor excutes miracles...🤣"
        />
      </ThemeProvider>
    </>
  );
};

export default connect(App);
