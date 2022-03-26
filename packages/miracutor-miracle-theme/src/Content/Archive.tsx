import React from "react";
import { connect } from "frontity";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import Pagination from "../Pagination";
import { useCustomSsrMatchMedia, WrapInView } from "../utils";
import Loading from "../Loading";
import Content from ".";

const Archive = ({ state, libraries, when }) => {
  const data = state.source.get(state.router.link);
  const Html2React = libraries.html2react.Component;

  const { ssrMatchMedia } = useCustomSsrMatchMedia(state.theme.userAgent);
  const fetchMobileStatus = () =>
    useMediaQuery("(max-width:768px)", { ssrMatchMedia });

  return (
    <>
      <Container sx={{ px: 0 }}>
        <Stack direction="column" spacing={5}>
          {data.items.map((item: { type: string | number; id: number; }) => {
            const post = state.source[item.type][item.id];

            return (
              <WrapInView
                key={item.id}
                fallback={<Loading type={"ARCHIVEPOST"} />}
              >
                <Content
                  title={post.title.rendered}
                  link={post.link}
                  type="ARCHIVEPOST"
                  media={state.source.attachment[post.featured_media]}
                  authorName={state.source.author[post.author].name}
                  postDate={post.date}
                  Html2React={Html2React}
                  htmlContent={post.content.rendered}
                  mobileStatus={fetchMobileStatus()}
                />
              </WrapInView>
            );
          })}
          <Pagination />
        </Stack>
      </Container>
    </>
  );
};

export default connect(Archive);
