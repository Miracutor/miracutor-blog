import React from "react";
import { connect } from "frontity";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Pagination from "../Pagination";
import { WrapInView, isListing } from "../utils";
import Loading from "../Loading";
import Content from ".";
import ArchiveQueryCard from "./ArchiveQueryCard";

const Archive = ({ state, libraries, when }) => {
  const data = state.source.get(state.router.link);
  const Html2React = libraries.html2react.Component;
  const { query } = libraries.source.parse(state.router.link);
  const { isTag, isCategory } = isListing(state.router.link);

  return (
    <>
      <Container sx={{ px: 0 }}>
        <Stack direction="column" spacing={5}>
          {(query.s || isTag || isCategory) && ( // If there is a search query, display the query card.
            <ArchiveQueryCard />
          )}
          {data.items.map((item: { type: string | number; id: number }) => {
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
