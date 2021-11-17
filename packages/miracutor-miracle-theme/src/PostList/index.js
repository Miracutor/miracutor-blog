import React from "react";
import { connect, decode, loadable } from "frontity";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/system/Box";
import Container from "@mui/material/Container";
import ViewAuthorDate from "../View/ViewAuthorDate";

const FeaturedMedia = loadable(() => import("../FeaturedMedia"));

const PostList = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);
  const Html2React = libraries.html2react.Component;

  return (
    <Container>
      {data.items.map((item) => {
        const post = state.source[item.type][item.id];
        const media = state.source.attachment[post.featured_media];
        const author = state.source.author[post.author];

        return (
          <Box sx={{ mb: 5 }} key={item.id}>
            <Card variant="outlined" sx={{ p: 3 }}>
              {media && <CardMedia component={FeaturedMedia} media={media} />}
              <CardContent>
                <PostLink link={post.link}>
                  <Typography variant="h4">
                    {decode(post.title.rendered.replace("&nbsp;", " "))}
                  </Typography>
                </PostLink>
                <ViewAuthorDate authorName={author.name} date={post.date} />
                {/* <Typography
                  variant="subtitle2"
                  textAlign={"center"}
                  sx={{ mb: 3, mt: 2 }}
                >
                  <PersonRoundedIcon sx={{ mb: -0.5 }} /> {author.name}{" "}
                  <EventRoundedIcon sx={{ mb: -0.5 }} /> {formattedDate}
                </Typography> */}
                <Html2React html={post.content.rendered} />
              </CardContent>
            </Card>
          </Box>
        );
      })}
      <PrevNextNav>
        {data.previous && (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              actions.router.set(data.previous);
              window.scrollTo(0, 0);
            }}
          >
            &#171; Prev
          </Button>
        )}
        {data.next && (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              actions.router.set(data.next);
              window.scrollTo(0, 0);
            }}
          >
            Next &#187;
          </Button>
        )}
      </PrevNextNav>
    </Container>
  );
};

const Items = styled("div")`
  & > a {
    display: block;
    margin: 6px 0;
    font-size: 1.2em;
    color: steelblue;
    text-decoration: none;
  }
`;
const PrevNextNav = styled("div")`
  padding-top: 1.5em;

  & > button {
    padding: 0.5em 1em;
    margin-right: 2em;
  }
  & > button:hover {
    cursor: pointer;
  }
`;

export default connect(PostList);

const PostLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
