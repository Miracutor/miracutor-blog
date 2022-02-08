import React from "react";
import { connect, decode, loadable } from "frontity";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/system/Box";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import AuthorDateComponent from "../Post/AuthorDateComponent";
import Pagination from "../Pagination";
import { useCustomSsrMatchMedia } from "../utils";

const FeaturedMedia = loadable(() => import("../FeaturedMedia"));

const Archive = ({ state, actions, libraries, when }) => {
  const data = state.source.get(state.router.link);
  const Html2React = libraries.html2react.Component;

  const { ssrMatchMedia } = useCustomSsrMatchMedia(state.theme.userAgent);
  const fetchMobileStatus = () => useMediaQuery("(max-width:768px)", { ssrMatchMedia });

  return (
    <Container sx={{ px: 0 }}>
      {data.items.map((item) => {
        const post = state.source[item.type][item.id];
        const media = state.source.attachment[post.featured_media];
        const author = state.source.author[post.author];

        return (
          <Box sx={{ mb: 5 }} key={item.id}>
            <Card variant="outlined" sx={{ py: 3, px: 1 }}>
              {media && <CardMedia component={FeaturedMedia} media={media} />}
              <CardContent>
                <Link
                  underline="hover"
                  href={post.link}
                  sx={{ textAlign: "center" }}
                >
                  <Typography variant={fetchMobileStatus() ? "h5" : "h4"}>
                    {decode(post.title.rendered.replace("&nbsp;", " "))}
                  </Typography>
                </Link>
                <AuthorDateComponent
                  authorName={author.name}
                  date={post.date}
                />
                <Html2React html={post.content.rendered} />
              </CardContent>
            </Card>
          </Box>
        );
      })}
      <Pagination />
    </Container>
  );
};

export default connect(Archive);
